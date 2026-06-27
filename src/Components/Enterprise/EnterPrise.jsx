import "../../styles/Enterprise.css";

const PILLARS = [
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    desc: "SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliant. End-to-end encryption, SSO, and granular access controls built in.",
  },
  {
    icon: "⚡",
    title: "Unlimited Scale",
    desc: "Built to handle millions of records and thousands of concurrent users with 99.9% uptime SLAs and global data centers.",
  },
  {
    icon: "🔗",
    title: "Deep Integrations",
    desc: "Connect with Salesforce, Microsoft 365, SAP, Slack, Jira, and 1000+ tools via Zoho Flow's no-code integration builder.",
  },
  {
    icon: "🧩",
    title: "Customizable Platform",
    desc: "White-label, extend, and customize every app with Creator, Deluge scripting, and open APIs — no vendor lock-in.",
  },
  {
    icon: "🤝",
    title: "Dedicated Success Team",
    desc: "A named Customer Success Manager, priority support with <2 hour SLAs, and onboarding engineers included.",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Zoho Analytics with AI-powered insights, custom dashboards, and real-time BI across all your business data.",
  },
];

const LOGOS = ["HYUNDAI", "MARRIOTT", "BOSCH", "FedEx", "HDFC LIFE", "L'ORÉAL"];

const PLANS = [
  {
    name: "Professional",
    users: "Up to 50 users",
    price: "$30",
    per: "user/mo",
    features: ["All 55+ apps", "SSO & MFA", "API access", "Standard support", "5 TB storage"],
    cta: "Start Trial",
    highlight: false,
  },
  {
    name: "Enterprise",
    users: "Unlimited users",
    price: "Custom",
    per: "talk to sales",
    features: [
      "All 55+ apps",
      "SSO, MFA & DLP",
      "Custom SLAs",
      "Dedicated CSM",
      "Unlimited storage",
      "Custom data residency",
      "White-labeling",
    ],
    cta: "Contact Sales",
    highlight: true,
  },
];

export default function Enterprise() {
  return (
    <div className="ent-root">
      {/* NAV */}
      <nav className="ent-nav">
        <div className="ent-nav__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="12" height="12" rx="3" fill="#1D3557" />
            <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
          </svg>
          <span>Zoho</span>
          <span className="ent-nav__sep">|</span>
          <span className="ent-nav__section">Enterprise</span>
        </div>
        <div className="ent-nav__actions">
          <a href="#ent-contact" className="ent-nav__link">Contact Sales</a>
          <a href="#ent-contact" className="ent-btn">Request Demo</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="ent-hero" id="ent-hero">
        <div className="ent-hero__inner">
          <div className="ent-hero__eyebrow">Enterprise Suite</div>
          <h1 className="ent-hero__title">
            Built for <em>enterprise</em><br />at every scale.
          </h1>
          <p className="ent-hero__sub">
            Zoho Enterprise gives large organizations a unified, secure, and infinitely scalable
            platform — with dedicated support, custom SLAs, and complete data sovereignty.
          </p>
          <div className="ent-hero__ctas">
            <a href="#ent-contact" className="ent-btn ent-btn--primary">Request a Demo</a>
            <a href="#ent-plans" className="ent-btn ent-btn--outline">View Plans</a>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="ent-logos">
        <span className="ent-logos__label">Trusted by global enterprises</span>
        <div className="ent-logos__strip">
          {LOGOS.map((l) => (
            <div className="ent-logo-chip" key={l}>{l}</div>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section className="ent-pillars">
        <div className="container">
          <div className="ent-section-header">
            <div className="ent-eyebrow">Core Capabilities</div>
            <h2>Everything an enterprise needs</h2>
            <p>From security to customization, Zoho Enterprise is designed to meet the highest standards.</p>
          </div>
          <div className="ent-pillars__grid">
            {PILLARS.map(({ icon, title, desc }) => (
              <div className="ent-pillar-card" key={title}>
                <span className="ent-pillar-card__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="ent-plans" id="ent-plans">
        <div className="container">
          <div className="ent-section-header">
            <div className="ent-eyebrow">Pricing</div>
            <h2>Simple, transparent pricing</h2>
          </div>
          <div className="ent-plans__grid">
            {PLANS.map(({ name, users, price, per, features, cta, highlight }) => (
              <div className={`ent-plan-card ${highlight ? "ent-plan-card--highlight" : ""}`} key={name}>
                {highlight && <span className="ent-plan-card__badge">Most Popular</span>}
                <h3>{name}</h3>
                <p className="ent-plan-card__users">{users}</p>
                <div className="ent-plan-card__price">
                  <span className="ent-plan-card__amount">{price}</span>
                  <span className="ent-plan-card__per">{per}</span>
                </div>
                <ul className="ent-plan-card__features">
                  {features.map((f) => (
                    <li key={f}><span>✓</span> {f}</li>
                  ))}
                </ul>
                <a href="#ent-contact" className={`ent-btn ${highlight ? "ent-btn--primary" : "ent-btn--outline"} ent-btn--full`}>
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="ent-contact" id="ent-contact">
        <div className="ent-contact__inner">
          <h2>Ready to talk enterprise?</h2>
          <p>Our enterprise team will design a custom plan that fits your organization perfectly.</p>
          <form className="ent-contact__form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full name" className="ent-input" />
            <input type="email" placeholder="Work email" className="ent-input" />
            <input type="text" placeholder="Company name" className="ent-input" />
            <select className="ent-input">
              <option value="">Company size</option>
              <option>100–500 employees</option>
              <option>500–2,000 employees</option>
              <option>2,000–10,000 employees</option>
              <option>10,000+ employees</option>
            </select>
            <textarea className="ent-input ent-textarea" placeholder="Tell us about your needs…" rows="4"></textarea>
            <button type="submit" className="ent-btn ent-btn--primary ent-btn--full">Get in Touch</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ent-footer">
        <p>© 2026 Zoho Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
