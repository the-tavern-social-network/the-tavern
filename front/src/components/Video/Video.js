import React from 'react';
import video from '../../assets/video/backgroundvideo.mp4';

import styles from './Video.module.scss';

const Video = () => {
  return (
    <video className={styles.Video} id="background-video" loop autoPlay>
      <source src={video} type="video/mp4" />
      <source src={video} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
