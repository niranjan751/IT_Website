import { useState, useMemo } from "react";
import "../../styles/ResourcesShared.css";
import "../../styles/AnnouncementsHub.css";
import {
  ResourcesNav,
  ResourcesFooter,
  Reveal,
  ArrowRight,
  SearchIcon,
  ChevronDown,
} from "./shared";

const CATEGORIES = ["All", "Product Updates", "Events", "Security", "Company News"];

const FEATURED = {
  id: 0,
  category: "Product Updates",
  title: "Zoho One 2026: Unified AI Assistant Across Every App",
  date: "June 18, 2026",
  summary: "Introducing Zia 3.0 — a context-aware AI layer that works seamlessly across CRM, Books, Desk, and 40+ apps in the Zoho One suite. Rollout begins July 1 for all paid plans.",
  tag: "Major Release",
  readTime: "4 min read",
};

const ANNOUNCEMENTS = [
  {
    id: 1,
    category: "Product Updates",
    title: "Zoho CRM Mobile 6.0 — Offline Mode & Smart Notifications",
    date: "June 12, 2026",
    summary: "Sales teams can now log calls, update deals, and access key records without an internet connection. Smart notifications surface the highest-priority leads based on deal stage and engagement score.",
    tag: "CRM",
    readTime: "3 min read",
  },
  {
    id: 2,
    category: "Security",
    title: "SOC 2 Type II Certification Renewed for All US Data Centers",
    date: "June 8, 2026",
    summary: "Zoho has successfully completed its annual SOC 2 Type II audit across all US data centers. Full compliance report available to enterprise customers upon request.",
    tag: "Compliance",
    readTime: "2 min read",
  },
  {
    id: 3,
    category: "Events",
    title: "Zoho Day 2026 — Register for the Global Virtual Summit",
    date: "June 5, 2026",
    summary: "Join 50,000+ business leaders on September 15–17 for product keynotes, customer stories, and hands-on workshops. Early-bird registration is open until August 1.",
    tag: "Event",
    readTime: "2 min read",
  },
  {
    id: 4,
    category: "Product Updates",
    title: "Zoho Books: Multi-Currency Reconciliation Gets a Redesign",
    date: "May 28, 2026",
    summary: "The new reconciliation dashboard auto-matches transactions across 180+ currencies with AI-powered suggestions, cutting month-end close time by up to 40%.",
    tag: "Finance",
    readTime: "3 min read",
  },
  {
    id: 5,
    category: "Company News",
    title: "Zoho Opens New R&D Center in São Paulo, Brazil",
    date: "May 22, 2026",
    summary: "The 120-person facility will focus on localization for Latin American markets, Portuguese-language AI models, and regional payment integrations.",
    tag: "Expansion",
    readTime: "2 min read",
  },
  {
    id: 6,
    category: "Security",
    title: "Mandatory MFA Enforcement for Admin Accounts — Action Required",
    date: "May 15, 2026",
    summary: "Starting August 1, 2026, all organization admin accounts must have multi-factor authentication enabled. Admins can configure MFA in the Control Panel today.",
    tag: "Security Alert",
    readTime: "2 min read",
  },
  {
    id: 7,
    category: "Product Updates",
    title: "Zoho Desk: AI-Powered Sentiment Analysis Now in All Plans",
    date: "May 10, 2026",
    summary: "Support agents see real-time sentiment scores on every ticket, with auto-escalation rules for frustrated customers. Available on all paid Desk plans at no extra cost.",
    tag: "Support",
    readTime: "3 min read",
  },
  {
    id: 8,
    category: "Events",
    title: "Partner Enablement Webinar Series — Q3 Schedule Published",
    date: "May 3, 2026",
    summary: "Twelve live sessions covering Zoho One migrations, vertical solutions for healthcare and retail, and advanced CRM automation. Open to all certified partners.",
    tag: "Partners",
    readTime: "2 min read",
  },
];

const TIMELINE = [
  { month: "June 2026", count: 4, highlight: "Zia 3.0 AI launch" },
  { month: "May 2026", count: 5, highlight: "Books multi-currency update" },
  { month: "April 2026", count: 3, highlight: "Zoho Day 2026 announced" },
  { month: "March 2026", count: 6, highlight: "CRM pipeline AI features" },
];

