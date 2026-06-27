import { useState } from "react";
import "../../styles/AffiliateProgram.css";

const NAV_LINKS = [
  { label: "Who's a Fit", href: "#fit" },
  { label: "How it Works", href: "#how" },
  { label: "Tiers", href: "#tiers" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { number: "15%", label: "Commission on every qualified sale for the first 12 months" },
  { number: "90", label: "Day cookie life to earn commissions on your referrals" },
  { number: "$100", label: "Your referrals get wallet credits to try Zoho" },
  { number: "55+", label: "Zoho products available to promote to your audience" },
];

const FIT_CARDS = [
  {
    icon: "🎙️",
    title: "Influencers & Publishers",
    desc: "Whether you're a blogger, YouTuber, website owner, or anyone with a relevant subscriber base — recommend our products to your audience and watch the commissions accumulate.",
  },
  {
    icon: "📢",
    title: "Digital Marketing Agencies",
    desc: "Help your clients scale their businesses by implementing Zoho's streamlined digital workflows. Our cost-effective apps will help you deliver profitable growth for satisfied clients.",
  },
  {
    icon: "🖥️",
    title: "Hosting Providers",
    desc: "Take your hosting service to the next level. Zoho can complement your offerings and provide our software as an add-on, increasing customer satisfaction and retention.",
  },
  {
    icon: "🏛️",
    title: "Industry & Trade Associations",
    desc: "Maximize the value you provide to your members with a comprehensive suite of powerful tools to help them digitize business workflows and increase revenue.",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Join the program",
    desc: "Become a Zoho affiliate. Get instant access to your exclusive affiliate portal loaded with resources and your unique tracking link.",
  },
  {
    num: "2",
    title: "Promote the products",
    desc: "Share your unique affiliate links via blogs, social media posts, email newsletters, videos, and other digital forums.",
  },
  {
    num: "3",
    title: "Earn commissions",
    desc: "Earn a share of the revenue for every qualified sale via your links for the next 12 months — no cap on earnings.",
  },
];

const TIER_ROWS = [
  {
    label: "Commission",
    standard: <span className="commission-val">15%</span>,
    super: <span className="commission-val">18%</span>,
    elite: <span className="commission-val">20%</span>,
  },
  {
    label: "Revenue (New + Upgrade) OR New paid customers",
    standard: "Up to $5,000 OR Up to 20",
    super: "$5,001–$15,000 OR 21–50",
    elite: "$15,001+ OR 51+",
  },
  {
    label: "Deal-Size Incentives (5% one-time bonus)",
    standard: "$5,000 invoice value",
    super: "$10,000 invoice value",
    elite: "$15,000 invoice value",
  },
  {
    label: "Support SLA",
    standard: "48 hrs",
    super: "36 hrs + Live chat",
    elite: "24 hrs + Live chat",
  },
  {
    label: "Joint marketing initiatives",
    standard: "—",
    super: <span className="check">✓</span>,
    elite: <span className="check">✓</span>,
  },
  {
    label: "End customer credits",
    standard: "$100",
    super: "$100",
    elite: "$100*",
  },
  {
    label: "Welcome bonus",
    standard: "Subject to approval",
    super: "Zoho One licence (180 days)",
    elite: "Zoho One licence (180 days)",
  },
];

const TESTIMONIALS = [
  {
    initials: "JL",
    name: "John Liberatore",
    company: "Call Agent Ai Inc",
    text: "Understanding customer problems and offering the right solutions creates real value for businesses. The Zoho Affiliate Program is a great opportunity to help others, leverage your expertise, and earn rewards at the same time.",
  },
  {
    initials: "RA",
    name: "Rene Ayala",
    company: "Puede Business Consulting",
    text: "Zoho has been a perfect fit for helping businesses streamline operations and scale efficiently with an all-in-one solution. The strong support from the Zoho Affiliate Program makes it easier to deliver the right solutions.",
  },
  {
    initials: "TS",
    name: "Tathiana Sobroza",
    company: "Co-founder, Tree Ideas Digitais",
    text: "Zoho offers commissions for a wide range of products and their well-known brand makes it easier to promote them. They also have a detailed dashboard and one of the most comprehensive affiliate resources pages in the industry.",
  },
];

const PERKS = [
  {
    icon: "🤝",
    title: "End-to-End Sales Support",
    desc: "Create compelling content and drive referrals through your links. Our dedicated sales team will work to convert your leads into successful deals.",
  },
  {
    icon: "💰",
    title: "Unlimited Earning Potential",
    desc: "No minimum sales requirement and no limits on referral commissions. Our top performing affiliates earn thousands of dollars every month.",
  },
  {
    icon: "📱",
    title: "Powerful Suite of Apps",
    desc: "Over 150,000 businesses across 150+ countries run on Zoho. Our wide range of applications with a strong commitment to data privacy makes promoting easier.",
  },
  {
    icon: "🖥️",
    title: "Dedicated Affiliate Portal",
    desc: "Get access to toolkits, brand logos, overview videos, and much more. A dedicated affiliate manager will guide you to maximize your commissions.",
  },
  {
    icon: "📈",
    title: "Growth Opportunity",
    desc: "Our affiliate program rewards consistent efforts. Upgrade your membership from Standard to Super to Elite as your success grows.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Refer customers in any geography. With Zoho's global presence and multi-datacenter support, your audience is truly worldwide.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much commission can I earn?",
    a: "For each qualified sale, you can earn 15% of the revenue Zoho receives from the sale in the subsequent 12 months, provided the referral stays with Zoho for at least 60 days. There is no upper limit — our top affiliates earn thousands of dollars monthly.",
  },
  {
    q: "How long does the cookie last?",
    a: "Cookies set as part of this affiliate program have a generous 90-day validity. The prospective customer must sign up within 90 days of first clicking on your affiliate link.",
  },
  {
    q: "When will I get paid?",
    a: "If the unpaid commissions in your account equal or exceed $100, you can request a payout. Once you initiate the payment, it takes 15 days to reflect in your bank account. Wire transfer and PayPal are the preferred modes of payment.",
  },
  {
    q: "Who can I refer?",
    a: "You can refer any business that is not an existing Zoho customer under any paid subscription plan. The customer must sign up in the same data center that you are registered in as an affiliate.",
  },
  {
    q: "Is there a minimum sales requirement?",
    a: "No, there is no minimum sales requirement. However, consistent sales can improve your chances of moving up tiers and earning increased commissions. The program is also free to join — no monthly charges.",
  },
  {
    q: "Can I be an affiliate and a Consulting Partner simultaneously?",
    a: "No. The Zoho Affiliate Program and Zoho Partner Program are two independent programs. If you are an existing reseller, platform partner, or consulting partner with Zoho, you cannot apply for the affiliate program.",
  },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ── Sub-components ──────────────────────────────────────────────

function ZohoLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#E02020"/>
      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle"
        fontSize="16" fontWeight="bold" fill="white" fontFamily="Arial">Z</text>
    </svg>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <div className="faq-toggle">+</div>
      </div>
      <div className="faq-answer">{a}</div>
    </div>
  );
}

