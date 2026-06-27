import { useState } from "react";
import "../styles/SignIn.css";

/* ── Icons ─────────────────────────────────────────────────────── */
function ZohoLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <rect width="12" height="12" rx="3" fill="#1D3557" />
      <rect x="16" width="12" height="12" rx="3" fill="#E63946" />
      <rect y="16" width="12" height="12" rx="3" fill="#E63946" />
      <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557" />
    </svg>
  );
}

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M1 1l16 16M7.4 7.5A2.5 2.5 0 0011.5 11.6M4.2 4.3C2.3 5.6 1 9 1 9s3 6 8 6c1.7 0 3.2-.5 4.5-1.3M7 3.2C7.6 3.1 8.3 3 9 3c5 0 8 6 8 6s-.8 1.8-2.2 3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
    <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
    <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
    <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
    <path d="M9 0C4.03 0 0 4.03 0 9c0 3.98 2.58 7.35 6.16 8.54.45.08.61-.2.61-.44v-1.55c-2.5.54-3.03-1.21-3.03-1.21-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.37 2.1.97 2.61.74.08-.58.31-.97.57-1.19-1.99-.23-4.09-1-4.09-4.44 0-.98.35-1.78.93-2.41-.09-.23-.4-1.14.09-2.37 0 0 .76-.24 2.49.93A8.68 8.68 0 019 4.39c.77 0 1.54.1 2.26.3 1.73-1.17 2.49-.93 2.49-.93.49 1.23.18 2.14.09 2.37.58.63.93 1.43.93 2.41 0 3.45-2.1 4.21-4.1 4.43.32.28.61.83.61 1.67v2.47c0 .24.16.52.62.43A9.003 9.003 0 0018 9c0-4.97-4.03-9-9-9z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#1d3557"/>
    <path d="M5.5 10l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Shared validation ────────────────────────────────────────── */
const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

/* ── Tab: Sign In ─────────────────────────────────────────────── */
function SignInTab({ onDone }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.email) errs.email = "Email is required.";
    else if (!isValidEmail(form.email)) errs.email = "Enter a valid email.";
    if (!form.password) errs.password = "Password is required.";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onDone(form.email); }, 900);
  };

  return (
    <form className="si-form" onSubmit={submit} noValidate>
      <div className="si-field">
        <label className="si-label" htmlFor="signin-email">Email address</label>
        <input id="signin-email" name="email" type="email"
          className={`si-input ${errors.email ? "si-input--error" : ""}`}
          placeholder="you@company.com" value={form.email} onChange={onChange} />
        {errors.email && <span className="si-error">{errors.email}</span>}
      </div>
      <div className="si-field">
        <div className="si-label-row">
          <label className="si-label" htmlFor="signin-password">Password</label>
          <button type="button" className="si-link si-link--sm" onClick={() => alert("A password reset link would be sent to your email.")}>
            Forgot password?
          </button>
        </div>
        <div className="si-input-wrap">
          <input id="signin-password" name="password" type={showPass ? "text" : "password"}
            className={`si-input ${errors.password ? "si-input--error" : ""}`}
            placeholder="••••••••" value={form.password} onChange={onChange} />
          <button type="button" className="si-eye" onClick={() => setShowPass(!showPass)}>
            {showPass ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.password && <span className="si-error">{errors.password}</span>}
      </div>
      <label className="si-checkbox">
        <input type="checkbox" /> Keep me signed in
      </label>
      <button id="signin-submit" type="submit" className={`si-btn si-btn--primary si-btn--full ${loading ? "si-btn--loading" : ""}`} disabled={loading}>
        {loading ? <span className="si-spinner" /> : "Sign In to Zoho"}
      </button>
    </form>
  );
}

/* ── Tab: Log In (SSO / Social) ───────────────────────────────── */
function LogInTab({ onDone }) {
  const [org, setOrg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSocial = (provider) => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onDone(`via ${provider}`); }, 800);
  };

  const handleSso = (e) => {
    e.preventDefault();
    if (!org.trim()) { setError("Please enter your organization domain."); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onDone(org); }, 900);
  };

  return (
    <div className="si-login-tab">
      <p className="si-tab-desc">Log in with your organization SSO or a social account — no password needed.</p>

      <div className="si-socials-lg">
        <button id="login-google" className="si-social-btn-lg" onClick={() => handleSocial("Google")} disabled={loading}>
          <GoogleIcon /> Continue with Google
        </button>
        <button id="login-microsoft" className="si-social-btn-lg" onClick={() => handleSocial("Microsoft")} disabled={loading}>
          <MicrosoftIcon /> Continue with Microsoft
        </button>
        <button id="login-github" className="si-social-btn-lg" onClick={() => handleSocial("GitHub")} disabled={loading}>
          <GithubIcon /> Continue with GitHub
        </button>
      </div>

      <div className="si-divider"><span>or log in with SSO</span></div>

      <form onSubmit={handleSso} className="si-form">
        <div className="si-field">
          <label className="si-label" htmlFor="sso-org">Organization domain</label>
          <div className="si-sso-row">
            <input id="sso-org" type="text" className={`si-input ${error ? "si-input--error" : ""}`}
              placeholder="yourcompany.zoho.com" value={org} onChange={(e) => { setOrg(e.target.value); setError(""); }} />
            <button type="submit" className={`si-btn si-btn--primary ${loading ? "si-btn--loading" : ""}`} disabled={loading}>
              {loading ? <span className="si-spinner" /> : "Go"}
            </button>
          </div>
          {error && <span className="si-error">{error}</span>}
        </div>
      </form>
    </div>
  );
}

