'use client';

import Navbar from './navbar';
import Footer from './footer';
import styles from '../../styles/Home.module.css'
import { SessionProvider } from 'next-auth/react';

const Layout = ({ children }) => {
  return (
    <div>
      <SessionProvider>

        <Navbar />

          <div className={styles.container}>

            <main>{children}</main>
            
          </div>

        <Footer />

      </SessionProvider>
    </div>
  );
};

export default Layout;
