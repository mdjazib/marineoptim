import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <Link href="/signup">Sign up</Link>
    </>
  )
}

export default page