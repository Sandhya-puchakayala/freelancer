'use client';

import Link from 'next/link';
import styles from '../page2.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const IMAGES = [
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
];

export default function Page2Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.butterflybg} />
      <div className={styles.bgOverlay} />

      <nav className={styles.cardsNavbar}>
        <Link href="/" className={styles.logo}>N4Y</Link>
        <div className={styles.menuItems}>
          <Link href="/about">About</Link>
          <a href="#">Work</a>
          <Link href="/contact">Contact</Link>
          <Link href="/" className={styles.backBtn}>← Back</Link>
        </div>
      </nav>

      <section className={styles.cardsSection}>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          observer
          observeParents
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className={styles.mySwiper}
        >
          {IMAGES.map((imgUrl, i) => (
            <SwiperSlide key={i} className={styles.swiperSlide}>
              <Link href="/contact" className={styles.card}>
                <img src={imgUrl} alt={`Slide ${i + 1}`} className={styles.cardImg} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
