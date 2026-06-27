import { useState, useMemo } from "react";
import "../../styles/CustomerStories.css";

// ── Data ────────────────────────────────────────────────────────

const FEATURED = [
  {
    id: 1,
    company: "Rablab",
    logo: "RL",
    logoColor: "#0052CC",
    industry: "Marketing",
    country: "Canada",
    product: "Zoho One",
    quote:
      "Rablab integrated their business operations and increased productivity with Zoho. Having everything under one roof transformed how our teams collaborate daily.",
    person: "Marc-Antoine Lemire",
    role: "CEO, Rablab",
    metric: "40%",
    metricLabel: "Productivity Increase",
    bg: "#EEF4FF",
    accent: "#0052CC",
  },
  {
    id: 2,
    company: "Violet",
    logo: "VI",
    logoColor: "#7C3AED",
    industry: "Retail",
    country: "United States",
    product: "Zoho CRM",
    quote:
      "Life before Zoho was a lot more time consuming. Now, to get that time back to grow the business is invaluable!",
    person: "Sarah Connolly",
    role: "Founder, Violet",
    metric: "3x",
    metricLabel: "Faster Operations",
    bg: "#F5F0FF",
    accent: "#7C3AED",
  },
  {
    id: 3,
    company: "Packshot",
    logo: "PS",
    logoColor: "#059669",
    industry: "Media",
    country: "Netherlands",
    product: "Zoho Analytics",
    quote:
      "Instead of looking for information in different tools, with Zoho One we were able to see it in one place. Complete visibility changed everything for us.",
    person: "Thomas Meijer",
    role: "Operations Director, Packshot",
    metric: "60%",
    metricLabel: "Time Saved",
    bg: "#F0FDF4",
    accent: "#059669",
  },
];

