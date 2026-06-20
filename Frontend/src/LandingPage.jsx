import React from "react";

// Section Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

// Asset Imports
import image from "../src/assets/Home.png";
import image2 from "../src/assets/Home2.png";
import image3 from "../src/assets/Home3.png";

const LandingPage = () => {
  // Centralized Configuration Constants
  const phoneNumber = "+923224554100";
  const emailAddress = "walimajid.644@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/majid-wali-a5259b229/";
  const projectImages = [image, image2, image3];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden">
      <Navbar phoneNumber={phoneNumber} />
      <Hero phoneNumber={phoneNumber} />
      <About />
      <Services />
      <Clients />
      <Projects images={projectImages} />
      <Experience />
      <Contact 
        phoneNumber={phoneNumber} 
        emailAddress={emailAddress} 
        linkedinUrl={linkedinUrl} 
      />
      
      {/* Minimalist Global Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6 text-center border-t border-slate-900 text-sm tracking-wide">
        <div className="max-w-7xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Majid Wali Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;