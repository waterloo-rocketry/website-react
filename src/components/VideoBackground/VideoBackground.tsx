import React, { useRef, useEffect } from 'react';

import styles from './VideoBackground.module.css';

interface VideoBackgroundProps {
  video: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// A background video spanning the width and height of the page
const VideoBackground: React.FC<VideoBackgroundProps> = ({
  video,
  style,
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
    }
  }, []);

  return (
    <div className={styles.bannerPhoto} style={style}>
      <video
        className={styles.backgroundVideo}
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.bannerText}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
