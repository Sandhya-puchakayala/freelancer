'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const contentOverlayRef = useRef<HTMLDivElement>(null);

  const [showOverlay, setShowOverlay] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  // Runs before first paint — skip intro instantly if already seen this session
  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem('home_intro_seen')) {
      setSkipIntro(true);
      setShowOverlay(true);
    }
  }, []);

  useEffect(() => {
    const backgroundVideo = backgroundVideoRef.current;
    const contentOverlay = contentOverlayRef.current;
    if (!backgroundVideo) return;

    backgroundVideo.play().catch(() => {});

    // Skip intro — just activate the content overlay
    if (sessionStorage.getItem('home_intro_seen')) {
      if (contentOverlay) contentOverlay.classList.add(styles.active);
      return;
    }

    const introVideo = introVideoRef.current;
    const videoWrapper = videoWrapperRef.current;
    if (!introVideo || !videoWrapper || !contentOverlay) return;

    const handleVideoEnd = () => {
      sessionStorage.setItem('home_intro_seen', '1');
      videoWrapper.classList.add(styles.hidden);
      contentOverlay.classList.add(styles.active);
      setShowOverlay(true);
      backgroundVideo.play().catch(() => {});
    };

    const handleBackgroundVideoEnd = () => {
      backgroundVideo.currentTime = 0;
      backgroundVideo.play().catch(() => {});
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
          src="https://res.cloudinary.com/dawgv7mq0/video/upload/q_auto,f_auto/doctor_homepage_final_2_1_gvre7h.mp4"
          type="video/mp4"
        />
      </video>

      {/* Only render intro video if not skipping */}
      {!skipIntro && (
        <div ref={videoWrapperRef} className={styles.videoWrapper}>
          <video
            ref={introVideoRef}
            autoPlay
            muted
            playsInline
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E"
          >
            <source
              src="https://res.cloudinary.com/dawgv7mq0/video/upload/q_auto,f_auto/doctor_homepage_final_1_1_wke3gh.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      <div
        ref={contentOverlayRef}
        className={`${styles.contentOverlay} ${(showOverlay || skipIntro) ? styles.active : ''}`}
      >
        {/* Navbar */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>N4Y</div>
          <div className={styles.menuItems}>
            <Link href="/about">About</Link>
            <a href="#services">Services</a>
            <Link href="/contact">Contact</Link>
            <button className={styles.menuButton}>Menu</button>
          </div>
        </nav>

        {/* Split Hero Layout */}
        <div className={styles.heroSplit}>
          <div className={styles.heroLeft}>
            <Link href="/page2" className={styles.n4yLogoBlock}>
              <span className={styles.n4yTitle}>N4Y</span>
              <span className={styles.n4ySubtitle}>NONJUDGMENTAL 4 YOU</span>
              <span className={styles.n4yExplore}>Explore</span>
            </Link>
            <div className={styles.taglineBlock}>
              <p className={styles.taglineMain}>No Judgment. Just You.</p>
              <p className={styles.taglineSub}>
                A safe space where you can speak freely,<br />
                be heard, and be understood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
