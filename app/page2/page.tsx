'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page2.module.css';

export default function Page2Intro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    const goToCards = () => router.replace('/page2/cards');

    const timer = setTimeout(goToCards, 3000);
    video.addEventListener('ended', goToCards);

    return () => {
      clearTimeout(timer);
      video.removeEventListener('ended', goToCards);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.introOverlay}>
        <video
          ref={videoRef}
          className={styles.introVideo}
          muted
          playsInline
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/dawgv7mq0/video/upload/q_auto,f_auto/Doctor_transion_1_final_1_toxl15.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.introVignette} />
      </div>
    </div>
  );
}
