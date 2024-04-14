'use client'
import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <Link href="/signUp">SignUp Page</Link>
      <Link href="/login">Login Page</Link>

      <h1>Contact</h1>
    </div>
  )
}

export default Contact