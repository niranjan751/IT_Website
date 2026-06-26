import { useState } from "react";
import "./TrainingAndCertification.css";

const heroSlides = [
  {
    tag: "Customer Training",
    headline: "Your product journey,",
    highlight: "accelerated.",
    desc: "Dive deep into Zoho expertise to unlock product proficiency and drive tangible business results.",
    cta: "Immerse now",
    icon: "🎯",
  },
  {
    tag: "Partner Training",
    headline: "Amplify your",
    highlight: "partner potential.",
    desc: "Upsell and directly convert deep product knowledge into profitable business growth.",
    cta: "Partner explore",
    icon: "🤝",
  },
  {
    tag: "Educational Training",
    headline: "Skills for tomorrow,",
    highlight: "delivered today.",
    desc: "Go beyond textbooks to unlock the technical and industry expertise required for real-world impact.",
    cta: "Skill forward",
    icon: "🎓",
  },
  {
    tag: "Certification",
    headline: "Prove your",
    highlight: "Zoho mastery.",
    desc: "Level up your expertise and gain the certified mastery required for product success.",
    cta: "Certify now",
    icon: "🏆",
  },
];

const benefits = [
  {
    id: "expertise",
    label: "Product expertise",
    heading: "Acquire in-depth knowledge of Zoho products.",
    body: "Gain a competitive edge in your industry by learning best practices from real-life use cases and scenarios.",
    color: "#4f46e5",
    icon: "📘",
  },
  {
    id: "learning",
    label: "Versatile learning",
    heading: "A comprehensive platform for every learner.",
    body: "Experience flexible training delivery modes. You'll gain holistic product insights and take your business to a new level.",
    color: "#0891b2",
    icon: "🌐",
  },
  {
    id: "flexibility",
    label: "Complete flexibility",
    heading: "Learn on your schedule, anywhere.",
    body: "Explore setup, customization, and integration options for our products, and choose the learning mode that works best for you.",
    color: "#059669",
    icon: "🔧",
  },
  {
    id: "certification",
    label: "Product certification",
    heading: "Earn credentials that define your credibility.",
    body: "Validate your technical expertise by getting certified in Zoho products. Stand out in your field with recognized credentials.",
    color: "#d97706",
    icon: "🏅",
  },
];

const trainingModes = [
  {
    icon: "🏫",
    title: "Classroom Training",
    desc: "Face-to-face interaction with trainers and hands-on learning experiences in a structured setting.",
    cta: "Learn more",
  },
  {
    icon: "👤",
    title: "One-on-One Training",
    desc: "Private sessions tailored to your organization's specific needs, on your schedule.",
    cta: "Choose your product",
  },
  {
    icon: "💻",
    title: "Virtual Classroom",
    desc: "Gain technical knowledge about our products from the comfort of your home or office.",
    cta: "Choose your schedule",
  },
  {
    icon: "✈️",
    title: "Fly Me a Trainer",
    desc: "Exclusive on-site training for individuals or teams — we bring the expert to you.",
    cta: "Register now",
  },
];

const certBadges = [
  { label: "Zoho Desk", color: "#ef4444" },
  { label: "Zoho CRM", color: "#4f46e5" },
  { label: "SalesIQ", color: "#0891b2" },
  { label: "Zoho Sign", color: "#059669" },
];

const testimonials = [
  {
    quote:
      "I can't believe that I went so long before enrolling in the training. I highly recommend the Zoho CRM training — it's helping my organization already.",
    name: "Jenson Jones",
    role: "CEO, HOMECARE",
    initials: "JJ",
    color: "#4f46e5",
  },
  {
    quote:
      "I learned so much from the course. It was due to the trainer's excellent delivery — his pace, explanations, patience, and accurate answers led to a productive learning environment.",
    name: "Kevin Chieff",
    role: "Zoho Partner, Cloud Skills LLC",
    initials: "KC",
    color: "#0891b2",
  },
  {
    quote:
      "It was a very interactive class. It illustrated areas where we're really on track and also where we could use more of the tool for scalability.",
    name: "Jennifer Shea",
    role: "Director of Sales and Marketing",
    initials: "JS",
    color: "#059669",
  },
];

