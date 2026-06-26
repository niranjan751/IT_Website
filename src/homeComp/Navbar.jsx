import { Search, Globe } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Zoho-logo.png"
          alt="logo"
        />
      </div>

      <ul className="nav-links">
        <li>Products</li>
        <li>Enterprise</li>
        <li>Customers</li>
        <li>Partners</li>
        <li>Resources</li>
      </ul>

      <div className="nav-right">
        <Search size={20} />
        <Globe size={20} />
        <span>English</span>

        <button className="signin">
          Sign In
        </button>

        <button className="signup">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;