import { useState } from "react";
import { Search, Globe, ChevronDown } from "lucide-react";
import Image from "../assets/image.png";

const NAV_ITEMS = [
  { label: "Products", href: "#" },
  {
    label: "Enterprise",
    href: "#enterprise",
  },
  {
    label: "Customers",
    href: "#",
    dropdown: [
      { label: "Customer Stories", href: "#customer-stories" },
      { label: "Affiliate Program", href: "#affiliate-program" },
      { label: "Training & Certification", href: "#training-certification" },
      { label: "User Community", href: "#user-community" },
    ],
  },
  { label: "Partners", href: "#partners" },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blog", href: "#blog" },
      { label: "Announcements", href: "#announcements" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

function Navbar({ onSignIn }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src={Image} alt="Zoho logo" />
        </a>
      </div>

      <ul className="nav-links">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className={item.dropdown ? "has-dropdown" : ""}
            onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href={item.href} className="nav-link-anchor">
              {item.label}
              {item.dropdown && <ChevronDown size={13} className="nav-chevron" />}
            </a>

            {item.dropdown && openMenu === item.label && (
              <div className="nav-dropdown">
                {item.dropdown.map((sub) => (
                  <a key={sub.label} href={sub.href} className="nav-dropdown__item">
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <Search size={20} />
        <Globe size={20} />
        <span>English</span>

        <button className="signin" onClick={() => onSignIn && onSignIn()}>
          Sign In
        </button>

        <button className="signup" onClick={() => onSignIn && onSignIn()}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;