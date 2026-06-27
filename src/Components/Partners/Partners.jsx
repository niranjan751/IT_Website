import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "../../styles/Partners.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const HandshakeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="52" height="52" rx="14" fill="#EEF3FF"/>
    <path d="M14 28l5-5 4 4 8-9 7 7" stroke="#E63946" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 30c0 0 3 5 8 5s7-3 7-3l5 3c0 0 2 2 5 1" stroke="#1D3557" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="38" cy="18" r="3" fill="#E63946" opacity="0.7"/>
  </svg>
);

const GrowthIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="52" height="52" rx="14" fill="#EEF3FF"/>
    <path d="M14 36l8-10 6 5 10-14" stroke="#1D3557" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <polygon points="34,12 42,12 42,20" fill="#E63946" opacity="0.8"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L6 10v10c0 8.3 5.9 16 14 18 8.1-2 14-9.7 14-18V10L20 4z" fill="#1D3557" opacity="0.12"/>
    <path d="M20 4L6 10v10c0 8.3 5.9 16 14 18 8.1-2 14-9.7 14-18V10L20 4z" stroke="#1D3557" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 20l4 4 8-8" stroke="#E63946" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,4 24,15 36,15 26,22 29,34 20,27 11,34 14,22 4,15 16,15" fill="#1D3557" opacity="0.12" stroke="#1D3557" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="4" fill="#E63946" opacity="0.8"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6c0 0 10 4 10 16l-10 12L10 22C10 10 20 6 20 6z" fill="#1D3557" opacity="0.12" stroke="#1D3557" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="20" cy="18" r="3" fill="#E63946" opacity="0.9"/>
    <path d="M13 28l-4 6M27 28l4 6" stroke="#1D3557" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="22" width="7" height="12" rx="2" fill="#1D3557" opacity="0.2"/>
    <rect x="17" y="14" width="7" height="20" rx="2" fill="#1D3557" opacity="0.4"/>
    <rect x="28" y="8" width="7" height="26" rx="2" fill="#E63946" opacity="0.7"/>
    <line x1="4" y1="35" x2="38" y2="35" stroke="#1D3557" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#1D3557" opacity="0.1"/>
    <path d="M5 9l3 3 5-5" stroke="#1D3557" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const SUB_NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Find a Partner", href: "#find" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: 10000, suffix: "+", label: "Certified Partners" },
  { value: 150, suffix: "+", label: "Countries" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 2, prefix: "$", suffix: "B+", label: "Partner Revenue" },
];

const benefits = [
  { icon: <ShieldIcon />, title: "Trusted Certification", desc: "Rigorous accreditation ensures every partner meets the highest standards of expertise and professionalism across Zoho products." },
  { icon: <StarIcon />, title: "Premium Support", desc: "Dedicated partner success managers, priority support queues, and early access to new Zoho features and beta programs." },
  { icon: <RocketIcon />, title: "Fast-Track Growth", desc: "Co-sell opportunities, qualified lead sharing, and partner-exclusive marketing resources to accelerate your practice." },
  { icon: <ChartIcon />, title: "Revenue Opportunities", desc: "Competitive margins, referral bonuses, and a transparent deal-registration program with real-time pipeline visibility." },
];

const programs = [
  {
    tier: "Silver",
    price: "Free to join",
    desc: "Ideal for consultants starting their Zoho partner journey. Access foundational training, basic co-marketing assets, and deal registration.",
    perks: ["Official partner badge", "Zoho training library", "Deal registration portal", "Community forum access", "Quarterly webinars"],
    cta: "Apply for Silver",
  },
  {
    tier: "Gold",
    price: "5+ certified staff",
    desc: "For established practices with a proven Zoho track record. Unlock lead sharing, marketing development funds, and priority support.",
    perks: ["All Silver perks", "Qualified lead sharing", "MDF & co-marketing budget", "Priority support SLA", "Partner summit invites"],
    cta: "Upgrade to Gold",
  },
  {
    tier: "Platinum",
    price: "15+ certified staff",
    desc: "The pinnacle of the Zoho partner program. Co-sell with our global sales team and access exclusive executive resources.",
    perks: ["All Gold perks", "Co-sell program access", "Executive briefings", "Custom enablement plans", "Dedicated account director"],
    cta: "Reach Platinum",
  },
];

