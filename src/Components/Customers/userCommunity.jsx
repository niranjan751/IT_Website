import "../../styles/userCommunity.css";

const GROUPS = [
  { icon: "💬", name: "Zoho CRM Users", members: "42K", topics: 1820, active: true },
  { icon: "📊", name: "Analytics & BI", members: "18K", topics: 940, active: false },
  { icon: "🤖", name: "Automation & Zia AI", members: "26K", topics: 1130, active: true },
  { icon: "🛠️", name: "Developers & API", members: "31K", topics: 2540, active: false },
  { icon: "💰", name: "Zoho Books & Finance", members: "22K", topics: 870, active: false },
  { icon: "🧩", name: "Zoho One Admins", members: "14K", topics: 630, active: false },
];

const CHAPTERS = [
  { flag: "🇺🇸", city: "New York", members: "3.2K" },
  { flag: "🇬🇧", city: "London", members: "2.8K" },
  { flag: "🇮🇳", city: "Bangalore", members: "5.1K" },
  { flag: "🇦🇺", city: "Sydney", members: "1.9K" },
  { flag: "🇩🇪", city: "Berlin", members: "1.5K" },
  { flag: "🇸🇬", city: "Singapore", members: "2.1K" },
];

const EVENTS = [
  { date: "Jul 10", title: "Zoho CRM Power Users Live Q&A", type: "Webinar", free: true },
  { date: "Jul 18", title: "ZohoCon New York 2026", type: "In-Person", free: false },
  { date: "Aug 2", title: "Automation Masterclass with Zia AI", type: "Webinar", free: true },
  { date: "Aug 22", title: "Zoho Developer Summit", type: "Hybrid", free: false },
];

export default function UserCommunity() {
  return (
    <div className="uc-root">
      {/* NAV */}
      <nav className="uc-nav">
        <div className="uc-nav__logo">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <rect width="12" height="12" rx="3" fill="#1D3557" />
            <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
            <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
          </svg>
          <span>Zoho</span>
          <span className="uc-nav__sep">|</span>
          <span className="uc-nav__section">User Community</span>
        </div>
        <a href="#uc-join" className="uc-btn uc-btn--primary">Join Community</a>
      </nav>

      {/* HERO */}
      <section className="uc-hero">
        <div className="uc-hero__inner">
          <div className="uc-hero__eyebrow">Global Community</div>
          <h1>Learn. Share. <em>Connect.</em></h1>
          <p>
            Join 2 million Zoho users across 150+ countries. Ask questions, share workflows,
            attend events, and grow alongside peers who use Zoho every day.
          </p>
          <div className="uc-hero__ctas">
            <a href="#uc-join" className="uc-btn uc-btn--primary">Join for Free</a>
            <a href="#uc-groups" className="uc-btn uc-btn--outline">Browse Groups</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="uc-stats">
        {[["2M+", "Community Members"], ["150+", "Countries"], ["500K+", "Posts & Answers"], ["Weekly", "Webinars & Events"]].map(([n, l]) => (
          <div className="uc-stat" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>

      {/* DISCUSSION GROUPS */}
      <section className="uc-groups" id="uc-groups">
        <div className="uc-container">
          <div className="uc-section-header">
            <div className="uc-eyebrow">Discussion Groups</div>
            <h2>Find your tribe</h2>
            <p>Join a focused group and dive into conversations that matter to you.</p>
          </div>
          <div className="uc-groups__grid">
            {GROUPS.map((g) => (
              <div className={`uc-group-card ${g.active ? "uc-group-card--active" : ""}`} key={g.name}>
                <div className="uc-group-card__top">
                  <span className="uc-group-card__icon">{g.icon}</span>
                  {g.active && <span className="uc-group-card__live">🟢 Active now</span>}
                </div>
                <h3>{g.name}</h3>
                <div className="uc-group-card__meta">
                  <span>👥 {g.members} members</span>
                  <span>💬 {g.topics} topics</span>
                </div>
                <a href="#uc-join" className="uc-btn uc-btn--sm">Join Group →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="uc-chapters">
        <div className="uc-container">
          <div className="uc-section-header">
            <div className="uc-eyebrow">Local Chapters</div>
            <h2>Find your local community</h2>
            <p>Meet other Zoho users near you at in-person meetups and regional events.</p>
          </div>
          <div className="uc-chapters__grid">
            {CHAPTERS.map((c) => (
              <div className="uc-chapter-card" key={c.city}>
                <span className="uc-chapter-card__flag">{c.flag}</span>
                <h3>{c.city}</h3>
                <span className="uc-chapter-card__members">👥 {c.members} members</span>
                <a href="#uc-join" className="uc-btn uc-btn--sm uc-btn--outline">Join Chapter</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="uc-events">
        <div className="uc-container">
          <div className="uc-section-header">
            <div className="uc-eyebrow">Upcoming Events</div>
            <h2>Never stop learning</h2>
          </div>
          <div className="uc-events__list">
            {EVENTS.map((e) => (
              <div className="uc-event-row" key={e.title}>
                <div className="uc-event-row__date">{e.date}</div>
                <div className="uc-event-row__info">
                  <h4>{e.title}</h4>
                  <div className="uc-event-row__tags">
                    <span className="uc-tag">{e.type}</span>
                    {e.free && <span className="uc-tag uc-tag--free">Free</span>}
                  </div>
                </div>
                <a href="#uc-join" className="uc-btn uc-btn--sm">Register →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="uc-join" id="uc-join">
        <div className="uc-join__inner">
          <h2>Ready to join the conversation?</h2>
          <p>Sign up free and connect with 2 million Zoho users worldwide today.</p>
          <a href="#uc-join" className="uc-btn uc-btn--primary uc-btn--lg">Join the Community</a>
        </div>
      </section>

      <footer className="uc-footer">
        <p>© 2026 Zoho Corporation. All rights reserved.</p>
      </footer>
    </div>
  );
}
