'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page2.module.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

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
          onEnded={() => setVideosDone(true)}
        >
          <source
            // src="https://res.cloudinary.com/dawgv7mq0/video/upload/v1774971876/doc_hero_1_kvy5yi.mp4"
            src="https://res.cloudinary.com/dawgv7mq0/video/upload/q_auto,f_auto/Doctor_transion_1_final_1_toxl15.mp4"
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
          <Link href="/" className={styles.logo}>N4Y</Link>
          <div className={styles.menuItems}>
            <Link href="/about">About</Link>
            <a href="#">Work</a>
            <Link href="/contact">Contact</Link>
            <Link href="/" className={styles.backBtn}>← Back</Link>
          </div>
        </nav>

        {/* Carousel Section */}
        <section className={styles.sliderSection}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            observer={true}
            observeParents={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={styles.mySwiper}
          >
            {[
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778346777/RelationshipSexualHealt_lww7mc.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778346861/EmotionalHealingLifeMeanin_jcbbnr.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778346901/ProvenTherapyMethod_o9dkhs.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778346939/ChildrenTeensFocusProblem_dduppy.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778346998/MoodHabitsEatingProblem_dwrptc.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778347041/SeriousMentalHealthChallenge_axl5ty.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778347077/FeelingLowStressedorUnabletoSlee_rlry0i.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778347120/ManagingEmotionsBehavio_rgmps5.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778347183/CareerGoalsProductivit_fu3shq.jpg',
              'https://res.cloudinary.com/dawgv7mq0/image/upload/v1778347228/FamilyLifeStageSuppor_zlw5yy.jpg',
            ].map((imgUrl, slideIndex) => (
              <SwiperSlide key={slideIndex} className={styles.swiperSlide}>
                <Link href="/contact" className={styles.card}>
                  <img
                    src={imgUrl}
                    alt={`Slide ${slideIndex + 1}`}
                    className={styles.cardImg}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </div>
    </div>
  );
}
