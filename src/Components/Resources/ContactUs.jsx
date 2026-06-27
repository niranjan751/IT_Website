import { useState } from "react";
import "../../styles/ResourcesShared.css";
import "../../styles/ContactUs.css";
import {
  ResourcesNav,
  ResourcesFooter,
  Reveal,
  ArrowRight,
  ChevronDown,
} from "./shared";

const TOPICS = [
  "Sales Inquiry",
  "Technical Support",
  "Billing & Subscriptions",
  "Partnership",
  "Press & Media",
  "General Question",
];

const CHANNELS = [
  {
    icon: "💼",
    title: "Sales",
    desc: "Talk to our team about plans, pricing, and enterprise solutions tailored to your business.",
    contact: "sales@zoho.com",
    hours: "Mon–Fri, 9 AM – 6 PM (local time)",
    cta: "Schedule a Demo",
  },
  {
    icon: "🛠️",
    title: "Technical Support",
    desc: "Get help with product setup, integrations, troubleshooting, and account configuration.",
    contact: "support@zoho.com",
    hours: "24/7 for paid plans",
    cta: "Open a Ticket",
  },
  {
    icon: "🤝",
    title: "Partners",
    desc: "Questions about the partner program, certifications, deal registration, or co-marketing.",
    contact: "partners@zoho.com",
    hours: "Mon–Fri, 9 AM – 5 PM EST",
    cta: "Partner Portal",
  },
  {
    icon: "📰",
    title: "Press & Media",
    desc: "Media inquiries, press kits, executive interviews, and brand asset requests.",
    contact: "press@zoho.com",
    hours: "Mon–Fri, 10 AM – 4 PM EST",
    cta: "Download Press Kit",
  },
];

const OFFICES = [
  {
    region: "Americas",
    city: "Pleasanton, California",
    country: "United States",
    address: "4141 Hacienda Drive, Pleasanton, CA 94588",
    phone: "+1 (925) 924-9500",
    flag: "🇺🇸",
  },
  {
    region: "Europe",
    city: "Utrecht",
    country: "Netherlands",
    address: "Beneluxlaan 4, 3527 HT Utrecht",
    phone: "+31 30 227 7000",
    flag: "🇳🇱",
  },
  {
    region: "Asia Pacific",
    city: "Chennai",
    country: "India",
    address: "Estancia IT Park, Plot No. 140 & 151, GST Road, Vallancherry Village, Chengalpattu, TN 603202",
    phone: "+91 44 6744 7000",
    flag: "🇮🇳",
  },
  {
    region: "Asia Pacific",
    city: "Sydney",
    country: "Australia",
    address: "Level 25, 100 Miller Street, North Sydney NSW 2060",
    phone: "+61 2 8065 6800",
    flag: "🇦🇺",
  },
];

const FAQ = [
  {
    q: "What are your support hours?",
    a: "Technical support is available 24/7 for all paid Zoho plans. Free plan users can access community forums and self-service help articles anytime. Sales and billing support is available Monday through Friday during local business hours.",
  },
  {
    q: "How quickly will I receive a response?",
    a: "Sales inquiries are typically answered within 4 business hours. Support tickets for paid plans receive a first response within 2 hours for critical issues and 8 hours for standard requests. Enterprise customers with dedicated account managers receive priority handling.",
  },
  {
    q: "Can I schedule a product demo?",
    a: "Yes. Select 'Sales Inquiry' in the contact form or click 'Schedule a Demo' in the Sales channel card. A product specialist will reach out within one business day to arrange a personalized walkthrough of the Zoho apps relevant to your business.",
  },
  {
    q: "Where is my data stored?",
    a: "Zoho operates data centers in the United States, European Union, India, Australia, and China. You choose your data residency region during account setup. Enterprise customers can request specific compliance documentation for their region.",
  },
  {
    q: "How do I report a security vulnerability?",
    a: "Please email security@zoho.com with details of the vulnerability. We operate a responsible disclosure program and acknowledge reports within 24 hours. Do not disclose publicly until we've confirmed a fix.",
  },
];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  topic: "",
  message: "",
};

function validateForm(data) {
  const errors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.topic) errors.topic = "Please select a topic";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

