import React from 'react';
import MyCustomPlayer from '../components/video-custom/customPlayer';
import styles from '../styles/Home.module.css';
import Layout from '../components/page-layout/layout';

function App() {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <h1>My video player</h1>
          <div>
              <MyCustomPlayer
                url="/videos/work.mp4"
              />  
              <MyCustomPlayer
                url="/videos/devoirs.mp4"
              />  
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
