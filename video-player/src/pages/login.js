"use client";

import React, { useState } from "react";
import Layout from '../components/page-layout/layout';
import styles from '../styles/Login.module.css'
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        const data = await signIn("credentials", {
          redirect: false,
          email,
          password
        });
  
        console.log(data);
      } catch (error) {
        console.log(error);
    }
  };

  return (
        <>
            <Layout>
                <div className={styles.container}>
                    <form
                        onSubmit={submitHandler}
                    >
                        <h2 className={styles.title}>Login</h2>

                        <div>
                            <label className={styles.formLabel} htmlFor="email_field">
                                Email address
                            </label>
                            
                            <input
                                type="email"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className={styles.formLabel} htmlFor="password_field">
                                Password
                            </label>
                            <input
                                type="password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submit}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </Layout>
        </>
  );
};

export default Login;