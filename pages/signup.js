import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { gql, useMutation } from '@apollo/client'
import { getErrorMessage } from '../lib/form'
import Field from '../components/field'
import Navbar from '../components/navbar';

import styles from '../styles/login.module.css';

const SignUpMutation = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`

function SignUp() {
  const [signUp] = useMutation(SignUpMutation)
  const [errorMsg, setErrorMsg] = useState()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    const emailElement = event.currentTarget.elements.email
    const passwordElement = event.currentTarget.elements.password

    try {
      await signUp({
        variables: {
          email: emailElement.value,
          password: passwordElement.value,
        },
      })

      router.push('/signin')
    } catch (error) {
      setErrorMsg(getErrorMessage(error))
    }
  }

  return (
    <>
      <Navbar />
      <h1 className={`${styles.title}`}>Sign Up</h1>
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
            <button className={`${styles.btn}`} type="submit">Sign up</button> or{' '}
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default SignUp