const partnerDirectory = [
  { id: 1, name: "TechBridge Consulting", region: "North America", country: "United States", specialty: "CRM & Sales Automation", tier: "Gold", rating: 4.9, projects: 120, initials: "TB", color: "#0052CC" },
  { id: 2, name: "CloudNine Solutions", region: "Europe", country: "United Kingdom", specialty: "Finance & ERP", tier: "Platinum", rating: 5.0, projects: 340, initials: "CN", color: "#7C3AED" },
  { id: 3, name: "DataPulse Partners", region: "Asia Pacific", country: "India", specialty: "Analytics & BI", tier: "Gold", rating: 4.8, projects: 95, initials: "DP", color: "#059669" },
  { id: 4, name: "Nordic Digital Group", region: "Europe", country: "Sweden", specialty: "Marketing Automation", tier: "Silver", rating: 4.7, projects: 42, initials: "ND", color: "#0EA5E9" },
  { id: 5, name: "Pacific Wave IT", region: "Asia Pacific", country: "Australia", specialty: "Zoho One Implementation", tier: "Platinum", rating: 4.9, projects: 210, initials: "PW", color: "#E63946" },
  { id: 6, name: "Summit Business Tech", region: "North America", country: "Canada", specialty: "HR & People Ops", tier: "Gold", rating: 4.8, projects: 78, initials: "SB", color: "#D97706" },
];

const howItWorksFind = [
  { step: "01", title: "Search the directory", desc: "Browse certified Zoho partners by region, specialty, and tier. Filter by industry expertise to find the right fit." },
  { step: "02", title: "Review credentials", desc: "Compare partner ratings, completed projects, and certifications. Read case studies from businesses like yours." },
  { step: "03", title: "Connect & collaborate", desc: "Reach out directly through our portal. Your matched partner will scope, implement, and optimize your Zoho stack." },
];

const howItWorksBecome = [
  { step: "01", title: "Submit your application", desc: "Tell us about your practice, team size, and Zoho experience. Most applications are reviewed within 5 business days." },
  { step: "02", title: "Complete certification", desc: "Access free Zoho product training and pass certification exams. Build the skills to deliver world-class implementations." },
  { step: "03", title: "Start earning", desc: "Register deals, access co-marketing funds, and begin receiving qualified leads from the Zoho partner ecosystem." },
  { step: "04", title: "Scale your tier", desc: "Grow from Silver to Platinum as your practice matures. Unlock higher margins, MDF, and co-sell opportunities." },
];

const resources = [
  { title: "Partner Portal", desc: "Your central hub for deal registration, training progress, marketing assets, and revenue reporting.", tag: "Portal", link: "Access Portal" },
  { title: "Certification Hub", desc: "Product-specific courses for CRM, Books, People, Desk, and Zoho One — with badges you can showcase.", tag: "Training", link: "Start Learning" },
  { title: "Marketing Toolkit", desc: "Co-branded decks, email templates, social graphics, and case study templates ready to customize.", tag: "Marketing", link: "Download Assets" },
  { title: "Technical Docs", desc: "API references, integration guides, migration playbooks, and solution architecture blueprints.", tag: "Docs", link: "Browse Docs" },
  { title: "Partner Community", desc: "Connect with 10,000+ partners worldwide. Share wins, ask questions, and join regional meetups.", tag: "Community", link: "Join Forum" },
  { title: "Events & Webinars", desc: "Monthly enablement sessions, annual Zoho Partner Summit, and regional roadshows throughout the year.", tag: "Events", link: "View Calendar" },
];

