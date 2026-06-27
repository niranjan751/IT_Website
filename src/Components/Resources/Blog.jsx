import { useState, useMemo } from "react";
import "../../styles/ResourcesShared.css";
import "../../styles/Blog.css";
import {
  ResourcesNav,
  ResourcesFooter,
  Reveal,
  ArrowRight,
  SearchIcon,
} from "./shared";

const CATEGORIES = ["All", "Productivity", "Sales & CRM", "Finance", "AI & Automation", "Customer Stories"];

const FEATURED_POST = {
  id: 0,
  title: "How AI Is Reshaping Small Business Operations in 2026",
  excerpt: "From automated invoicing to predictive sales forecasting, AI is no longer a luxury for enterprise — it's becoming essential for businesses of every size. Here's what Zoho customers are doing today.",
  category: "AI & Automation",
  author: "Priya Nair",
  role: "Head of Product Marketing",
  date: "June 20, 2026",
  readTime: "8 min read",
  initials: "PN",
  color: "#7C3AED",
};

const POSTS = [
  {
    id: 1,
    title: "5 Zoho CRM Workflows That Save Sales Teams 10 Hours a Week",
    excerpt: "Automate lead assignment, follow-up reminders, and deal stage updates so your reps spend time selling — not doing admin work.",
    category: "Sales & CRM",
    author: "Marcus Chen",
    date: "June 15, 2026",
    readTime: "6 min read",
    initials: "MC",
    color: "#0052CC",
  },
  {
    id: 2,
    title: "The Complete Guide to Multi-Currency Accounting in Zoho Books",
    excerpt: "Everything finance teams need to know about handling international transactions, exchange rates, and consolidated reporting.",
    category: "Finance",
    author: "Sofia Alvarez",
    date: "June 10, 2026",
    readTime: "10 min read",
    initials: "SA",
    color: "#059669",
  },
  {
    id: 3,
    title: "Remote Team Productivity: Lessons from 500 Zoho One Customers",
    excerpt: "We surveyed half a thousand businesses running fully remote teams. These are the tools and habits that correlate with highest output.",
    category: "Productivity",
    author: "James Okonkwo",
    date: "June 5, 2026",
    readTime: "7 min read",
    initials: "JO",
    color: "#D97706",
  },
  {
    id: 4,
    title: "From Spreadsheets to Zoho: A Retailer's Digital Transformation Story",
    excerpt: "How a 40-person retail chain replaced 12 disconnected spreadsheets with Zoho One and cut order processing time by 60%.",
    category: "Customer Stories",
    author: "Emily Hart",
    date: "May 28, 2026",
    readTime: "5 min read",
    initials: "EH",
    color: "#E63946",
  },
  {
    id: 5,
    title: "Building a Customer Support System That Scales with Zoho Desk",
    excerpt: "Set up ticket routing, SLA policies, knowledge bases, and AI-assisted replies that grow with your customer base.",
    category: "Productivity",
    author: "David Kim",
    date: "May 22, 2026",
    readTime: "9 min read",
    initials: "DK",
    color: "#0EA5E9",
  },
  {
    id: 6,
    title: "Zoho Analytics: Turning Raw Data into Board-Ready Dashboards",
    excerpt: "A step-by-step walkthrough for non-technical leaders who need real-time visibility into revenue, pipeline, and operations.",
    category: "Finance",
    author: "Lisa Müller",
    date: "May 18, 2026",
    readTime: "8 min read",
    initials: "LM",
    color: "#7C3AED",
  },
  {
    id: 7,
    title: "Why Marketing Teams Are Consolidating on Zoho Campaigns",
    excerpt: "Email, SMS, social, and landing pages in one platform — plus native CRM integration that finally closes the attribution loop.",
    category: "Sales & CRM",
    author: "Priya Nair",
    date: "May 12, 2026",
    readTime: "6 min read",
    initials: "PN",
    color: "#0052CC",
  },
  {
    id: 8,
    title: "Automating HR Onboarding with Zoho People and Zoho Sign",
    excerpt: "From offer letter to first-day checklist — how HR teams eliminate manual paperwork and reduce time-to-productivity for new hires.",
    category: "Productivity",
    author: "Anna Petrov",
    date: "May 5, 2026",
    readTime: "7 min read",
    initials: "AP",
    color: "#059669",
  },
  {
    id: 9,
    title: "Zia AI in Practice: 12 Real Use Cases from Zoho Customers",
    excerpt: "Predictive lead scoring, smart email replies, anomaly detection in expenses — see how businesses are putting Zia to work today.",
    category: "AI & Automation",
    author: "Marcus Chen",
    date: "April 28, 2026",
    readTime: "11 min read",
    initials: "MC",
    color: "#E63946",
  },
];

const POPULAR_TAGS = ["CRM", "Automation", "Remote Work", "Zoho One", "Analytics", "Invoicing", "AI", "Startups"];

