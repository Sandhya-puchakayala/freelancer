'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page2.module.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Page2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDone, setVideosDone] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play video, force transition after 3 seconds
    video.play().catch(() => { });

    const timer = setTimeout(() => {
      setVideosDone(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>

      {/* ── 3-second Intro Video ── */}
      <div className={`${styles.introOverlay} ${videoDone ? styles.introHidden : ''}`}>
        <video
          ref={videoRef}
          className={styles.introVideo}
          muted
          playsInline
          autoPlay
        >
          <source
            // src="https://res.cloudinary.com/dawgv7mq0/video/upload/v1774971876/doc_hero_1_kvy5yi.mp4"
            src="https://res.cloudinary.com/dawgv7mq0/video/upload/v1774972034/doc_hero_2_nrqkzp.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.introVignette} />
      </div>

      {/* ── Main Content (fades in after video) ── */}
      <div className={`${styles.mainContent} ${videoDone ? styles.mainVisible : ''}`}>

        {/* Butterfly Background */}
        <div className={styles.butterflybg} />

        {/* Dark overlay for readability */}
        <div className={styles.bgOverlay} />

        {/* Navbar */}
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>ADAMUS</Link>
          <div className={styles.menuItems}>
            <a href="#">About</a>
            <a href="#">Work</a>
            <a href="#">Contact</a>
            <Link href="/" className={styles.backBtn}>← Back</Link>
          </div>
        </nav>

        {/* Message Text */}
        <div className={styles.messageSection}>
          <h2 className={styles.messageText}>Options for the services should display.</h2>
        </div>

        {/* Carousel Section */}
        <section className={styles.sliderSection}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            observer={true}
            observeParents={true}
            loop={false}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.mySwiper}
          >
            {Array.from({ length: 10 }).map((_, slideIndex) => (
              <SwiperSlide key={slideIndex} className={styles.swiperSlide}>
                <div className={styles.card}>
                  <img 
                    src={`https://picsum.photos/400/600?random=${slideIndex}`} 
                    alt={`Slide ${slideIndex + 1}`} 
                    className={styles.cardImg} 
                  />
                  <div className={styles.cardContent}>
                    <h3>Service Group {slideIndex + 1}</h3>
                    <div className={styles.optionsList}>
                      {Array.from({ length: 5 }).map((_, optionIndex) => {
                        const serviceNumber = slideIndex * 5 + optionIndex + 1;
                        return (
                          <div key={optionIndex} className={styles.optionItem}>
                            Service {serviceNumber}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>
    </div>
  );
}
