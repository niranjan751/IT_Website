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

// Map URL hash → component
const PAGE_MAP = {
  "partners":              <Partners />,
  "customer-stories":      <CustomerStories />,
  "affiliate-program":     <AffiliateProgram />,
  "training-certification":<TrainingAndCertification />,
  "user-community":        <UserCommunity />,
  "enterprise":            <Enterprise />,
  "blog":                  <Blog />,
  "announcements":         <AnnouncementsHub />,
  "contact":               <ContactUs />,
  "newsletter":            <NewsLetter />,
};

function getHash() {
  return window.location.hash.replace("#", "").split("?")[0].trim();
}

function Home() {
  const [page, setPage] = useState(getHash());

  useEffect(() => {
    const onHashChange = () => setPage(getHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Sign-in is a special full-screen page
  if (page === "signin") {
    return (
      <SignIn onNavigate={(hash) => {
        window.location.hash = hash || "";
        setPage(hash || "");
      }} />
    );
  }

  // Mapped subpages — render them directly (they include their own nav/footer)
  if (PAGE_MAP[page]) {
    return PAGE_MAP[page];
  }

  // Default: Home landing page
  return (
    <>
      <Navbar onSignIn={() => { window.location.hash = "signin"; setPage("signin"); }} />
      <Hero />
      <TrustedCompanies />
    </>
  );
}

export default Home;