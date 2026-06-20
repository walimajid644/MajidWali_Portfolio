import React from "react";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

const Contact = ({ phoneNumber, emailAddress, linkedinUrl }) => {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/60 px-6 md:px-12 text-center relative">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="inline-flex p-4 bg-purple-50 text-purple-700 rounded-2xl mb-2">
          <MdPhoneInTalk size={48} />
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Let's create something real<span className="text-purple-700">.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg">
            Open for technical consultations, project evaluations, and development inquiries worldwide. Available 24/7.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <button 
            onClick={() => window.location.href = `tel:${phoneNumber}`}
            className="flex items-center gap-2 px-6 py-3 bg-purple-700 text-white font-bold rounded-xl shadow-lg hover:bg-purple-800 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MdPhoneInTalk size={18} />
            Call Now
          </button>
          <button 
            onClick={() => window.location.href = `mailto:${emailAddress}`}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MdEmail size={18} />
            Email Me
          </button>
          <button 
            onClick={() => window.open(linkedinUrl, "_blank")}
            className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-300 font-bold rounded-xl shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <FaLinkedinIn size={16} className="text-blue-600" />
            LinkedIn
            <BsArrowUpRight size={14} className="opacity-60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;