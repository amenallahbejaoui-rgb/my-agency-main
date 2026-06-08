"use client";

import { useState } from 'react';
import styles from './ReviewsFaq.module.css';

export default function ReviewsFaq() {
  const [activeReview, setActiveReview] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const reviews = [
    {
      id: 1,
      text: "I recently engaged in a website development project with an outstanding team, and the results were nothing short of exceptional. The team understood our company's level of services and professionalism was evident throughout the entire process.",
      author: "Joe Goldberg",
      avatar: "👤"
    },
    {
      id: 2,
      text: "Working with this agency was a game-changer for our business. They delivered exactly what we needed with incredible attention to detail and professionalism.",
      author: "Sarah Johnson",
      avatar: "👩"
    },
    {
      id: 3,
      text: "The team's expertise in AI and web development helped us create something truly innovative. Highly recommended for any serious project.",
      author: "Michael Chen",
      avatar: "👨"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How much does a website cost?",
      answer: "Website costs vary depending on complexity, features, and design requirements. We offer custom quotes based on your specific needs, ranging from simple landing pages to complex web applications with AI integration."
    },
    {
      id: 2,
      question: "How does the subscription work?",
      answer: "Our subscription model provides unlimited requests with priority-based execution. You can pause or cancel anytime, and we maintain a 2-day average turnaround time for most tasks."
    },
    {
      id: 3,
      question: "How do I pause or cancel?",
      answer: "You can pause or cancel your subscription at any time through your client portal or by contacting our team. There are no cancellation fees, and you retain access to all completed work."
    },
    {
      id: 4,
      question: "How do I communicate with you?",
      answer: "We offer multiple communication channels including Slack, email, and regular video calls. You'll have a dedicated project manager as your main point of contact throughout the project."
    },
    {
      id: 5,
      question: "What if I don't like the design?",
      answer: "We offer unlimited revisions until you're completely satisfied. Our design process includes multiple feedback rounds and approval stages to ensure the final result meets your expectations."
    }
  ];

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className={styles.reviewsFaq}>
      <div className={styles.container}>
        
        {/* Customer Reviews Section */}
        <div className={styles.reviewsSection}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle}>
              CUSTOMER<br />
              REVIEWS ABOUT<br />
              OUR WORK
            </h2>
            <div className={styles.reviewArrow}>↗</div>
          </div>
          
          <div className={styles.reviewsContainer}>
            <div className={styles.reviewCard}>
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>
                  {reviews[activeReview].text}
                </p>
                
                <div className={styles.reviewAuthor}>
                  <div className={styles.authorAvatar}>
                    {reviews[activeReview].avatar}
                  </div>
                  <span className={styles.authorName}>
                    {reviews[activeReview].author}
                  </span>
                </div>
              </div>
            </div>
            
            <div className={styles.reviewControls}>
              <button 
                className={styles.reviewBtn} 
                onClick={prevReview}
                aria-label="Previous review"
              >
                ←
              </button>
              <button 
                className={styles.reviewBtn} 
                onClick={nextReview}
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>FAQ's</h2>
          
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.id} className={styles.faqItem}>
                <button 
                  className={`${styles.faqQuestion} ${activeFaq === faq.id ? styles.active : ''}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {activeFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`${styles.faqAnswer} ${activeFaq === faq.id ? styles.open : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}