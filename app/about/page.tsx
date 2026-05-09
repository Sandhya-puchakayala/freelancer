'use client';

import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.bg} />
      <div className={styles.bgOverlay} />

      {/* Navbar */}
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>N4Y</Link>
        <div className={styles.menuItems}>
          <Link href="/about">About</Link>
          <a href="#">Services</a>
          <Link href="/contact">Contact</Link>
          <Link href="/" className={styles.backBtn}>← Back</Link>
        </div>
      </nav>

      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <span className={styles.tag}>NONJUDGMENTAL 4 YOU</span>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSub}>
            A safe space where you can speak freely, be heard, and be understood.
          </p>
        </section>

        {/* Stats */}
        <section className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years of Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5000+</span>
            <span className={styles.statLabel}>Individuals Supported</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7500+</span>
            <span className={styles.statLabel}>Therapy Sessions</span>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>OUR MISSION</div>
            <div className={styles.contentBlock}>
              <p>
                I am so glad you found and landed on this page to get the best clinical psychological
                treatment and support aimed at overcoming traumas, anxieties, depressions, relationship
                issues &amp; instabilities, anger, phobias, stress, and addictions — and to boost your
                Mental Health and Emotional Health with a view to lead your life at your own pace and
                at your own time.
              </p>
              <p>
                Every flower is stunning in nature, just like every person is unique. Each person has
                different psychological challenges. We hear the sufferings and struggles that you are
                fighting. We are here to make you feel comfortable without passing a single judgmental word.
              </p>
              <p className={styles.taglineHighlight}>
                Our main tagline is <strong>Non-Judgmental treatment for YOU.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionLabel}>WHAT WE STAND FOR</div>
            <div className={styles.contentBlock}>
              <p>
                Everyone deserves a life free from the drama of verbal, emotional, and physical abuse.
                We hear you and recognise your challenges, and we&apos;re here to support you in
                overcoming trauma by empowering your mindset and enhancing your mental well-being.
              </p>
              <p>
                We are dedicated to helping you regain your mental and emotional wellness. We value
                every individual with utmost respect and integrity — <strong>confidentiality is at
                the core of our practice.</strong>
              </p>
              <p>
                Ready to break free from heavy psychological burdens — past traumas, mental baggage,
                relationship drama, marital issues? Our online sessions are available <strong>round
                the clock.</strong> Our passion is to elevate your inner harmony and uplift your mental
                well-being to the fullest extent possible.
              </p>
            </div>
          </div>
        </section>

        {/* Values Cards */}
        <section className={styles.valuesGrid}>
          {[
            { icon: '🔒', title: 'Confidential', desc: 'Everything shared stays between you and your therapist. Always.' },
            { icon: '⚖️', title: 'Non-Judgmental', desc: 'No labels. No criticism. Just compassionate, professional support.' },
            { icon: '🌐', title: 'Always Available', desc: 'Online sessions available round the clock — on your schedule.' },
            { icon: '❤️', title: 'Holistic Care', desc: 'We treat the whole person — mind, emotion, and lived experience.' },
          ].map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </section>

        {/* Arjun's Note */}
        <section className={styles.noteSection}>
          <div className={styles.noteCard}>
            <div className={styles.noteLabel}>A NOTE FROM ARJUN</div>
            <blockquote className={styles.noteQuote}>
              Over the course of 5 years of experience in medical college and my professional journey,
              I connected with <strong>5,000+ individuals</strong> and facilitated{' '}
              <strong>7,500+ therapy sessions.</strong> I&apos;ve seen so many adults carry the weight
              of childhood traumas that have stayed buried for years. After therapy sessions, they are
              crafting their lives with happiness and joy.
            </blockquote>
            <p className={styles.noteBody}>
              Clinical studies and surveys reveal that throughout their lives, individuals encounter
              psychological challenges for a multitude of reasons in their everyday experiences.
              It is essential for every individual to recognise that long-term overthinking and
              psychological illnesses can turn into physical health problems.
            </p>
            <div className={styles.noteAuthor}>
              <div className={styles.authorAvatar}>A</div>
              <div>
                <div className={styles.authorName}>Arjun</div>
                <div className={styles.authorRole}>Clinical Psychologist · N4Y</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to take the first step?</h2>
          <p className={styles.ctaSub}>No judgment — just support, at your pace, on your terms.</p>
          <Link href="/contact" className={styles.ctaBtn}>Book a Session</Link>
        </section>

      </main>
    </div>
  );
}