export default function ContactUs() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const [activeOffice, setActiveOffice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmittedEmail(form.email);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="resources-page contact-page" id="contact">
      <ResourcesNav activePage="contact" />

      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <Reveal>
            <span className="resources-section-eyebrow">GET IN TOUCH</span>
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__sub">
              Whether you have a sales question, need technical help, or want to explore a partnership —
              our global team is ready to assist.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="contact-hero__stats">
              <div><strong>24/7</strong><span>Support for paid plans</span></div>
              <div><strong>&lt;4 hrs</strong><span>Avg. sales response</span></div>
              <div><strong>150+</strong><span>Countries served</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-channels">
        <div className="container">
          <Reveal>
            <h2 className="resources-section-title">Choose Your Channel</h2>
            <p className="resources-section-sub">Reach the right team directly for faster resolution.</p>
          </Reveal>
          <div className="contact-channels__grid">
            {CHANNELS.map((ch, i) => (
              <Reveal key={ch.title} className="contact-channel-card" delay={i * 70}>
                <span className="contact-channel-card__icon">{ch.icon}</span>
                <h3>{ch.title}</h3>
                <p>{ch.desc}</p>
                <a href={`mailto:${ch.contact}`} className="contact-channel-card__email">{ch.contact}</a>
                <span className="contact-channel-card__hours">{ch.hours}</span>
                <a href="#contact-form" className="contact-channel-card__cta">{ch.cta} <ArrowRight /></a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form">
        <div className="container contact-form-section__layout">
          <Reveal className="contact-form-wrap">
            <h2 className="resources-section-title">Send Us a Message</h2>
            <p className="contact-form-wrap__sub">Fill out the form and we&apos;ll get back to you within one business day.</p>

            {submitted ? (
              <div className="contact-form-success">
                <div className="contact-form-success__icon">✓</div>
                <h3>Message sent successfully!</h3>
                <p>Thank you for reaching out. A member of our team will respond to <strong>{submittedEmail}</strong> shortly.</p>
                <button className="resources-btn resources-btn--outline" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} className={errors.firstName ? "contact-form__input--error" : ""} placeholder="Jane" />
                    {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} className={errors.lastName ? "contact-form__input--error" : ""} placeholder="Smith" />
                    {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="email">Work Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={errors.email ? "contact-form__input--error" : ""} placeholder="jane@company.com" />
                    {errors.email && <span className="contact-form__error">{errors.email}</span>}
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Your Company Inc." />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="topic">Topic *</label>
                    <select id="topic" name="topic" value={form.topic} onChange={handleChange} className={errors.topic ? "contact-form__input--error" : ""}>
                      <option value="">Select a topic</option>
                      {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.topic && <span className="contact-form__error">{errors.topic}</span>}
                  </div>
                </div>
                <div className="contact-form__field">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={errors.message ? "contact-form__input--error" : ""} placeholder="Tell us how we can help..." />
                  {errors.message && <span className="contact-form__error">{errors.message}</span>}
                </div>
                <button type="submit" className="resources-btn resources-btn--primary">Send Message <ArrowRight /></button>
              </form>
            )}
          </Reveal>

          <aside className="contact-sidebar">
            <Reveal delay={80}>
              <div className="contact-sidebar__card">
                <h3>Live Chat</h3>
                <p>Chat with our support team directly from any Zoho app or the Help Center.</p>
                <a href="#contact" className="resources-btn resources-btn--outline resources-btn--sm">Start Live Chat</a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="contact-sidebar__card">
                <h3>Help Center</h3>
                <p>Search 10,000+ articles, video tutorials, and community answers.</p>
                <ul className="contact-sidebar__links">
                  <li><a href="#contact">Getting Started Guides <ArrowRight /></a></li>
                  <li><a href="#contact">API Documentation <ArrowRight /></a></li>
                  <li><a href="#contact">Community Forum <ArrowRight /></a></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="contact-sidebar__card contact-sidebar__card--dark">
                <h3>Enterprise Sales</h3>
                <p>Need a custom quote for 100+ users? Our enterprise team builds tailored packages.</p>
                <a href="tel:+19259249500" className="contact-sidebar__phone">+1 (925) 924-9500</a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="contact-offices">
        <div className="container">
          <Reveal>
            <h2 className="resources-section-title">Global Offices</h2>
            <p className="resources-section-sub">Zoho has a presence in 150+ countries with regional headquarters worldwide.</p>
          </Reveal>
          <div className="contact-offices__tabs">
            {OFFICES.map((office, i) => (
              <button
                key={office.city}
                className={`contact-offices__tab ${activeOffice === i ? "contact-offices__tab--active" : ""}`}
                onClick={() => setActiveOffice(i)}
              >
                {office.flag} {office.city}
              </button>
            ))}
          </div>
          <Reveal>
            <div className="contact-offices__detail">
              <div className="contact-offices__map" aria-hidden="true">
                <span className="contact-offices__map-pin">{OFFICES[activeOffice].flag}</span>
                <span className="contact-offices__map-label">{OFFICES[activeOffice].city}</span>
              </div>
              <div className="contact-offices__info">
                <span className="contact-offices__region">{OFFICES[activeOffice].region}</span>
                <h3>{OFFICES[activeOffice].city}, {OFFICES[activeOffice].country}</h3>
                <p className="contact-offices__address">{OFFICES[activeOffice].address}</p>
                <a href={`tel:${OFFICES[activeOffice].phone.replace(/\s/g, "")}`} className="contact-offices__phone">{OFFICES[activeOffice].phone}</a>
                <a href="#contact-form" className="resources-btn resources-btn--primary resources-btn--sm">Contact This Office <ArrowRight /></a>
              </div>
            </div>
          </Reveal>
          <div className="contact-offices__grid">
            {OFFICES.map((office, i) => (
              <Reveal key={office.city} delay={i * 60}>
                <div
                  className={`contact-office-card ${activeOffice === i ? "contact-office-card--active" : ""}`}
                  onClick={() => setActiveOffice(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setActiveOffice(i)}
                >
                  <span className="contact-office-card__flag">{office.flag}</span>
                  <h4>{office.city}</h4>
                  <span>{office.country}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="container">
          <Reveal>
            <span className="resources-section-eyebrow">FAQ</span>
            <h2 className="resources-section-title">Before You Write</h2>
            <p className="resources-section-sub">Quick answers to common contact and support questions.</p>
          </Reveal>
          <div className="contact-faq__list">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className={`contact-faq__item ${openFaq === i ? "contact-faq__item--open" : ""}`}>
                  <button className="contact-faq__question" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                    <span>{f.q}</span>
                    <ChevronDown />
                  </button>
                  <div className="contact-faq__answer"><p>{f.a}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ResourcesFooter />
    </div>
  );
}
