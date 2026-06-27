import { useState } from "react";
import "../../styles/ResourcesShared.css";
import "../../styles/newsLetter.css";
import { ResourcesNav, ResourcesFooter, Reveal, ArrowRight } from "./shared";

const TOPICS = [
  { icon: "🤖", label: "AI & Automation" },
  { icon: "📈", label: "Sales & CRM" },
  { icon: "💰", label: "Finance & Accounting" },
  { icon: "🛠️", label: "Product Updates" },
  { icon: "📊", label: "Analytics & Insights" },
  { icon: "🌐", label: "Business Growth" },
];

const PAST_ISSUES = [
  {
    issue: "#42",
    date: "June 18, 2026",
    title: "How AI is Changing the Way Teams Sell",
    excerpt: "From predictive scoring to auto-generated follow-ups, AI tools in Zoho CRM are helping sales teams close 30% faster.",
    category: "AI & Automation",
    readTime: "5 min read",
  },
  {
    issue: "#41",
    date: "June 11, 2026",
    title: "Finance Automation: Stop Doing it Manually",
    excerpt: "Zoho Books' new reconciliation engine can match thousands of transactions in seconds — here's how to set it up.",
    category: "Finance",
    readTime: "4 min read",
  },
  {
    issue: "#40",
    date: "June 4, 2026",
    title: "Zoho One 2026: Everything New This Quarter",
    excerpt: "A roundup of every major feature launch across the Zoho ecosystem from Q2 2026, including Zia 3.0 and the new analytics dashboard.",
    category: "Product Updates",
    readTime: "7 min read",
  },
  {
    issue: "#39",
    date: "May 28, 2026",
    title: "Building Customer Loyalty at Scale",
    excerpt: "Discover how leading brands are using Zoho Desk and CRM together to deliver personal experiences to millions of customers.",
    category: "Business Growth",
    readTime: "6 min read",
  },
];

const STATS = [
  { number: "1.5M+", label: "Subscribers worldwide" },
  { number: "Weekly", label: "Delivery every Tuesday" },
  { number: "4.8 ★", label: "Average reader rating" },
  { number: "Free", label: "Always free, no ads" },
];

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const toggleTopic = (label) => {
    setSelectedTopics((prev) =>
      prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <div className="resources-page nl-page" id="newsletter">
      <ResourcesNav activePage="newsletter" />

      {/* ── HERO ── */}
      <section className="nl-hero">
        <div className="container nl-hero__inner">
          <Reveal>
            <span className="resources-section-eyebrow">ZOHO NEWSLETTER</span>
            <h1 className="nl-hero__title">
              Stay sharp.<br />Stay ahead.
            </h1>
            <p className="nl-hero__sub">
              Every week, get the best insights on business software, AI automation,
              and growth strategies — delivered straight to your inbox.
            </p>
          </Reveal>

          <Reveal delay={80}>
            {!subscribed ? (
              <form className="nl-form" onSubmit={handleSubscribe} id="nl-subscribe-form">
                <div className="nl-form__row">
                  <input
                    id="nl-email-input"
                    type="email"
                    className={`nl-form__input ${error ? "nl-form__input--error" : ""}`}
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  />
                  <button id="nl-subscribe-btn" type="submit" className="nl-form__btn">
                    Subscribe Free <ArrowRight />
                  </button>
                </div>
                {error && <span className="nl-form__error">{error}</span>}
                <p className="nl-form__note">No spam. Unsubscribe anytime. Free forever.</p>
              </form>
            ) : (
              <div className="nl-success" id="nl-success-message">
                <span className="nl-success__icon">🎉</span>
                <h3>You're subscribed!</h3>
                <p>Welcome aboard. Your first issue arrives next Tuesday.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="nl-stats-bar">
        {STATS.map(({ number, label }) => (
          <div className="nl-stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* ── TOPICS ── */}
      <section className="nl-topics">
        <div className="container">
          <Reveal>
            <h2 className="resources-section-title">Choose your interests</h2>
            <p className="resources-section-sub">
              Tell us what you care about and we'll make sure your digest is tailored to you.
            </p>
          </Reveal>
          <div className="nl-topics__grid">
            {TOPICS.map(({ icon, label }) => (
              <Reveal key={label} delay={30}>
                <button
                  id={`nl-topic-${label.replace(/\s+/g, "-").toLowerCase()}`}
                  className={`nl-topic-card ${selectedTopics.includes(label) ? "nl-topic-card--active" : ""}`}
                  onClick={() => toggleTopic(label)}
                  type="button"
                >
                  <span className="nl-topic-card__icon">{icon}</span>
                  <span className="nl-topic-card__label">{label}</span>
                  {selectedTopics.includes(label) && (
                    <span className="nl-topic-card__check">✓</span>
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST ISSUES ── */}
      <section className="nl-archives">
        <div className="container">
          <Reveal>
            <h2 className="resources-section-title">Past issues</h2>
            <p className="resources-section-sub">Browse what you've been missing.</p>
          </Reveal>
          <div className="nl-archives__grid">
            {PAST_ISSUES.map((issue, i) => (
              <Reveal key={issue.issue} className="nl-archive-card" delay={i * 60}>
                <div className="nl-archive-card__header">
                  <span className="nl-archive-card__issue">{issue.issue}</span>
                  <span className="nl-archive-card__cat">{issue.category}</span>
                </div>
                <h3 className="nl-archive-card__title">{issue.title}</h3>
                <p className="nl-archive-card__excerpt">{issue.excerpt}</p>
                <div className="nl-archive-card__footer">
                  <span className="nl-archive-card__date">{issue.date}</span>
                  <span className="nl-archive-card__read">{issue.readTime}</span>
                </div>
                <a href="#newsletter" className="nl-archive-card__link">
                  Read issue <ArrowRight />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="nl-cta">
        <div className="container nl-cta__inner">
          <Reveal>
            <h2>Ready to level up your inbox?</h2>
            <p>Join 1.5 million business leaders who read the Zoho newsletter every week.</p>
            {!subscribed && (
              <a href="#nl-subscribe-form" className="resources-btn resources-btn--primary">
                Subscribe Now <ArrowRight />
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <ResourcesFooter />
    </div>
  );
}