function AnnouncementCard({ item, expanded, onToggle, featured = false }) {
  return (
    <article className={`announce-card ${featured ? "announce-card--featured" : ""} ${expanded ? "announce-card--open" : ""}`}>
      <div className="announce-card__meta">
        <span className={`announce-card__tag announce-card__tag--${item.category.toLowerCase().replace(/\s/g, "-")}`}>{item.tag}</span>
        <span className="announce-card__category">{item.category}</span>
        <span className="announce-card__date">{item.date}</span>
        <span className="announce-card__time">{item.readTime}</span>
      </div>
      <h3 className="announce-card__title">{item.title}</h3>
      <p className="announce-card__summary">{item.summary}</p>
      {expanded && (
        <div className="announce-card__body">
          <p>
            This update is part of our ongoing commitment to deliver reliable, secure, and innovative business software.
            For detailed release notes, migration guides, and API changelogs, visit the Zoho Help Center or contact your account manager.
          </p>
          <div className="announce-card__actions">
            <a href="#contact" className="resources-btn resources-btn--primary resources-btn--sm">Read Full Release Notes <ArrowRight /></a>
            <a href="#contact" className="resources-btn resources-btn--outline resources-btn--sm">Share Update</a>
          </div>
        </div>
      )}
      <button className="announce-card__toggle" onClick={onToggle} aria-expanded={expanded}>
        {expanded ? "Show Less" : "Read More"} <ChevronDown />
      </button>
    </article>
  );
}

export default function AnnouncementsHub() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    return ANNOUNCEMENTS.filter(a => {
      const matchCat = category === "All" || a.category === category;
      const q = query.toLowerCase();
      const matchQuery = !q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [category, query]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <div className="resources-page announcements-page" id="announcements">
      <ResourcesNav activePage="announcements" />

      <section className="announce-hero">
        <div className="container announce-hero__inner">
          <Reveal>
            <span className="resources-section-eyebrow">WHAT&apos;S NEW</span>
            <h1 className="announce-hero__title">Announcements Hub</h1>
            <p className="announce-hero__sub">
              Product releases, security advisories, company news, and events — everything happening at Zoho, in one place.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="announce-hero__search">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search announcements..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                aria-label="Search announcements"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="announce-filters">
        <div className="container">
          <div className="announce-filters__tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`announce-filters__tab ${category === cat ? "announce-filters__tab--active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
                {cat !== "All" && (
                  <span className="announce-filters__count">
                    {ANNOUNCEMENTS.filter(a => a.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="announce-featured">
        <div className="container">
          <Reveal>
            <span className="announce-featured__label">Featured Announcement</span>
            <AnnouncementCard
              item={FEATURED}
              featured
              expanded={expandedId === FEATURED.id}
              onToggle={() => setExpandedId(expandedId === FEATURED.id ? null : FEATURED.id)}
            />
          </Reveal>
        </div>
      </section>

      <section className="announce-list">
        <div className="container announce-list__layout">
          <div className="announce-list__main">
            <div className="announce-list__header">
              <h2 className="resources-section-title">{filtered.length} Announcement{filtered.length !== 1 ? "s" : ""}</h2>
              {query && <button className="announce-list__clear" onClick={() => setQuery("")}>Clear search</button>}
            </div>
            {filtered.length > 0 ? (
              <div className="announce-list__grid">
                {filtered.map((item, i) => (
                  <Reveal key={item.id} delay={i * 60}>
                    <AnnouncementCard
                      item={item}
                      expanded={expandedId === item.id}
                      onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    />
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="announce-empty">
                <p>No announcements match your filters.</p>
                <button className="resources-btn resources-btn--outline" onClick={() => { setQuery(""); setCategory("All"); }}>Reset Filters</button>
              </div>
            )}
          </div>

          <aside className="announce-sidebar">
            <Reveal>
              <div className="announce-sidebar__card">
                <h3>Release Timeline</h3>
                <ul className="announce-timeline">
                  {TIMELINE.map(t => (
                    <li key={t.month} className="announce-timeline__item">
                      <div className="announce-timeline__dot" />
                      <div>
                        <strong>{t.month}</strong>
                        <span>{t.count} updates · {t.highlight}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="announce-sidebar__card announce-sidebar__subscribe">
                <h3>Stay Updated</h3>
                <p>Get product releases and security alerts delivered to your inbox.</p>
                {subscribed ? (
                  <p className="announce-sidebar__success">You&apos;re subscribed! Check your inbox for confirmation.</p>
                ) : (
                  <form onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="resources-btn resources-btn--primary resources-btn--sm">Subscribe</button>
                  </form>
                )}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="announce-sidebar__card">
                <h3>Quick Links</h3>
                <ul className="announce-quicklinks">
                  <li><a href="#contact">Release Notes Archive <ArrowRight /></a></li>
                  <li><a href="#contact">Security Bulletins <ArrowRight /></a></li>
                  <li><a href="#contact">System Status Page <ArrowRight /></a></li>
                  <li><a href="#contact">API Changelog <ArrowRight /></a></li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="announce-cta">
        <div className="container announce-cta__inner">
          <h2>Never miss an update</h2>
          <p>Follow us on social media or subscribe to RSS feeds for real-time Zoho announcements.</p>
          <div className="announce-cta__actions">
            <a href="#contact" className="resources-btn resources-btn--primary">Subscribe to RSS <ArrowRight /></a>
            <a href="#contact" className="resources-btn resources-btn--ghost">Follow on LinkedIn</a>
          </div>
        </div>
      </section>

      <ResourcesFooter />
    </div>
  );
}