const STORIES = [
  {
    id: 101,
    company: "HDFC Life",
    logo: "HL",
    logoColor: "#003087",
    industry: "Finance",
    country: "India",
    product: "Zoho CRM",
    size: "Enterprise",
    quote:
      "Zoho CRM helped us manage millions of customer interactions seamlessly, giving our agents the data they need, exactly when they need it.",
    person: "Ankit Sharma",
    role: "Head of Digital, HDFC Life",
    metric: "2M+",
    metricLabel: "Policies Managed",
  },
  {
    id: 102,
    company: "Hyundai",
    logo: "HY",
    logoColor: "#002C5F",
    industry: "Automotive",
    country: "South Korea",
    product: "Zoho One",
    size: "Enterprise",
    quote:
      "We standardized operations across 15 countries using Zoho. The consolidation led to dramatic cost savings and improved reporting accuracy across the board.",
    person: "Ji-woo Kim",
    role: "IT Director, Hyundai",
    metric: "15",
    metricLabel: "Countries Unified",
  },
  {
    id: 103,
    company: "FedEx",
    logo: "FX",
    logoColor: "#4D148C",
    industry: "Logistics",
    country: "United States",
    product: "Zoho Desk",
    size: "Enterprise",
    quote:
      "Customer support at scale demanded a smarter platform. Zoho Desk delivered exactly that — powerful automation, insightful analytics, and a stellar user experience.",
    person: "Lisa Tran",
    role: "VP Customer Experience, FedEx",
    metric: "98%",
    metricLabel: "CSAT Score",
  },
  {
    id: 104,
    company: "Swiggy",
    logo: "SW",
    logoColor: "#FC8019",
    industry: "Food & Beverage",
    country: "India",
    product: "Zoho People",
    size: "Enterprise",
    quote:
      "Managing 200,000+ delivery partners required a robust HR system. Zoho People scaled effortlessly with our growth and simplified every process.",
    person: "Rohit Das",
    role: "Chief People Officer, Swiggy",
    metric: "200K+",
    metricLabel: "Workforce Managed",
  },
  {
    id: 105,
    company: "Blue Star",
    logo: "BS",
    logoColor: "#1565C0",
    industry: "Manufacturing",
    country: "India",
    product: "Zoho Analytics",
    size: "Enterprise",
    quote:
      "Real-time dashboards from Zoho Analytics transformed how our leadership makes decisions. We now act on data, not instinct.",
    person: "Priya Nair",
    role: "CFO, Blue Star",
    metric: "35%",
    metricLabel: "Revenue Growth",
  },
  {
    id: 106,
    company: "Marriott",
    logo: "MR",
    logoColor: "#A6001A",
    industry: "Hospitality",
    country: "United States",
    product: "Zoho CRM",
    size: "Enterprise",
    quote:
      "We unified guest relationship management across our global properties. Zoho's flexibility and customization are unrivaled in the hospitality sector.",
    person: "James O'Brien",
    role: "Director of CX, Marriott",
    metric: "180+",
    metricLabel: "Properties Connected",
  },
  {
    id: 107,
    company: "Deloitte",
    logo: "DL",
    logoColor: "#86BC25",
    industry: "Professional Services",
    country: "United States",
    product: "Zoho Projects",
    size: "Enterprise",
    quote:
      "Zoho Projects gave our consulting teams a unified workspace. Project tracking, billing, and reporting are now effortless and fully integrated.",
    person: "Amanda Clarke",
    role: "Managing Partner, Deloitte",
    metric: "50%",
    metricLabel: "Faster Delivery",
  },
  {
    id: 108,
    company: "Mahindra",
    logo: "MH",
    logoColor: "#CE0037",
    industry: "Automotive",
    country: "India",
    product: "Zoho One",
    size: "Enterprise",
    quote:
      "With Zoho One, Mahindra replaced 14 disparate tools with a single integrated platform. Collaboration improved overnight and costs dropped significantly.",
    person: "Suresh Patel",
    role: "CTO, Mahindra",
    metric: "14→1",
    metricLabel: "Tools Consolidated",
  },
  {
    id: 109,
    company: "Lyft",
    logo: "LY",
    logoColor: "#FF00BF",
    industry: "Technology",
    country: "United States",
    product: "Zoho Recruit",
    size: "Mid-Market",
    quote:
      "Scaling from 500 to 5,000 employees in 18 months required a recruitment engine that could keep up. Zoho Recruit was exactly that.",
    person: "Erica Sloane",
    role: "Head of Talent, Lyft",
    metric: "10x",
    metricLabel: "Hiring Speed",
  },
  {
    id: 110,
    company: "Canon",
    logo: "CN",
    logoColor: "#CC0000",
    industry: "Technology",
    country: "Japan",
    product: "Zoho CRM",
    size: "Enterprise",
    quote:
      "Canon's global sales teams now operate from a single CRM. Pipeline visibility and forecasting accuracy have never been higher.",
    person: "Kenji Tanaka",
    role: "Sales Director APAC, Canon",
    metric: "45%",
    metricLabel: "Pipeline Accuracy",
  },
  {
    id: 111,
    company: "Bosch",
    logo: "BO",
    logoColor: "#EA0016",
    industry: "Manufacturing",
    country: "Germany",
    product: "Zoho Analytics",
    size: "Enterprise",
    quote:
      "Manufacturing intelligence at Bosch is now powered by Zoho Analytics. Sensor data, production metrics, and financials — all in one place.",
    person: "Stefan Müller",
    role: "Head of Operations, Bosch",
    metric: "25%",
    metricLabel: "Downtime Reduced",
  },
  {
    id: 112,
    company: "Zoomcar",
    logo: "ZC",
    logoColor: "#FF4500",
    industry: "Technology",
    country: "India",
    product: "Zoho Desk",
    size: "Mid-Market",
    quote:
      "Customer complaints dropped by 60% after deploying Zoho Desk. Automated workflows handled repetitive queries so our team could focus on complex issues.",
    person: "Greg Moran",
    role: "CEO, Zoomcar",
    metric: "60%",
    metricLabel: "Complaints Reduced",
  },
];

const INDUSTRIES = ["All", "Finance", "Automotive", "Logistics", "Food & Beverage", "Manufacturing", "Hospitality", "Professional Services", "Technology", "Marketing", "Retail", "Media"];
const PRODUCTS   = ["All", "Zoho One", "Zoho CRM", "Zoho Desk", "Zoho People", "Zoho Analytics", "Zoho Projects", "Zoho Recruit"];
const COUNTRIES  = ["All", "India", "United States", "South Korea", "Netherlands", "Germany", "Japan", "Canada"];
const SIZES      = ["All", "Enterprise", "Mid-Market", "SMB"];

const LOGOS = [
  "HDFC Life","Hyundai","IKEA","Allianz","Daimler","Cummins","Volkswagen",
  "FedEx","Ather","Hexaware","Philips","Amazon","Suzuki","Lyft","Marriott",
  "Swiggy","Meesho","Dell","Renault","Canon","Godrej","Stanford","Bosch",
  "Deloitte","Yokohama","KPMG","L'Oréal","La Liga","Siemens","Agoda","Puma",
];

const STATS = [
  { number: "120M+", label: "Users Globally" },
  { number: "150+",  label: "Countries" },
  { number: "55+",   label: "Products" },
  { number: "500K+", label: "Businesses" },
];

// ── Helpers ──────────────────────────────────────────────────────

