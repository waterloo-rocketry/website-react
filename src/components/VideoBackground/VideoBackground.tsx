import React, { useRef } from 'react';

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

  return (
    <div className={styles.bannerPhoto} style={style}>
      <video
        ref={videoRef}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.4;
        }}
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
