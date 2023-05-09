import { useState, useEffect } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../../styles/Home.module.css'

const MyCustomPlayer = ({ url }) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={styles.boxVideo}>
      <h2>Title: {url.split("/")[2]}</h2>
        {hasWindow && (
          <ReactPlayer
            url={url}
            width="50%"
            height="50%"
            controls
          />
        )} 
    </div>
  );
};

export default MyCustomPlayer;