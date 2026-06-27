import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";

const PLAN_MAP = {
  free:       { name: "Free", icon: "🚀", desc: "Up to 3 users. Great to explore." },
  standard:   { name: "Standard", icon: "⚡", desc: "For growing teams up to 50 users." },
  enterprise: { name: "Enterprise", icon: "🏆", desc: "Unlimited users. Dedicated support." },
};

function ZohoLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect width="12" height="12" rx="3" fill="#1D3557" />
      <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
      <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
      <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
    </svg>
  );
}

function getInitials(name) {
  if (!name) return "?";
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function Profile({ onNavigate }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    if (onNavigate) onNavigate("");
  };

  const plan = PLAN_MAP[user?.plan] || PLAN_MAP.free;

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "long" })
    : "Just now";

  return (
    <div className="profile-root">
      {/* ── Navbar ── */}
      <nav className="profile-nav">
        <div className="profile-nav__logo" onClick={() => onNavigate && onNavigate("")}>
          <ZohoLogo size={28} />
          <span>Zoho</span>
        </div>
        <div className="profile-nav__actions">
          <button className="profile-nav__home-btn" onClick={() => onNavigate && onNavigate("")}>
            ← Home
          </button>
          <button className="profile-nav__logout" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </nav>

      {/* ── Main ── */}
      <main className="profile-main">
        {/* Hero */}
        <div className="profile-hero">
          <div className="profile-avatar">
            {getInitials(user?.name)}
            <div className="profile-avatar__badge" />
          </div>
          <div className="profile-hero__info">
            <h1 className="profile-hero__name">{user?.name || "Zoho User"}</h1>
            <p className="profile-hero__email">{user?.email}</p>
            <div className="profile-hero__tags">
              {user?.plan && (
                <span className="profile-tag profile-tag--plan">
                  {plan.icon} {plan.name} Plan
                </span>
              )}
              {user?.company && (
                <span className="profile-tag profile-tag--company">
                  🏢 {user.company}
                </span>
              )}
              {user?.role && (
                <span className="profile-tag profile-tag--role">
                  💼 {user.role}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat__value">55+</span>
            <span className="profile-stat__label">Apps Available</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat__value">{user?.size || "—"}</span>
            <span className="profile-stat__label">Team Size</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat__value">{memberSince}</span>
            <span className="profile-stat__label">Member Since</span>
          </div>
        </div>

        {/* Grid */}
        <div className="profile-grid">
          {/* Account Details */}
          <div className="profile-card">
            <p className="profile-card__title"><span>👤</span> Account Details</p>
            <ul className="profile-info-list">
              <li className="profile-info-item">
                <div className="profile-info-item__icon">✉️</div>
                <div>
                  <span className="profile-info-item__label">Email</span>
                  <span className="profile-info-item__value">{user?.email || "—"}</span>
                </div>
              </li>
              <li className="profile-info-item">
                <div className="profile-info-item__icon">👤</div>
                <div>
                  <span className="profile-info-item__label">Full Name</span>
                  <span className="profile-info-item__value">{user?.name || "—"}</span>
                </div>
              </li>
              <li className="profile-info-item">
                <div className="profile-info-item__icon">🏢</div>
                <div>
                  <span className="profile-info-item__label">Company</span>
                  <span className="profile-info-item__value">{user?.company || "—"}</span>
                </div>
              </li>
              <li className="profile-info-item">
                <div className="profile-info-item__icon">💼</div>
                <div>
                  <span className="profile-info-item__label">Role</span>
                  <span className="profile-info-item__value">{user?.role || "—"}</span>
                </div>
              </li>
              <li className="profile-info-item">
                <div className="profile-info-item__icon">👥</div>
                <div>
                  <span className="profile-info-item__label">Team Size</span>
                  <span className="profile-info-item__value">{user?.size || "—"}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="profile-card">
            <p className="profile-card__title"><span>⚡</span> Recent Activity</p>
            <div className="profile-activity">
              <div className="profile-activity-item">
                <div className="profile-activity-item__dot profile-activity-item__dot--green" />
                <span className="profile-activity-item__text">Logged in successfully</span>
                <span className="profile-activity-item__time">Just now</span>
              </div>
              <div className="profile-activity-item">
                <div className="profile-activity-item__dot profile-activity-item__dot--blue" />
                <span className="profile-activity-item__text">Account created</span>
                <span className="profile-activity-item__time">{memberSince}</span>
              </div>
              <div className="profile-activity-item">
                <div className="profile-activity-item__dot profile-activity-item__dot--amber" />
                <span className="profile-activity-item__text">Plan selected: {plan.name}</span>
                <span className="profile-activity-item__time">{memberSince}</span>
              </div>
              <div className="profile-activity-item">
                <div className="profile-activity-item__dot profile-activity-item__dot--blue" />
                <span className="profile-activity-item__text">Profile set up complete</span>
                <span className="profile-activity-item__time">{memberSince}</span>
              </div>
            </div>
          </div>

          {/* Plan */}
          <div className="profile-card profile-card--full">
            <p className="profile-card__title"><span>🎯</span> Current Plan</p>
            <div className="profile-plan-display">
              <span className="profile-plan-display__icon">{plan.icon}</span>
              <div>
                <span className="profile-plan-display__name">{plan.name} Plan</span>
                <span className="profile-plan-display__desc">{plan.desc}</span>
              </div>
              {user?.plan !== "enterprise" && (
                <button className="profile-upgrade-btn">
                  Upgrade Plan ↑
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