const POSTS_PER_PAGE = 6;

function PostCard({ post, large = false }) {
  return (
    <article className={`blog-card ${large ? "blog-card--large" : ""}`}>
      <div className="blog-card__visual" style={{ background: `linear-gradient(135deg, ${post.color}22, ${post.color}44)` }}>
        <span className="blog-card__category">{post.category}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <div className="blog-card__author">
          <div className="blog-card__avatar" style={{ background: post.color }}>{post.initials}</div>
          <span>{post.author}</span>
        </div>
        <a href="#contact" className="blog-card__link">Read Article <ArrowRight /></a>
      </div>
    </article>
  );
}

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    return POSTS.filter(p => {
      const matchCat = category === "All" || p.category === category;
      const q = query.toLowerCase();
      const matchQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      const matchTag = !activeTag || p.title.toLowerCase().includes(activeTag.toLowerCase()) || p.category.toLowerCase().includes(activeTag.toLowerCase());
      return matchCat && matchQuery && matchTag;
    });
  }, [category, query, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategory = (cat) => {
    setCategory(cat);
    setPage(1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <div className="resources-page blog-page" id="blog">
      <ResourcesNav activePage="blog" />

      <section className="blog-hero">
        <div className="container blog-hero__inner">
          <Reveal>
            <span className="resources-section-eyebrow">ZOHO BLOG</span>
            <h1 className="blog-hero__title">Insights for Modern Business</h1>
            <p className="blog-hero__sub">
              Tips, guides, customer stories, and product deep-dives to help you work smarter with Zoho.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="blog-hero__search">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search articles..."
                value={query}
                onChange={e => { setQuery(e.target.value); setPage(1); }}
                aria-label="Search blog posts"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-featured">
        <div className="container">
          <Reveal>
            <span className="blog-featured__label">Editor&apos;s Pick</span>
            <div className="blog-featured__card">
              <div className="blog-featured__visual" style={{ background: `linear-gradient(135deg, ${FEATURED_POST.color}, ${FEATURED_POST.color}99)` }}>
                <span className="blog-featured__cat">{FEATURED_POST.category}</span>
              </div>
              <div className="blog-featured__content">
                <div className="blog-featured__meta">
                  <span>{FEATURED_POST.date}</span>
                  <span>{FEATURED_POST.readTime}</span>
                </div>
                <h2>{FEATURED_POST.title}</h2>
                <p>{FEATURED_POST.excerpt}</p>
                <div className="blog-featured__author">
                  <div className="blog-featured__avatar" style={{ background: FEATURED_POST.color }}>{FEATURED_POST.initials}</div>
                  <div>
                    <strong>{FEATURED_POST.author}</strong>
                    <span>{FEATURED_POST.role}</span>
                  </div>
                </div>
                <a href="#contact" className="resources-btn resources-btn--primary resources-btn--sm">Read Full Article <ArrowRight /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="blog-main">
        <div className="container">
          <div className="blog-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`blog-filters__tab ${category === cat ? "blog-filters__tab--active" : ""}`}
                onClick={() => handleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-tags">
            {POPULAR_TAGS.map(tag => (
              <button
                key={tag}
                className={`blog-tags__chip ${activeTag === tag ? "blog-tags__chip--active" : ""}`}
                onClick={() => { setActiveTag(activeTag === tag ? null : tag); setPage(1); }}
              >
                #{tag}
              </button>
            ))}
          </div>

          <p className="blog-results-count">{filtered.length} article{filtered.length !== 1 ? "s" : ""} found</p>

          {paginated.length > 0 ? (
            <div className="blog-grid">
              {paginated.map((post, i) => (
                <Reveal key={post.id} delay={i * 50}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="blog-empty">
              <p>No articles match your search.</p>
              <button className="resources-btn resources-btn--outline" onClick={() => { setQuery(""); setCategory("All"); setActiveTag(null); setPage(1); }}>Clear Filters</button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="blog-pagination">
              <button
                className="blog-pagination__btn"
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                ← Previous
              </button>
              <div className="blog-pagination__pages">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`blog-pagination__page ${page === i + 1 ? "blog-pagination__page--active" : ""}`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                className="blog-pagination__btn"
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="blog-newsletter">
        <div className="container blog-newsletter__inner">
          <Reveal>
            <div className="blog-newsletter__text">
              <h2>Get the best of the Zoho Blog</h2>
              <p>Weekly digest of our top articles — no spam, unsubscribe anytime.</p>
            </div>
            {subscribed ? (
              <p className="blog-newsletter__success">Thanks for subscribing! Check your inbox to confirm.</p>
            ) : (
              <form className="blog-newsletter__form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="resources-btn resources-btn--primary">Subscribe</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <ResourcesFooter />
    </div>
  );
}