const testimonials = [
  {
    quote: "Joining the Zoho partner program tripled our consultancy revenue within a year. The support team is exceptional and the co-sell opportunities are unlike anything else in the market.",
    name: "Rohan Sharma",
    role: "CEO, TechBridge Consulting",
    tier: "Gold Partner",
    initials: "RS",
  },
  {
    quote: "The certification path gave our team deep product knowledge fast. We went from 3 to 28 Zoho implementations in 18 months — the lead-sharing program was a game changer.",
    name: "Elena Kowalski",
    role: "Managing Director, CloudNine Solutions",
    tier: "Platinum Partner",
    initials: "EK",
  },
  {
    quote: "Zoho's partner resources are genuinely best-in-class. From MDF to co-branded campaigns, everything we need to win enterprise deals is in one place.",
    name: "Arjun Mehta",
    role: "Founder, DataPulse Partners",
    tier: "Gold Partner",
    initials: "AM",
  },
];

const faqs = [
  { q: "Who can become a Zoho partner?", a: "Any business consultancy, system integrator, digital agency, or IT services firm can apply. You need at least one team member willing to complete Zoho product certifications. There is no fee to join at the Silver tier." },
  { q: "How long does the application process take?", a: "Most Silver applications are approved within 5 business days. Gold and Platinum tiers require a review of your certification count, customer references, and revenue history — typically 2–3 weeks." },
  { q: "What commissions and margins can partners earn?", a: "Partners earn competitive margins on new licenses, renewals, and upsells. Exact rates depend on your tier, product mix, and deal size. Platinum partners also access co-sell revenue sharing on joint opportunities." },
  { q: "How does deal registration work?", a: "Register opportunities in the Partner Portal before engaging the customer. Approved deals are protected for 90 days, giving you exclusivity and ensuring you receive full credit and margin on the closed sale." },
  { q: "Can I find a partner for a specific industry?", a: "Yes. Our partner directory lets you filter by industry vertical — including finance, healthcare, retail, manufacturing, and nonprofits — as well as by region, product specialty, and partner tier." },
  { q: "What support do partners receive?", a: "All partners get access to the Partner Portal, community forums, and monthly webinars. Gold partners receive priority support with a 24-hour SLA. Platinum partners are assigned a dedicated account director." },
];

