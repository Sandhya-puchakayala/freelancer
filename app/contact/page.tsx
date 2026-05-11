'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {/* Background */}
      <div className={styles.bg} />
      <div className={styles.bgOverlay} />

      {/* Form Card */}
      <main className={styles.main}>
        {submitted ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>We&apos;ve received your message</h2>
            <p className={styles.successSub}>
              A member of our team will reach out to you shortly.<br />
              No judgment — just support.
            </p>
            <Link href="/page2" className={styles.backLink}>← Back to Services</Link>
          </div>
        ) : (
          <div className={styles.card}>
            <div className={styles.cardTopRow}>
              <span className={styles.tag}>NONJUDGMENTAL 4 YOU</span>
              <Link href="/page2" className={styles.closeBtn} aria-label="Close">✕</Link>
            </div>
            <div className={styles.cardHeader}>
              <h1 className={styles.title}>Talk to Us</h1>
              <p className={styles.subtitle}>
                A safe space starts with a conversation. Fill in your details and we&apos;ll be in touch.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    placeholder="+1 000 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Topic</label>
                  <select
                    className={styles.input}
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a topic</option>
                    <option>Relationship &amp; Sexual Health</option>
                    <option>Emotional Healing &amp; Life Meaning</option>
                    <option>Proven Therapy Methods</option>
                    <option>Children, Teens &amp; Focus Problems</option>
                    <option>Mood, Habits &amp; Eating Problems</option>
                    <option>Serious Mental Health Challenges</option>
                    <option>Feeling Low, Stressed or Unable to Sleep</option>
                    <option>Managing Emotions &amp; Behaviour</option>
                    <option>Career, Goals &amp; Productivity</option>
                    <option>Family &amp; Life Stage Support</option>
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Your Message <span className={styles.optional}>(optional)</span></label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="message"
                  placeholder="Tell us a little about what you're going through..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
