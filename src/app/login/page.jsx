import React from 'react';
import classes from './login.module.css';
import Link from 'next/link';

const Login = () => {
  return (
    <div>

      <Link href="/signUp">SignUp Page</Link>
      <Link href="/contact">Contact Page</Link>

        <h1>Login</h1>
        <button className={classes.loginBtn}>Login Button</button>
    </div>
  )
}

export default Login;