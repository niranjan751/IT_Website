import { useState, useEffect, useRef } from "react";

export const SUB_NAV = [
  { label: "Blog", href: "#blog", page: "blog" },
  { label: "Announcements", href: "#announcements", page: "announcements" },
  { label: "Newsletter", href: "#newsletter", page: "newsletter" },
  { label: "Contact Us", href: "#contact", page: "contact" },
];

export const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ZohoLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect width="12" height="12" rx="3" fill="#1D3557"/>
    <rect x="16" width="12" height="12" rx="3" fill="#E63946"/>
    <rect y="16" width="12" height="12" rx="3" fill="#E63946"/>
    <rect x="16" y="16" width="12" height="12" rx="3" fill="#1D3557"/>
  </svg>
);

export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`resources-reveal ${visible ? "resources-reveal--visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function ResourcesNav({ activePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="resources-nav">
      <div className="resources-nav__top">
        <a href="/" className="resources-nav__logo"><ZohoLogo /><span>Zoho</span></a>
        <ul className="resources-nav__links">
          <li><a href="/">Products</a></li>
          <li><a href="/">Customers</a></li>
          <li><a href="/">Partners</a></li>
          <li><a href="#resources" className="active">Resources</a></li>
        </ul>
        <div className="resources-nav__actions">
          <a href="#contact" className="resources-nav__signin">Sign In</a>
          <a href="#contact" className="resources-btn resources-btn--primary resources-btn--sm">Get Started</a>
          <button className="resources-nav__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="resources-nav__mobile">
          <a href="/" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="/" onClick={() => setMobileOpen(false)}>Blog</a>
          <a href="/" onClick={() => setMobileOpen(false)}>Announcements</a>
          <a href="/" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </div>
      )}
      <div className="resources-nav__sub">
        <div className="resources-nav__sub-logo"><ZohoLogo size={18} /><span>Resources</span></div>
        <ul className="resources-nav__sub-links">
          {SUB_NAV.map(({ label, href, page }) => (
            <li key={page}><a href={href} className={activePage === page ? "active" : ""}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function ResourcesFooter() {
  return (
    <footer className="resources-footer">
      <div className="container resources-footer__grid">
        <div className="resources-footer__brand">
          <a href="/" className="resources-nav__logo"><ZohoLogo /><span>Zoho</span></a>
          <p>Insights, updates, and support to help your business run smarter on Zoho.</p>
        </div>
        <div className="resources-footer__col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#announcements">Announcements</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#contact">Help Center</a></li>
          </ul>
        </div>
        <div className="resources-footer__col">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Sales</a></li>
            <li><a href="#contact">Technical Support</a></li>
            <li><a href="#contact">Community Forum</a></li>
            <li><a href="mailto:support@zoho.com">support@zoho.com</a></li>
          </ul>
        </div>
        <div className="resources-footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="/">About Zoho</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="#contact">Privacy Policy</a></li>
            <li><a href="#contact">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="resources-footer__bottom"><div className="container">© 2026 Zoho Corporation. All rights reserved.</div></div>
    </footer>
  );
}