const ecosystemLogos = [
  "Salesforce Migration Partners", "AWS Marketplace", "Google Workspace", "Microsoft Azure", "Stripe Connect", "Slack Certified", "QuickBooks", "HubSpot Integrators",
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [ref, visible] = useInView(0.2);
  return (
    <section className="partners-hero" ref={ref}>
      <div className="partners-hero__bg-grid" aria-hidden="true" />
      <div className={`partners-hero__content ${visible ? "partners-hero__content--in" : ""}`}>
        <span className="partners-hero__eyebrow">BUILDING SUCCESS TOGETHER</span>
        <h1 className="partners-hero__title">
          Your Business,<br />
          <span className="partners-hero__title--accent">Amplified</span>
        </h1>
        <p className="partners-hero__subtitle">
          Join the Zoho partner ecosystem — work alongside certified experts or become one.
          Whether you need implementation guidance or want to grow your consultancy, we have a program built for you.
        </p>
        <div className="partners-hero__actions">
          <a href="#become" className="btn btn--primary">
            Become a Partner <ArrowRight />
          </a>
          <a href="#find" className="btn btn--ghost">
            Find a Partner <ArrowRight />
          </a>
        </div>
        <div className="partners-hero__trust">
          <span>Trusted by partners in</span>
          <strong>150+ countries</strong>
        </div>
      </div>
      <div className="partners-hero__visual" aria-hidden="true">
        <div className="partners-hero__orbit">
          <div className="partners-hero__orb partners-hero__orb--1" />
          <div className="partners-hero__orb partners-hero__orb--2" />
          <div className="partners-hero__orb partners-hero__orb--3" />
          <div className="partners-hero__center-badge">
            <HandshakeIcon />
            <span>Zoho Partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── CTA Cards ────────────────────────────────────────────────────────────────
const CTACards = () => (
  <section className="partners-cta-cards" id="find">
    <div className="container">
      <div className="partners-cta-cards__grid">
        <Reveal className="cta-card cta-card--find">
          <div className="cta-card__icon"><HandshakeIcon /></div>
          <div className="cta-card__body">
            <h2 className="cta-card__title">Work With a Partner</h2>
            <p className="cta-card__desc">
              Find and work with a Zoho-certified expert to get professional help at every stage —
              from choosing the right apps to fully optimizing your business workflows.
            </p>
            <ul className="cta-card__list">
              {["Accredited & vetted Zoho experts", "Industry-specific implementation guidance", "End-to-end deployment & training support"].map(item => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
            <a href="#partner-directory" className="cta-card__link">
              FIND A PARTNER <ArrowRight />
            </a>
          </div>
        </Reveal>
        <Reveal className="cta-card cta-card--become" delay={120}>
          <div className="cta-card__icon"><GrowthIcon /></div>
          <div className="cta-card__body">
            <h2 className="cta-card__title">Become a Partner</h2>
            <p className="cta-card__desc">
              Scale your consultancy by helping businesses worldwide unlock their full potential with Zoho.
              Access exclusive tools, certifications, and co-marketing resources.
            </p>
            <ul className="cta-card__list">
              {["Competitive revenue margins", "Full partner portal access", "Marketing development funds"].map(item => (
                <li key={item}><CheckIcon />{item}</li>
              ))}
            </ul>
            <a href="#become" className="cta-card__link" id="become">
              BECOME A PARTNER <ArrowRight />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// ─── Stats Bar ────────────────────────────────────────────────────────────────
const StatItem = ({ value, prefix = "", suffix = "", label, active }) => {
  const count = useCountUp(value, 1800, active);
  const display = prefix
    ? `${prefix}${count >= 1000 ? `${(count / 1000).toFixed(0)}` : count}${suffix}`
  : `${count.toLocaleString()}${suffix}`;

  return (
    <div className="partners-stats__item">
      <span className="partners-stats__value">{display}</span>
      <span className="partners-stats__label">{label}</span>
    </div>
  );
};

const StatsBar = () => {
  const [ref, visible] = useInView(0.3);
  return (
    <section className="partners-stats" ref={ref}>
      <div className="container partners-stats__grid">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={visible} />
        ))}
      </div>
    </section>
  );
};

// ─── Ecosystem Strip ──────────────────────────────────────────────────────────
const EcosystemStrip = () => (
  <section className="partners-ecosystem" aria-label="Partner ecosystem">
    <div className="container">
      <p className="partners-ecosystem__label">Integrates with your existing stack</p>
      <div className="partners-ecosystem__track">
        <div className="partners-ecosystem__scroll">
          {[...ecosystemLogos, ...ecosystemLogos].map((name, i) => (
            <span key={`${name}-${i}`} className="partners-ecosystem__badge">{name}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Benefits ─────────────────────────────────────────────────────────────────
const Benefits = () => (
  <section className="partners-benefits">
    <div className="container">
      <Reveal>
        <span className="section-eyebrow">WHY JOIN</span>
        <h2 className="section-title">Built for Partner Success</h2>
        <p className="section-sub">Everything you need to build a thriving practice around the Zoho platform.</p>
      </Reveal>
      <div className="partners-benefits__grid">
        {benefits.map(({ icon, title, desc }, i) => (
          <Reveal key={title} className="benefit-card" delay={i * 80}>
            <div className="benefit-card__icon">{icon}</div>
            <h3 className="benefit-card__title">{title}</h3>
            <p className="benefit-card__desc">{desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── Programs ─────────────────────────────────────────────────────────────────
const Programs = () => {
  const [activeTier, setActiveTier] = useState("Gold");

  return (
    <section className="partners-programs" id="programs">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">PARTNERSHIP TIERS</span>
          <h2 className="section-title">Choose Your Level</h2>
          <p className="section-sub">Start free at Silver and grow into Platinum as your Zoho practice scales.</p>
        </Reveal>

        <div className="program-tabs" role="tablist">
          {programs.map(({ tier }) => (
            <button
              key={tier}
              role="tab"
              aria-selected={activeTier === tier}
              className={`program-tab ${activeTier === tier ? "program-tab--active" : ""} program-tab--${tier.toLowerCase()}`}
              onClick={() => setActiveTier(tier)}
            >
              {tier}
            </button>
          ))}
        </div>

        <div className="partners-programs__grid">
          {programs.map(({ tier, price, desc, perks, cta }, i) => (
            <div
              key={tier}
              className={`program-card program-card--${tier.toLowerCase()} ${activeTier === tier ? "program-card--active" : ""} ${i === 2 ? "program-card--featured" : ""}`}
              onMouseEnter={() => setActiveTier(tier)}
            >
              {i === 2 && <span className="program-card__badge">Most Popular</span>}
              <span className="program-card__tier">{tier}</span>
              <span className="program-card__price">{price}</span>
              <p className="program-card__desc">{desc}</p>
              <ul className="program-card__perks">
                {perks.map(p => <li key={p}><CheckIcon />{p}</li>)}
              </ul>
              <a href="#become" className={`btn ${activeTier === tier ? "btn--primary" : "btn--outline"}`}>
                {cta} <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── How It Works ─────────────────────────────────────────────────────────────
const HowItWorks = () => {
  const [mode, setMode] = useState("find");
  const steps = mode === "find" ? howItWorksFind : howItWorksBecome;

  return (
    <section className="partners-how" id="how-it-works">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">GET STARTED</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">A clear path whether you're hiring a partner or joining the program yourself.</p>
        </Reveal>

        <div className="how-toggle">
          <button
            className={`how-toggle__btn ${mode === "find" ? "how-toggle__btn--active" : ""}`}
            onClick={() => setMode("find")}
          >
            Find a Partner
          </button>
          <button
            className={`how-toggle__btn ${mode === "become" ? "how-toggle__btn--active" : ""}`}
            onClick={() => setMode("become")}
          >
            Become a Partner
          </button>
        </div>

        <div className={`how-steps how-steps--${steps.length}`} key={mode}>
          {steps.map((s, i) => (
            <Reveal key={s.step} className="how-step" delay={i * 100}>
              <div className="how-step__num">{s.step}</div>
              <h3 className="how-step__title">{s.title}</h3>
              <p className="how-step__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Partner Directory ────────────────────────────────────────────────────────
const PartnerDirectory = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [tier, setTier] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return partnerDirectory.filter(p => {
      const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.specialty.toLowerCase().includes(query.toLowerCase());
      const matchRegion = region === "All" || p.region === region;
      const matchTier = tier === "All" || p.tier === tier;
      return matchQuery && matchRegion && matchTier;
    });
  }, [query, region, tier]);

  return (
    <section className="partners-directory" id="partner-directory">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">PARTNER DIRECTORY</span>
          <h2 className="section-title">Find Your Perfect Match</h2>
          <p className="section-sub">Search certified Zoho partners by region, specialty, and tier level.</p>
        </Reveal>

        <div className="directory-filters">
          <div className="directory-search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search by name or specialty..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search partners"
            />
          </div>
          <select value={region} onChange={e => setRegion(e.target.value)} aria-label="Filter by region">
            <option value="All">All Regions</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Asia Pacific">Asia Pacific</option>
          </select>
          <select value={tier} onChange={e => setTier(e.target.value)} aria-label="Filter by tier">
            <option value="All">All Tiers</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>

        <div className="directory-results">
          <p className="directory-results__count">{filtered.length} partner{filtered.length !== 1 ? "s" : ""} found</p>
          <div className="directory-grid">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <article
                  className={`directory-card ${selected === p.id ? "directory-card--selected" : ""}`}
                  onClick={() => setSelected(selected === p.id ? null : p.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setSelected(selected === p.id ? null : p.id)}
                >
                  <div className="directory-card__header">
                    <div className="directory-card__logo" style={{ background: p.color }}>{p.initials}</div>
                    <div>
                      <h3 className="directory-card__name">{p.name}</h3>
                      <span className="directory-card__location">{p.country} · {p.region}</span>
                    </div>
                    <span className={`directory-card__tier directory-card__tier--${p.tier.toLowerCase()}`}>{p.tier}</span>
                  </div>
                  <p className="directory-card__specialty">{p.specialty}</p>
                  <div className="directory-card__meta">
                    <span className="directory-card__rating">★ {p.rating}</span>
                    <span>{p.projects} projects completed</span>
                  </div>
                  {selected === p.id && (
                    <div className="directory-card__actions">
                      <a href="#contact" className="btn btn--primary btn--sm">Request Introduction</a>
                      <a href="#contact" className="btn btn--outline btn--sm">View Profile</a>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="directory-empty">
              <p>No partners match your filters. Try broadening your search.</p>
              <button className="btn btn--outline" onClick={() => { setQuery(""); setRegion("All"); setTier("All"); }}>Clear Filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ─── Resources ────────────────────────────────────────────────────────────────
const Resources = () => (
  <section className="partners-resources" id="resources">
    <div className="container">
      <Reveal>
        <span className="section-eyebrow">PARTNER RESOURCES</span>
        <h2 className="section-title">Tools to Help You Win</h2>
        <p className="section-sub">Everything in one place — from certifications to co-marketing assets.</p>
      </Reveal>
      <div className="resources-grid">
        {resources.map((r, i) => (
          <Reveal key={r.title} className="resource-card" delay={i * 70}>
            <span className="resource-card__tag">{r.tag}</span>
            <h3 className="resource-card__title">{r.title}</h3>
            <p className="resource-card__desc">{r.desc}</p>
            <a href="#contact" className="resource-card__link">{r.link} <ArrowRight /></a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── Testimonials ─────────────────────────────────────────────────────────────
const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="partners-testimonial">
      <div className="container">
        <blockquote className="testimonial__quote" key={current}>
          "{t.quote}"
        </blockquote>
        <div className="testimonial__author" key={`author-${current}`}>
          <div className="testimonial__avatar">{t.initials}</div>
          <div>
            <strong>{t.name}</strong>
            <span>{t.role} · {t.tier}</span>
          </div>
        </div>
        <div className="testimonial__nav">
          <button onClick={prev} aria-label="Previous testimonial" className="testimonial__btn">←</button>
          <div className="testimonial__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial__dot ${i === current ? "testimonial__dot--active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className="testimonial__btn">→</button>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="partners-faq" id="faq">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-sub">Everything you need to know about the Zoho partner program.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <div className={`faq-item ${open === i ? "faq-item--open" : ""}`}>
                <button className="faq-item__question" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>
                  <ChevronDown />
                </button>
                <div className="faq-item__answer">
                  <p>{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Contact CTA ──────────────────────────────────────────────────────────────
const FinalCTA = () => (
  <section className="partners-final-cta" id="contact">
    <div className="container partners-final-cta__inner">
      <h2>Ready to grow together?</h2>
      <p>Join thousands of Zoho partners worldwide building successful businesses on our platform.</p>
      <div className="partners-final-cta__actions">
        <a href="#become" className="btn btn--primary">Join the Program <ArrowRight /></a>
        <a href="mailto:partners@zoho.com" className="btn btn--ghost-light">partners@zoho.com <ArrowRight /></a>
      </div>
      <p className="partners-final-cta__note">Questions? Our partner team responds within one business day.</p>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="partners-footer">
    <div className="container partners-footer__grid">
      <div className="partners-footer__brand">
        <div className="partners-nav__logo">
          <div className="partners-nav__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="12" height="12" rx="3" fill="#1D3557"/>
              <rect x="16" width="12" height="12" rx="3" fill="#E63946"/>
              <rect y="16" width="12" height="12" rx="3" fill="#E63946"/>
              <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557"/>
            </svg>
          </div>
          <span>Zoho</span>
        </div>
        <p>Empowering partners to deliver exceptional business solutions worldwide.</p>
      </div>
      <div className="partners-footer__col">
        <h4>Partners</h4>
        <ul>
          <li><a href="#programs">Partnership Programs</a></li>
          <li><a href="#partner-directory">Find a Partner</a></li>
          <li><a href="#become">Become a Partner</a></li>
          <li><a href="#resources">Partner Resources</a></li>
        </ul>
      </div>
      <div className="partners-footer__col">
        <h4>Support</h4>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Partner Team</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="mailto:partners@zoho.com">partners@zoho.com</a></li>
        </ul>
      </div>
      <div className="partners-footer__col">
        <h4>Company</h4>
        <ul>
          <li><a href="/">Zoho Home</a></li>
          <li><a href="#contact">Talk to Sales</a></li>
          <li><a href="#resources">Events & Webinars</a></li>
          <li><a href="#faq">Partner Portal Login</a></li>
        </ul>
      </div>
    </div>
    <div className="partners-footer__bottom">
      <div className="container">
        <span>© 2026 Zoho Corporation. All rights reserved.</span>
        <div className="partners-footer__legal">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Partner Agreement</a>
        </div>
      </div>
    </div>
  </footer>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = SUB_NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="partners-nav">
      <div className="partners-nav__top">
        <a href="/" className="partners-nav__logo">
          <div className="partners-nav__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="12" height="12" rx="3" fill="#1D3557"/>
              <rect x="16" width="12" height="12" rx="3" fill="#E63946"/>
              <rect y="16" width="12" height="12" rx="3" fill="#E63946"/>
              <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557"/>
            </svg>
          </div>
          <span>Zoho</span>
        </a>

        <ul className="partners-nav__links">
          <li><a href="/">Products</a></li>
          <li><a href="/">Customers</a></li>
          <li
            className="has-dropdown"
            onMouseEnter={() => setPartnersOpen(true)}
            onMouseLeave={() => setPartnersOpen(false)}
          >
            <a href="#programs" className="active">
              Partners <ChevronDown />
            </a>
            {partnersOpen && (
              <div className="nav-dropdown">
                <a href="#find" className="nav-dropdown__item" onClick={() => setPartnersOpen(false)}>
                  <HandshakeIcon />
                  <div>
                    <strong>Work With a Partner</strong>
                    <span>Find certified Zoho experts for your journey.</span>
                  </div>
                </a>
                <a href="#become" className="nav-dropdown__item" onClick={() => setPartnersOpen(false)}>
                  <GrowthIcon />
                  <div>
                    <strong>Become a Partner</strong>
                    <span>Scale your business with our program.</span>
                  </div>
                </a>
              </div>
            )}
          </li>
        </ul>

        <div className="partners-nav__actions">
          <a href="#contact" className="nav-signin">Sign In</a>
          <a href="#become" className="btn btn--primary btn--sm">Get Started</a>
          <button className="partners-nav__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="partners-nav__mobile">
          <a href="/" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="/" onClick={() => setMobileOpen(false)}>Customers</a>
          <a href="#find" onClick={() => setMobileOpen(false)}>Find a Partner</a>
          <a href="#become" onClick={() => setMobileOpen(false)}>Become a Partner</a>
          <a href="#programs" onClick={() => setMobileOpen(false)}>Programs</a>
          <a href="#faq" onClick={() => setMobileOpen(false)}>FAQ</a>
          <a href="#contact" className="btn btn--primary" onClick={() => setMobileOpen(false)}>Get Started</a>
        </div>
      )}

      <div className="partners-nav__sub">
        <div className="partners-nav__sub-logo">
          <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
            <rect width="12" height="12" rx="3" fill="white"/>
            <rect x="16" width="12" height="12" rx="3" fill="#E63946"/>
            <rect y="16" width="12" height="12" rx="3" fill="#E63946"/>
            <rect x="16" y="16" width="12" height="12" rx="3" fill="white"/>
          </svg>
          <span>Partners</span>
        </div>
        <ul className="partners-nav__sub-links">
          {SUB_NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? "partners-nav__sub-active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
          <li><a href="#become" className="partners-nav__join">Join the Program</a></li>
        </ul>
      </div>
    </nav>
  );
};

// ─── Page Root ────────────────────────────────────────────────────────────────
export default function Partners() {
  return (
    <div className="partners-page">
      <Navbar />
      <Hero />
      <CTACards />
      <StatsBar />
      <EcosystemStrip />
      <Benefits />
      <Programs />
      <HowItWorks />
      <PartnerDirectory />
      <Resources />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
