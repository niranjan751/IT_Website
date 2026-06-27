import { useState } from "react";
import "../../styles/TrainingAndCertification.css";

const COURSES = [
  { icon: "🎯", title: "Zoho CRM Fundamentals", level: "Beginner", duration: "4 hrs", modules: 12 },
  { icon: "📊", title: "Zoho Analytics Deep Dive", level: "Intermediate", duration: "6 hrs", modules: 18 },
  { icon: "💼", title: "Zoho One Administration", level: "Advanced", duration: "10 hrs", modules: 28 },
  { icon: "🛠️", title: "Zoho Creator & Deluge Scripting", level: "Advanced", duration: "8 hrs", modules: 22 },
  { icon: "🤖", title: "AI & Automation with Zia", level: "Intermediate", duration: "5 hrs", modules: 15 },
  { icon: "📧", title: "Zoho Campaigns Mastery", level: "Beginner", duration: "3 hrs", modules: 9 },
];

const CERTS = [
  {
    title: "Zoho Certified Administrator",
    desc: "Validate your ability to configure, manage, and optimize Zoho apps across an organization.",
    badge: "🏅",
    price: "$149",
    exams: 1,
    validity: "2 years",
  },
  {
    title: "Zoho Certified Developer",
    desc: "Prove your skills in Deluge scripting, API integrations, and custom app development on Creator.",
    badge: "🥇",
    price: "$199",
    exams: 2,
    validity: "2 years",
  },
  {
    title: "Zoho Certified Consultant",
    desc: "Demonstrate expertise in designing end-to-end Zoho solutions for businesses across industries.",
    badge: "🏆",
    price: "$249",
    exams: 3,
    validity: "3 years",
  },
];

const FAQS = [
  { q: "Are the training courses free?", a: "Most foundational courses are free. Advanced courses and certification exams have individual pricing." },
  { q: "How do I take a certification exam?", a: "Exams are taken online via our proctored platform. You can schedule at any time and retake if needed (additional fee applies)." },
  { q: "Is the certificate globally recognised?", a: "Yes. Zoho certifications are recognized by thousands of businesses worldwide and display on your LinkedIn profile." },
  { q: "Can my whole team train together?", a: "Absolutely. We offer group pricing and private cohort training for teams of 5 or more." },
];

export default function TrainingAndCertification() {
  const [openFaq, setOpenFaq] = useState(null);
  const [filter, setFilter] = useState("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const filtered = filter === "All" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <div className="tc-root">
      {/* NAV */}
      <nav className="tc-nav">
        <div className="tc-nav__logo">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="12" height="12" rx="3" fill="#1D3557" />
            <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
          </svg>
          <span>Zoho</span>
          <span className="tc-nav__sep">|</span>
          <span className="tc-nav__section">Training & Certification</span>
        </div>
        <a href="#tc-certs" className="tc-btn">Get Certified</a>
      </nav>

      {/* HERO */}
      <section className="tc-hero">
        <div className="tc-hero__inner">
          <div className="tc-hero__eyebrow">Learning Hub</div>
          <h1>Learn Zoho. <em>Get certified.</em> Grow faster.</h1>
          <p>Free courses, expert-led webinars, and globally recognized certifications to help you and your team master Zoho.</p>
          <div className="tc-hero__ctas">
            <a href="#tc-courses" className="tc-btn tc-btn--primary">Browse Courses</a>
            <a href="#tc-certs" className="tc-btn tc-btn--outline">View Certifications</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="tc-stats">
        {[["50+", "Free Courses"], ["200K+", "Trained Professionals"], ["3", "Certification Tracks"], ["98%", "Pass-Rate Satisfaction"]].map(([n, l]) => (
          <div className="tc-stat" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>

      {/* COURSES */}
      <section className="tc-courses" id="tc-courses">
        <div className="tc-container">
          <div className="tc-section-header">
            <div className="tc-eyebrow">Training Library</div>
            <h2>Browse our courses</h2>
          </div>
          <div className="tc-filters">
            {levels.map((l) => (
              <button key={l} className={`tc-filter-btn ${filter === l ? "tc-filter-btn--active" : ""}`} onClick={() => setFilter(l)}>
                {l}
              </button>
            ))}
          </div>
          <div className="tc-courses__grid">
            {filtered.map((c) => (
              <div className="tc-course-card" key={c.title}>
                <span className="tc-course-card__icon">{c.icon}</span>
                <div className={`tc-course-card__level tc-level--${c.level.toLowerCase()}`}>{c.level}</div>
                <h3>{c.title}</h3>
                <div className="tc-course-card__meta">
                  <span>🕐 {c.duration}</span>
                  <span>📚 {c.modules} modules</span>
                </div>
                <a href="#tc-courses" className="tc-btn tc-btn--sm">Start Learning →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="tc-certs" id="tc-certs">
        <div className="tc-container">
          <div className="tc-section-header">
            <div className="tc-eyebrow">Certifications</div>
            <h2>Prove your expertise</h2>
            <p>Earn a Zoho certification and showcase your skills to employers and clients worldwide.</p>
          </div>
          <div className="tc-certs__grid">
            {CERTS.map((c) => (
              <div className="tc-cert-card" key={c.title}>
                <span className="tc-cert-card__badge">{c.badge}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="tc-cert-card__details">
                  <span>📝 {c.exams} exam{c.exams > 1 ? "s" : ""}</span>
                  <span>✅ Valid {c.validity}</span>
                  <span className="tc-cert-card__price">{c.price}</span>
                </div>
                <a href="#tc-certs" className="tc-btn tc-btn--primary tc-btn--full">Register Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tc-faq">
        <div className="tc-container">
          <div className="tc-section-header">
            <div className="tc-eyebrow">FAQ</div>
            <h2>Common questions</h2>
          </div>
          <div className="tc-faq__list">
            {FAQS.map((f, i) => (
              <div key={i} className={`tc-faq-item ${openFaq === i ? "tc-faq-item--open" : ""}`}>
                <button className="tc-faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="tc-faq-item__icon">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="tc-faq-item__a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="tc-footer">
        <p>© 2026 Zoho Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