function Avatar({ initials, color, size = 48 }) {
  return (
    <div
      className="cs-avatar"
      style={{
        width: size, height: size,
        background: color,
        fontSize: size * 0.33,
      }}
    >
      {initials}
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────

function FeaturedCard({ story, active, onClick }) {
  return (
    <div
      className={`featured-card${active ? " active" : ""}`}
      style={{ "--card-bg": story.bg, "--card-accent": story.accent }}
      onClick={onClick}
    >
      <div className="fc-inner">
        <div className="fc-metric">
          <span className="fc-metric-num" style={{ color: story.accent }}>{story.metric}</span>
          <span className="fc-metric-label">{story.metricLabel}</span>
        </div>
        <div className="fc-tag">{story.product}</div>
        <p className="fc-quote">"{story.quote}"</p>
        <div className="fc-author">
          <Avatar initials={story.logo} color={story.logoColor} size={40} />
          <div>
            <div className="fc-name">{story.person}</div>
            <div className="fc-role">{story.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ story }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="story-card">
      <div className="sc-header">
        <Avatar initials={story.logo} color={story.logoColor} size={44} />
        <div className="sc-head-text">
          <div className="sc-company">{story.company}</div>
          <div className="sc-meta">
            <span className="sc-tag">{story.industry}</span>
            <span className="sc-tag sc-tag--country">{story.country}</span>
          </div>
        </div>
      </div>

      <div className="sc-metric-row">
        <div className="sc-metric">
          <span className="sc-metric-num">{story.metric}</span>
          <span className="sc-metric-lbl">{story.metricLabel}</span>
        </div>
        <div className="sc-product">{story.product}</div>
      </div>

      <p className="sc-quote">
        {expanded ? story.quote : `${story.quote.slice(0, 120)}…`}
      </p>
      <button className="sc-expand" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less ↑" : "Read more ↓"}
      </button>

      <div className="sc-footer">
        <span className="sc-person">{story.person}</span>
        <span className="sc-role">{story.role}</span>
      </div>
    </div>
  );
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <label className="filter-label">{label}</label>
      <select className="filter-select" value={value} onChange={e => onChange(e.target.value)}>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────

export default function CustomerStories() {
  const [activeFeature, setActiveFeature]   = useState(0);
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filterProduct,  setFilterProduct]  = useState("All");
  const [filterCountry,  setFilterCountry]  = useState("All");
  const [filterSize,     setFilterSize]     = useState("All");
  const [search,         setSearch]         = useState("");

  const filtered = useMemo(() => {
    return STORIES.filter(s => {
      if (filterIndustry !== "All" && s.industry !== filterIndustry) return false;
      if (filterProduct  !== "All" && s.product  !== filterProduct)  return false;
      if (filterCountry  !== "All" && s.country  !== filterCountry)  return false;
      if (filterSize     !== "All" && s.size     !== filterSize)     return false;
      if (search && !s.company.toLowerCase().includes(search.toLowerCase()) &&
          !s.quote.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filterIndustry, filterProduct, filterCountry, filterSize, search]);

  const clearFilters = () => {
    setFilterIndustry("All");
    setFilterProduct("All");
    setFilterCountry("All");
    setFilterSize("All");
    setSearch("");
  };

  const hasFilters = filterIndustry !== "All" || filterProduct !== "All" ||
                     filterCountry  !== "All" || filterSize    !== "All" || search;

  return (
    <div className="cs-root">

      {/* ── NAV ── */}
      <nav className="cs-nav">
        <a className="cs-nav-logo" href="#">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#E02020"/>
            <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
              fontSize="16" fontWeight="bold" fill="white" fontFamily="Arial">Z</text>
          </svg>
          <span className="logo-name">zoho</span>
          <span className="logo-sep">|</span>
          <span className="logo-section">Customer Stories</span>
        </a>
        <div className="cs-nav-links">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#" className="cs-nav-btn">Get Started Free</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="cs-hero">
        <div className="cs-hero-bg" aria-hidden="true" />
        <div className="cs-hero-inner">
          <div className="cs-hero-eyebrow">Customer Success</div>
          <h1 className="cs-hero-title">
            Trusted by over <em>120 Million</em><br />users globally
          </h1>
          <p className="cs-hero-sub">
            The world's leading companies — from ambitious startups to Fortune 500 enterprises —
            trust Zoho to run their business operations. See their stories.
          </p>
          <div className="cs-hero-search">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by company or keyword…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Stats strip */}
        <div className="cs-stats">
          {STATS.map(({ number, label }) => (
            <div className="cs-stat" key={label}>
              <div className="cs-stat-num">{number}</div>
              <div className="cs-stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <div className="cs-marquee-wrap">
        <div className="cs-marquee">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div className="marquee-logo" key={i}>{name}</div>
          ))}
        </div>
      </div>

      {/* ── FEATURED STORIES ── */}
      <section className="cs-featured">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Featured Stories</div>
            <h2 className="section-title">Real results from real customers</h2>
            <p className="section-sub">
              Explore how businesses of every size transformed their operations with Zoho.
            </p>
          </div>
          <div className="featured-grid">
            {FEATURED.map((story, i) => (
              <FeaturedCard
                key={story.id}
                story={story}
                active={activeFeature === i}
                onClick={() => setActiveFeature(i)}
              />
            ))}
          </div>
          {/* Expanded detail */}
          <div className="featured-detail" style={{ "--accent": FEATURED[activeFeature].accent }}>
            <div className="fd-left">
              <div className="fd-tag">{FEATURED[activeFeature].product}</div>
              <blockquote className="fd-quote">"{FEATURED[activeFeature].quote}"</blockquote>
              <div className="fd-author">
                <Avatar
                  initials={FEATURED[activeFeature].logo}
                  color={FEATURED[activeFeature].logoColor}
                  size={52}
                />
                <div>
                  <div className="fd-name">{FEATURED[activeFeature].person}</div>
                  <div className="fd-role">{FEATURED[activeFeature].role}</div>
                </div>
              </div>
            </div>
            <div className="fd-right">
              <div className="fd-metric-big">
                <span className="fd-metric-num">{FEATURED[activeFeature].metric}</span>
                <span className="fd-metric-lbl">{FEATURED[activeFeature].metricLabel}</span>
              </div>
              <div className="fd-info-row">
                <span>🌍 {FEATURED[activeFeature].country}</span>
                <span>🏭 {FEATURED[activeFeature].industry}</span>
              </div>
              <a href="#" className="fd-cta">Read Full Story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL STORIES ── */}
      <section className="cs-all">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">All Stories</div>
            <h2 className="section-title">Browse by industry, product, and more</h2>
          </div>

          {/* Filters */}
          <div className="cs-filters">
            <FilterSelect label="Industry" options={INDUSTRIES} value={filterIndustry} onChange={setFilterIndustry} />
            <FilterSelect label="Product"  options={PRODUCTS}   value={filterProduct}  onChange={setFilterProduct} />
            <FilterSelect label="Country"  options={COUNTRIES}  value={filterCountry}  onChange={setFilterCountry} />
            <FilterSelect label="Company Size" options={SIZES}  value={filterSize}     onChange={setFilterSize} />
            {hasFilters && (
              <button className="filter-clear" onClick={clearFilters}>✕ Clear all</button>
            )}
          </div>

          {/* Results count */}
          <div className="cs-results-bar">
            <span>{filtered.length} {filtered.length === 1 ? "story" : "stories"} found</span>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="cs-grid">
              {filtered.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
            </div>
          ) : (
            <div className="cs-empty">
              <div className="cs-empty-icon">🔍</div>
              <h3>No stories match your filters</h3>
              <p>Try adjusting your filters or <button onClick={clearFilters}>clear all filters</button>.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── INDUSTRIES STRIP ── */}
      <section className="cs-industries">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-eyebrow">Across Every Sector</div>
            <h2 className="section-title">Built for every industry</h2>
          </div>
          <div className="industries-grid">
            {[
              { icon: "🏦", name: "Finance & Banking" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🛒", name: "Retail & E-commerce" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "🎓", name: "Education" },
              { icon: "✈️", name: "Travel & Hospitality" },
              { icon: "🚚", name: "Logistics" },
              { icon: "💼", name: "Professional Services" },
            ].map(({ icon, name }) => (
              <div className="industry-chip" key={name}>
                <span className="industry-icon">{icon}</span>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cs-cta">
        <div className="cta-inner">
          <h2>Join 120 million users who run their business on Zoho</h2>
          <p>Start free. No credit card required. Scale at your pace.</p>
          <div className="cta-btns">
            <a href="https://www.zoho.com/signup.html" className="cta-btn-primary">Start for Free</a>
            <a href="https://www.zoho.com/contactus.html" className="cta-btn-secondary">Talk to Sales</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="cs-footer">
        <p>© 2025 Zoho Corporation Pvt. Ltd. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.zoho.com/privacy.html">Privacy Policy</a>
          <a href="https://www.zoho.com/terms.html">Terms of Service</a>
          <a href="https://www.zoho.com/customers.html">Customer Stories</a>
        </div>
      </footer>

    </div>
  );
}
