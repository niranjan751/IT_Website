import { useState, useEffect } from "react";
import Navbar from "../homeComp/Navbar";
import Hero from "../homeComp/Hero";
import TrustedCompanies from "../homeComp/TrustedCompanies";
import "../styles/home.css";

// Pages
import Partners from "../Components/Partners/Partners";
import CustomerStories from "../Components/Customers/customerStories";
import AffiliateProgram from "../Components/Customers/AffiliateProgram";
import TrainingAndCertification from "../Components/Customers/TrainingAndCertification";
import UserCommunity from "../Components/Customers/userCommunity";
import Enterprise from "../Components/Enterprise/EnterPrise";
import Blog from "../Components/Resources/Blog";
import AnnouncementsHub from "../Components/Resources/AnnouncementsHub";
import ContactUs from "../Components/Resources/ContactUs";
import NewsLetter from "../Components/Resources/newsLetter";
import SignIn from "../Components/SignIn";
import Profile from "../Components/Profile";
import { useAuth } from "../context/AuthContext";

// Map URL hash → component
const PAGE_MAP = {
  "partners":               <Partners />,
  "customer-stories":       <CustomerStories />,
  "affiliate-program":      <AffiliateProgram />,
  "training-certification": <TrainingAndCertification />,
  "user-community":         <UserCommunity />,
  "enterprise":             <Enterprise />,
  "blog":                   <Blog />,
  "announcements":          <AnnouncementsHub />,
  "contact":                <ContactUs />,
  "newsletter":             <NewsLetter />,
};

function getHash() {
  return window.location.hash.replace("#", "").split("?")[0].trim();
}

function navigate(hash) {
  window.location.hash = hash || "";
}

function Home() {
  const [page, setPage] = useState(getHash());
  const { user } = useAuth();

  useEffect(() => {
    const onHashChange = () => setPage(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Helper to change page
  const goTo = (hash) => {
    navigate(hash);
    setPage(hash || "");
  };

  // ── Protected Route: Profile ────────────────────────────────────
  if (page === "profile") {
    if (!user) {
      // Not logged in → redirect to signin
      goTo("signin");
      return null;
    }
    return <Profile onNavigate={goTo} />;
  }

  // ── Sign-in (full-screen) ───────────────────────────────────────
  if (page === "signin") {
    // If already logged in, go directly to profile
    if (user) {
      goTo("profile");
      return null;
    }
    return (
      <SignIn
        onNavigate={goTo}
        onProfileRedirect={() => goTo("profile")}
      />
    );
  }

  // ── Mapped sub-pages ────────────────────────────────────────────
  if (PAGE_MAP[page]) {
    return PAGE_MAP[page];
  }

  // ── Default: Home landing page ──────────────────────────────────
  return (
    <>
      <Navbar
        onSignIn={() => goTo("signin")}
        onProfile={() => goTo("profile")}
        isLoggedIn={!!user}
        userName={user?.name}
      />
      <Hero />
      <TrustedCompanies />
    </>
  );
}

export default Home;