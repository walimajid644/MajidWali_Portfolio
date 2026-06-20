import React, { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { Button } from "antd";

const Navbar = ({ phoneNumber }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
      isScrolled ? "bg-white/75 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2.5 bg-purple-50 text-purple-700 rounded-xl group-hover:bg-purple-700 group-hover:text-white transition-all duration-300 shadow-sm">
            <FaLaptopCode size={26} />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r select-none from-slate-900 to-purple-800 bg-clip-text text-transparent">
            Majid Wali
          </span>
        </div>
        <Button
          onClick={() => window.location.href = `tel:${phoneNumber}`}
          className="!bg-purple-700 hover:!bg-purple-800 !text-white !font-medium !h-10 !px-6 !border-none !rounded-xl shadow-md hover:shadow-purple-200 hover:-translate-y-0.5 transition-all duration-200"
          type="primary"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;