function Calculator() {
  const [form, setForm] = useState({ visitors: "", signup: "", conversion: "", txvalue: "" });
  const [result, setResult] = useState({ yearly: 0, months: Array(12).fill(0) });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const calculate = () => {
    const visitors = parseFloat(form.visitors) || 0;
    const signupRate = (parseFloat(form.signup) || 0) / 100;
    const convRate = (parseFloat(form.conversion) || 0) / 100;
    const txValue = parseFloat(form.txvalue) || 0;

    const monthlyCommission = visitors * signupRate * convRate * txValue * 0.15;
    let cumulative = 0;
    const months = Array(12).fill(0).map(() => {
      cumulative += monthlyCommission;
      return cumulative;
    });
    setResult({ yearly: months[11], months });
  };

  const maxVal = Math.max(...result.months, 1);

  return (
    <div className="calc-wrapper">
      <div className="calc-grid">
        <div className="calc-inputs">
          {[
            { label: "Monthly Visitors / Email Subscribers", name: "visitors", placeholder: "e.g. 10000" },
            { label: "Average Signup Rate (%)", name: "signup", placeholder: "e.g. 5" },
            { label: "Projected Conversion Rate (%)", name: "conversion", placeholder: "e.g. 10" },
            { label: "Average Transaction Value ($)", name: "txvalue", placeholder: "e.g. 500" },
          ].map(({ label, name, placeholder }) => (
            <div className="calc-field" key={name}>
              <label>{label}</label>
              <input
                type="number"
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                min="0"
              />
            </div>
          ))}
          <button className="calc-btn" onClick={calculate}>Calculate My Earnings</button>
        </div>

        <div className="calc-result">
          <div className="result-label">Cumulative Yearly Income</div>
          <div className="result-amount">
            ${result.yearly.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </div>
          <div className="result-sub">Based on 15% commission for 12 months</div>
          <div className="monthly-bars">
            {result.months.map((val, i) => {
              const h = Math.max(4, (val / maxVal) * 72);
              return (
                <div className="bar-wrap" key={i}>
                  <div className="bar" style={{ height: `${h}px` }} />
                  <div className="bar-month">{MONTHS[i]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────

export default function AffiliateProgram() {
  return (
    <div className="ap-root">
      {/* NAV */}
      <nav className="ap-nav">
        <a className="nav-logo" href="#">
          <ZohoLogo />
          zoho <span>Affiliate Program</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="https://www.zoho.com/affiliate/signup.html" className="btn-nav">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">🚀 Affiliate Program</div>
        <h1>Want to earn <em>$100,000</em> in annual commissions just like our top affiliates?</h1>
        <p>Zoho powers 100M+ users across the globe to run their businesses. Promote Zoho's comprehensive suite of 55+ apps and earn commissions for driving sales.</p>
        <div className="hero-cta">
          <a href="https://www.zoho.com/affiliate/signup.html" className="btn-primary">Get started — it's free</a>
          <a href="#how" className="btn-secondary">▶ Watch how it works</a>
        </div>
        <p className="hero-note">
          Already an affiliate?{" "}
          <a href="https://store.zoho.com/zstore">Access the affiliate portal →</a>
        </p>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {STATS.map(({ number, label }) => (
          <div className="stat-item" key={number}>
            <div className="stat-number">{number}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>

      {/* WHO'S A GOOD FIT */}
      <section className="fit-section" id="fit">
        <div className="container text-center">
          <div className="section-eyebrow">Who's a Good Fit?</div>
          <h2 className="section-title">Built for people who have an audience</h2>
          <p className="section-subtitle">
            Zoho's affiliate program is perfect for industry associations, publishers, website owners,
            hosting providers, influencers, Zoho customers, and any business interested in promoting
            Zoho and getting rewarded for it.
          </p>
          <div className="fit-grid">
            {FIT_CARDS.map(({ icon, title, desc }) => (
              <div className="fit-card" key={title}>
                <div className="fit-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="how-section">
        <div className="container text-center">
          <div className="section-eyebrow">How Does It Work?</div>
          <h2 className="section-title">Three simple steps to earning</h2>
          <p className="section-subtitle">
            Getting started is free and takes just a few minutes. No minimum sales requirement — start earning from day one.
          </p>
          <div className="how-steps">
            {STEPS.map(({ num, title, desc }) => (
              <div className="step" key={num}>
                <div className="step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="tiers-section" id="tiers">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow tiers-eyebrow">Zoho Affiliate Tiers</div>
            <h2 className="section-title">We believe you should always have room to grow</h2>
            <p className="section-subtitle tiers-subtitle">
              As you reach new levels of success, you can upgrade your affiliate membership from Standard to Super to Elite.
            </p>
          </div>
          <div className="tiers-table-wrap">
            <table className="tiers-table">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className="tier-badge badge-standard">Tier 1</div>
                    <br /><strong>Standard Affiliate</strong>
                  </th>
                  <th>
                    <div className="tier-badge badge-super">Tier 2</div>
                    <br /><strong>Super Affiliate</strong>
                  </th>
                  <th>
                    <div className="tier-badge badge-elite">Tier 3</div>
                    <br /><strong>Elite Affiliate</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TIER_ROWS.map(({ label, standard, super: sup, elite }) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{standard}</td>
                    <td>{sup}</td>
                    <td>{elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container text-center">
          <div className="section-eyebrow">Affiliate Voices</div>
          <h2 className="section-title">What our affiliates have to say</h2>
          <div className="testimonials-grid">
            {TESTIMONIALS.map(({ initials, name, company, text }) => (
              <div className="testimonial-card" key={name}>
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{initials}</div>
                  <div>
                    <div className="author-name">{name}</div>
                    <div className="author-title">{company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="calc-section" id="calculator">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow">Commission Calculator</div>
            <h2 className="section-title">See how your commission adds up</h2>
            <p className="section-subtitle center-subtitle">
              Enter your current metrics and see how much you can earn when you consistently promote Zoho.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* PERKS */}
      <section className="perks-section">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow">Why Choose Zoho</div>
            <h2 className="section-title">Perks of being a Zoho Affiliate</h2>
          </div>
          <div className="perks-grid">
            {PERKS.map(({ icon, title, desc }) => (
              <div className="perk-item" key={title}>
                <div className="perk-icon">{icon}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container text-center">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <h2>Earn unlimited commissions by promoting Zoho's suite of apps</h2>
        <p>Join thousands of affiliates already earning with Zoho. It's free to join and takes just minutes to set up.</p>
        <a href="https://www.zoho.com/affiliate/signup.html" className="btn-white">Get Started Today</a>
      </div>

      {/* FOOTER */}
      <footer className="ap-footer">
        <p>
          © 2025 Zoho Corporation Pvt. Ltd. All rights reserved.{" "}
          | <a href="https://www.zoho.com/privacy.html">Privacy Policy</a>{" "}
          | <a href="https://www.zoho.com/terms.html">Terms of Service</a>
        </p>
        <p style={{ marginTop: "8px" }}>
          Recreated for demonstration purposes from{" "}
          <a href="https://www.zoho.com/affiliate/">zoho.com/affiliate</a>
        </p>
      </footer>
    </div>
  );
}
