import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { useMutation, useApolloClient } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import Field from '../components/field';
import Navbar from '../components/navbar';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';

import styles from '../styles/login.module.css';

const SignInMutation = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`

function SignIn() {
  const client = useApolloClient()
  const [signIn] = useMutation(SignInMutation)
  const [errorMsg, setErrorMsg] = useState()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    
    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password
    // console.log(emailElement)

    try {
      await client.resetStore()
      const { data } = await signIn({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      })
      if (data.signIn.user) {
        await router.push('/')
      }
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <>
      <Navbar />
      <h1 className={`${styles.title}`}>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.formContainer}`}>
          <div className={`${styles.radius}`}>
            {errorMsg && <p>{errorMsg}</p>}
            <div className={`${styles.formItem}`}>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                required
                label="Email"
              />
            </div>
            <div className={`${styles.formItem}`}>
              <Field
                name="password"
                type="password"
                autoComplete="password"
                required
                label="Password"
              />
            </div>
            <button className={`${styles.btn}`} type="submit">Sign in</button> or{' '}
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await User.find()
  const users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    // console.log(user)
    return user
  })

  return { props: { users: users } }
}

export default SignIn
