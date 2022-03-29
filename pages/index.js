import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

import Navbar from '../components/navbar';
import HomePage from '../components/homePage';
import dbConnect from '../lib/dbConnect';
import Project from '../models/Project';

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`

const Index = () => {
  const router = useRouter()
  const { data, loading, error } = useQuery(ViewerQuery)
  const viewer = data?.viewer
  // const shouldRedirect = !(loading || error || viewer)

  // useEffect(() => {
  //   if (shouldRedirect) {
  //     router.push('/signin')
  //   }
  // }, [shouldRedirect])

  // if (error) {
  //   return (
  //     <>
  //       <div>error</div>
  //     </>
  //   )
  // }

  // if (viewer) {
  //   return (
  // <>
  //   <Navbar />
  //   <HomePage />
  // </>
  //   )
  // }

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Project.find()
  const projects = result.map((doc) => {
    const project = doc.toObject()
    project._id = project._id.toString()
    return project
  })

  return { props: { projects: projects } }
}

export default Index