/* ── Tab: Get Ready (Free Trial / Onboarding) ─────────────────── */
const STEPS = [
  { id: 1, label: "Your Details" },
  { id: 2, label: "Your Team" },
  { id: 3, label: "Pick a Plan" },
];

const PLANS_LIST = [
  { id: "free", name: "Free", price: "₹0/mo", desc: "Up to 3 users. Great to explore.", icon: "🚀" },
  { id: "standard", name: "Standard", price: "₹1,300/mo", desc: "For growing teams up to 50 users.", icon: "⚡" },
  { id: "enterprise", name: "Enterprise", price: "Custom", desc: "Unlimited users. Dedicated support.", icon: "🏆" },
];

function GetReadyTab({ onDone }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", company: "", size: "", role: "", plan: "free" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (field, val) => {
    setForm((p) => ({ ...p, [field]: val }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!isValidEmail(form.email)) e.email = "Enter a valid email.";
    if (!form.company.trim()) e.company = "Company name is required.";
    return e;
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.size) e.size = "Please select a team size.";
    if (!form.role) e.role = "Please select your role.";
    return e;
  };

  const next = () => {
    if (step === 1) {
      const e = validateStep1();
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    if (step === 2) {
      const e = validateStep2();
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const finish = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onDone(form.email); }, 1000);
  };

  return (
    <div className="si-getready">
      {/* Stepper */}
      <div className="si-stepper">
        {STEPS.map((s, i) => (
          <div key={s.id} className="si-step-wrap">
            <div className={`si-step ${step > s.id ? "si-step--done" : step === s.id ? "si-step--active" : ""}`}>
              {step > s.id ? <CheckIcon /> : <span>{s.id}</span>}
            </div>
            <span className="si-step-label">{s.label}</span>
            {i < STEPS.length - 1 && <div className={`si-step-line ${step > s.id ? "si-step-line--done" : ""}`} />}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="si-step-body">
          <h3 className="si-step-title">Tell us about yourself</h3>
          <div className="si-form">
            <div className="si-row-2">
              <div className="si-field">
                <label className="si-label" htmlFor="gr-name">Full name</label>
                <input id="gr-name" className={`si-input ${errors.name ? "si-input--error" : ""}`}
                  placeholder="Jane Smith" value={form.name} onChange={(e) => set("name", e.target.value)} />
                {errors.name && <span className="si-error">{errors.name}</span>}
              </div>
              <div className="si-field">
                <label className="si-label" htmlFor="gr-company">Company</label>
                <input id="gr-company" className={`si-input ${errors.company ? "si-input--error" : ""}`}
                  placeholder="Acme Corp" value={form.company} onChange={(e) => set("company", e.target.value)} />
                {errors.company && <span className="si-error">{errors.company}</span>}
              </div>
            </div>
            <div className="si-field">
              <label className="si-label" htmlFor="gr-email">Work email</label>
              <input id="gr-email" type="email" className={`si-input ${errors.email ? "si-input--error" : ""}`}
                placeholder="you@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
              {errors.email && <span className="si-error">{errors.email}</span>}
            </div>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="si-step-body">
          <h3 className="si-step-title">About your team</h3>
          <div className="si-form">
            <div className="si-field">
              <label className="si-label" htmlFor="gr-size">Team size</label>
              <select id="gr-size" className={`si-input si-select ${errors.size ? "si-input--error" : ""}`}
                value={form.size} onChange={(e) => set("size", e.target.value)}>
                <option value="">Select team size…</option>
                <option>Just me</option>
                <option>2–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>201–1,000 employees</option>
                <option>1,000+ employees</option>
              </select>
              {errors.size && <span className="si-error">{errors.size}</span>}
            </div>
            <div className="si-field">
              <label className="si-label" htmlFor="gr-role">Your role</label>
              <select id="gr-role" className={`si-input si-select ${errors.role ? "si-input--error" : ""}`}
                value={form.role} onChange={(e) => set("role", e.target.value)}>
                <option value="">Select your role…</option>
                <option>Founder / CEO</option>
                <option>Sales Leader</option>
                <option>IT / Admin</option>
                <option>Finance</option>
                <option>HR</option>
                <option>Operations</option>
                <option>Marketing</option>
                <option>Other</option>
              </select>
              {errors.role && <span className="si-error">{errors.role}</span>}
            </div>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="si-step-body">
          <h3 className="si-step-title">Choose your plan</h3>
          <div className="si-plans">
            {PLANS_LIST.map((p) => (
              <button key={p.id} type="button"
                className={`si-plan-card ${form.plan === p.id ? "si-plan-card--active" : ""}`}
                onClick={() => set("plan", p.id)}>
                <span className="si-plan-icon">{p.icon}</span>
                <span className="si-plan-name">{p.name}</span>
                <span className="si-plan-price">{p.price}</span>
                <span className="si-plan-desc">{p.desc}</span>
                {form.plan === p.id && <span className="si-plan-check">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Nav buttons */}
      <div className="si-step-actions">
        {step > 1 && (
          <button type="button" className="si-btn si-btn--ghost" onClick={() => setStep((s) => s - 1)}>
            ← Back
          </button>
        )}
        {step < 3 ? (
          <button type="button" className="si-btn si-btn--primary si-btn--full" onClick={next}>
            Continue →
          </button>
        ) : (
          <button type="button" id="gr-finish"
            className={`si-btn si-btn--primary si-btn--full ${loading ? "si-btn--loading" : ""}`}
            onClick={finish} disabled={loading}>
            {loading ? <span className="si-spinner" /> : "🚀 Get Started Free"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────── */
const TABS = [
  { id: "signin",  label: "Sign In",   emoji: "👤" },
  { id: "login",   label: "Log In",    emoji: "🔐" },
  { id: "getready",label: "Get Ready", emoji: "🚀" },
];

export default function SignIn({ onNavigate }) {
  const [tab, setTab] = useState("signin");
  const [doneEmail, setDoneEmail] = useState(null);

  const handleDone = (email) => setDoneEmail(email);

  const handleBack = () => {
    setDoneEmail(null);
    if (onNavigate) onNavigate("");
  };

  if (doneEmail) {
    return (
      <div className="si-root si-root--center">
        <div className="si-success-page" id="si-success-state">
          <div className="si-success-page__logo">
            <ZohoLogo size={44} /><span>Zoho</span>
          </div>
          <div className="si-success-page__icon">🎉</div>
          <h1>You're all set!</h1>
          <p>Welcome to Zoho. You're signed in as <strong>{doneEmail}</strong>.</p>
          <p className="si-success-page__sub">Redirecting you to your dashboard…</p>
          <button className="si-btn si-btn--primary" onClick={handleBack}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="si-root">
      {/* ── LEFT BRAND PANEL ── */}
      <div className="si-left">
        <div className="si-left__content">
          <a href="#" onClick={handleBack} className="si-left__logo">
            <ZohoLogo size={38} /><span>Zoho</span>
          </a>

          <div className="si-left__tagline">One platform.<br />Every business need.</div>

          <p className="si-left__body">
            Join millions of businesses running smarter on Zoho — 55+ apps,
            one login, zero complexity.
          </p>

          <div className="si-left__features">
            {["Free for up to 3 users", "No credit card required", "Cancel anytime", "24/7 global support"].map((f) => (
              <div className="si-left__feat" key={f}>
                <span className="si-left__feat-check">✓</span>{f}
              </div>
            ))}
          </div>

          <div className="si-left__stats">
            <div><strong>120M+</strong><span>Users</span></div>
            <div><strong>150+</strong><span>Countries</span></div>
            <div><strong>55+</strong><span>Apps</span></div>
          </div>

          <div className="si-left__testimonial">
            <p>"Zoho transformed how we run our entire business. We can't imagine going back."</p>
            <span>— Sarah K., COO at Violet</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT FORM PANEL ── */}
      <div className="si-right">
        <div className="si-card">
          {/* Tab Switcher */}
          <div className="si-tabs">
            {TABS.map((t) => (
              <button key={t.id} id={`tab-${t.id}`}
                className={`si-tab ${tab === t.id ? "si-tab--active" : ""}`}
                onClick={() => { setTab(t.id); setDoneEmail(null); }}>
                <span className="si-tab__emoji">{t.emoji}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Tab headings */}
          <div className="si-card__header">
            {tab === "signin"   && <><h1 className="si-card__title">Welcome back</h1><p className="si-card__sub">Sign in with your Zoho account credentials.</p></>}
            {tab === "login"    && <><h1 className="si-card__title">Log in instantly</h1><p className="si-card__sub">Use SSO or a social account — no password required.</p></>}
            {tab === "getready" && <><h1 className="si-card__title">Get ready 🚀</h1><p className="si-card__sub">Set up your free Zoho account in 3 quick steps.</p></>}
          </div>

          {/* Tab content */}
          {tab === "signin"   && <SignInTab   onDone={handleDone} />}
          {tab === "login"    && <LogInTab    onDone={handleDone} />}
          {tab === "getready" && <GetReadyTab onDone={handleDone} />}

          {/* Footer helper */}
          {tab !== "getready" && (
            <p className="si-footer-hint">
              New to Zoho?{" "}
              <button className="si-link" onClick={() => setTab("getready")}>
                Get started free →
              </button>
            </p>
          )}
          {tab === "getready" && (
            <p className="si-footer-hint">
              Already have an account?{" "}
              <button className="si-link" onClick={() => setTab("signin")}>
                Sign in →
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
