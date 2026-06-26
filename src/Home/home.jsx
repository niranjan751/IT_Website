import Navbar from "../homeComp/Navbar";
import Hero from "../homeComp/Hero";
import TrustedCompanies from "../homeComp/TrustedCompanies";
import "../styles/home.css"; 
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
    </>
  );
}

export default Home;