const faqs = [
  {
    q: "What training programs are available for Zoho products?",
    a: "We offer virtual classrooms and one-on-one online training. Virtual classrooms follow a published schedule with multiple organizations. One-on-one sessions are arranged on request at a time convenient for you.",
  },
  {
    q: "Which training type is suitable for me?",
    a: "If you need to clarify in-depth product and business queries privately, choose one-on-one training. For broader knowledge sharing, virtual classrooms are ideal.",
  },
  {
    q: "What is the difference between online training and virtual classrooms?",
    a: "Online training is one-on-one and scheduled based on availability. Virtual classrooms are scheduled beforehand, instructor-led, and open to users from multiple organizations.",
  },
];

export default function TrainingAndCertification() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState("customer");

  return (
    <div className="tc-root">
      {/* NAVBAR */}
      <nav className="tc-nav">
        <div className="tc-nav-inner">
          <div className="tc-logo">
            <span className="tc-logo-spark">Spark</span>
            <span className="tc-logo-by">by Zoho</span>
          </div>
          <ul className="tc-nav-links">
            <li><a href="#">Training</a></li>
            <li><a href="#">Certification</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Self Learning</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
          <button className="tc-nav-cta">Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="tc-hero">
        <div className="tc-hero-bg-shape" />
        <div className="tc-hero-content">
          <div className="tc-hero-left">
            <span className="tc-hero-tag">{heroSlides[activeSlide].tag}</span>
            <h1 className="tc-hero-heading">
              {heroSlides[activeSlide].headline}{" "}
              <span className="tc-hero-highlight">{heroSlides[activeSlide].highlight}</span>
            </h1>
            <p className="tc-hero-desc">{heroSlides[activeSlide].desc}</p>
            <button className="tc-hero-cta">{heroSlides[activeSlide].cta} →</button>
          </div>
          <div className="tc-hero-right">
            <div className="tc-hero-icon-box">{heroSlides[activeSlide].icon}</div>
          </div>
        </div>
        <div className="tc-hero-tabs">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              className={`tc-hero-tab ${activeSlide === i ? "active" : ""}`}
              onClick={() => setActiveSlide(i)}
            >
              {s.tag}
            </button>
          ))}
        </div>
      </section>

      {/* WHAT'S NEW — Self Learning */}
      <section className="tc-new">
        <div className="tc-container">
          <div className="tc-new-badge">What's New!</div>
          <div className="tc-new-card">
            <div className="tc-new-text">
              <h2>Self Learning</h2>
              <p>
                Dive into our expert-led Zoho courses to gain practical skills. Learn on your
                schedule with interactive lessons accessible anywhere, anytime.
              </p>
              <button className="tc-btn-primary">Register Now →</button>
            </div>
            <div className="tc-new-visual">
              <div className="tc-new-screen">
                <div className="tc-screen-bar" />
                <div className="tc-screen-line" />
                <div className="tc-screen-line short" />
                <div className="tc-screen-line" />
                <div className="tc-screen-line short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="tc-benefits">
        <div className="tc-container">
          <h2 className="tc-section-title">Benefits of training &amp; certification</h2>
          <p className="tc-section-sub">
            The right training mode is integral to your success. Our goal is to enhance your
            learning experience.
          </p>
          <div className="tc-benefits-tabs">
            {benefits.map((b, i) => (
              <button
                key={b.id}
                className={`tc-benefit-tab ${activeBenefit === i ? "active" : ""}`}
                style={{ "--accent": b.color }}
                onClick={() => setActiveBenefit(i)}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="tc-benefits-panel">
            <div className="tc-benefit-icon" style={{ background: benefits[activeBenefit].color }}>
              {benefits[activeBenefit].icon}
            </div>
            <div className="tc-benefit-text">
              <h3>{benefits[activeBenefit].heading}</h3>
              <p>{benefits[activeBenefit].body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING MODES */}
      <section className="tc-modes">
        <div className="tc-container">
          <h2 className="tc-section-title">Training modes</h2>
          <p className="tc-section-sub">
            Choose the path that fits your schedule and style — we'll guide you to the destination.
          </p>
          <div className="tc-modes-tabs">
            <button
              className={`tc-mode-seg ${activeTab === "customer" ? "active" : ""}`}
              onClick={() => setActiveTab("customer")}
            >Customer</button>
            <button
              className={`tc-mode-seg ${activeTab === "partner" ? "active" : ""}`}
              onClick={() => setActiveTab("partner")}
            >Partner</button>
          </div>
          <div className="tc-modes-grid">
            {trainingModes.map((m, i) => (
              <div className="tc-mode-card" key={i}>
                <div className="tc-mode-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <a href="#" className="tc-mode-link">{m.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="tc-cert">
        <div className="tc-container tc-cert-inner">
          <div className="tc-cert-text">
            <span className="tc-cert-eyebrow">Zoho Certification</span>
            <h2>Prove your mastery. Earn your badge.</h2>
            <p>
              Validate your technical expertise by getting certified in Zoho products. Earn the
              credentials that truly define your professional credibility.
            </p>
            <button className="tc-btn-primary">Explore Certifications →</button>
          </div>
          <div className="tc-cert-badges">
            {certBadges.map((b, i) => (
              <div
                key={i}
                className="tc-cert-badge"
                style={{ background: b.color + "18", border: `2px solid ${b.color}` }}
              >
                <div className="tc-badge-ring" style={{ borderColor: b.color }}>
                  <span style={{ color: b.color }}>✓</span>
                </div>
                <span className="tc-badge-label" style={{ color: b.color }}>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="tc-testimonials">
        <div className="tc-container">
          <h2 className="tc-section-title">What our customers say</h2>
          <div className="tc-testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="tc-testimonial-card" key={i}>
                <div className="tc-quote-mark">"</div>
                <p className="tc-testimonial-text">{t.quote}</p>
                <div className="tc-testimonial-author">
                  <div
                    className="tc-author-avatar"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="tc-author-name">{t.name}</div>
                    <div className="tc-author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tc-faq">
        <div className="tc-container tc-faq-inner">
          <h2 className="tc-section-title">Frequently asked questions</h2>
          <div className="tc-faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`tc-faq-item ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="tc-faq-q">
                  <span>{f.q}</span>
                  <span className="tc-faq-icon">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <div className="tc-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
          <a href="#" className="tc-faq-more">View all FAQs →</a>
        </div>
      </section>

      {/* REGISTER CTA BANNER */}
      <section className="tc-register">
        <div className="tc-container tc-register-inner">
          <div>
            <h2>Ready to get started?</h2>
            <p>Register for online training today and accelerate your Zoho product journey.</p>
          </div>
          <button className="tc-btn-white">Register for Training →</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="tc-footer">
        <div className="tc-container tc-footer-inner">
          <div className="tc-footer-brand">
            <span className="tc-logo-spark">Spark</span>
            <span className="tc-logo-by">by Zoho</span>
            <p>Training and Certification Platform</p>
          </div>
          <div className="tc-footer-links">
            <div>
              <strong>Training</strong>
              <a href="#">Customer</a>
              <a href="#">Partner</a>
              <a href="#">Educational</a>
            </div>
            <div>
              <strong>Resources</strong>
              <a href="#">Events</a>
              <a href="#">Self Learning</a>
              <a href="#">FAQs</a>
            </div>
            <div>
              <strong>Company</strong>
              <a href="#">About Zoho</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="tc-footer-bottom">
          © 2024 Zoho Corporation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
