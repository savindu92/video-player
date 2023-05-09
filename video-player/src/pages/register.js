"use client";

import axios from "axios";
import React, { useState } from "react";
import Layout from '../components/page-layout/layout';
import styles from '../styles/Login.module.css'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = {name, email, password, role};
    try {
      const { data } = await axios.post("/api/register", 
        formData
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
        <Layout>
            <div className={styles.container}>
                <form onSubmit={submitHandler}>
                    <h2 className={styles.title}>Register</h2>

                    <div>
                      <label className={styles.formLabel} htmlFor="name_field">
                          Name
                      </label>

                      <input
                          type="text"
                          className={styles.input}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                      />
                    </div>

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

                    <div>
                      <label className={styles.formLabel} htmlFor="role_field">
                            Role
                      </label>
                      
                      <input
                          type="text"
                          className={styles.input}
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
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

export default Register;