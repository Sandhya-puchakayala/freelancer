'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const contentOverlayRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const introVideo = introVideoRef.current;
    const backgroundVideo = backgroundVideoRef.current;
    const videoWrapper = videoWrapperRef.current;
    const contentOverlay = contentOverlayRef.current;

    if (!introVideo || !backgroundVideo || !videoWrapper || !contentOverlay) return;

    // When intro video ends, hide it and show background video with content
    const handleVideoEnd = () => {
      videoWrapper.classList.add(styles.hidden);
      contentOverlay.classList.add(styles.active);
      setShowOverlay(true);

      // Ensure background video is playing
      backgroundVideo
        .play()
        .catch((error) => console.log('Background video play error:', error));
    };

    // Keep background video looping continuously
    const handleBackgroundVideoEnd = () => {
      backgroundVideo.currentTime = 0;
      backgroundVideo
        .play()
        .catch((error) => console.log('Background video replay error:', error));
    };

    introVideo.addEventListener('ended', handleVideoEnd);
    backgroundVideo.addEventListener('ended', handleBackgroundVideoEnd);

    return () => {
      introVideo.removeEventListener('ended', handleVideoEnd);
      backgroundVideo.removeEventListener('ended', handleBackgroundVideoEnd);
    };
  }, []);

  return (
    <div className={styles.container}>
      <video
        ref={backgroundVideoRef}
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        crossOrigin="anonymous"
      >
        <source
          src="https://res.cloudinary.com/dawgv7mq0/video/upload/v1774972034/doc_hero_2_nrqkzp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div ref={videoWrapperRef} className={styles.videoWrapper}>
        <video
          ref={introVideoRef}
          autoPlay
          muted
          playsInline
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E"
        >
          <source
            src="https://res.cloudinary.com/dawgv7mq0/video/upload/v1774971876/doc_hero_1_kvy5yi.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div ref={contentOverlayRef} className={styles.contentOverlay}>
        {/* Navbar */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>ADAMUS</div>
          <div className={styles.menuItems}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <button className={styles.menuButton}>Menu</button>
          </div>
        </nav>

        {/* Split Hero Layout */}
        <div className={styles.heroSplit}>

          {/* Left Panel — Black bg + N4Y logo + tagline */}
          <div className={styles.heroLeft}>
            <Link href="/page2" className={styles.n4yLogoBlock}>
              <span className={styles.n4yTitle}>N4Y</span>
              <span className={styles.n4ySubtitle}>NONJUDGMENTAL 4 YOU</span>
            </Link>
            <div className={styles.taglineBlock}>
              <p className={styles.taglineMain}>No Judgment. Just You.</p>
              <p className={styles.taglineSub}>
                A safe space where you can speak freely,<br />
                be heard, and be understood.
              </p>
            </div>
          </div>

          {/* Right Panel — Large image */}
          <div className={styles.heroRight}>
            <img
              src="https://res.cloudinary.com/da4i4bcnr/image/upload/v1777358145/file_00000000d420720bb431670530f4eed6-removebg-preview_eljtpp.png"
              alt="Content Image"
              className={styles.heroImage}
            />
          </div>

        </div>

      </div>
    </div>
  );
}
