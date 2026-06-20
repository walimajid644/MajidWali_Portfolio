import React from "react";
import { FaTelegramPlane, FaRegHospital, FaGlobe } from "react-icons/fa";

const Clients = () => {
  const clientList = [
    { label: "H&M", title: "H&M Communications", subtitle: "Web Platform Overhaul", isText: true },
    { icon: <FaGlobe size={24} />, title: "MH Global Solutions", subtitle: "BPO Services Deployment" },
    { icon: <FaRegHospital size={24} />, title: "Wali Eye Care & Clinic", subtitle: "Hospital Branding & Web App" },
    { icon: <FaTelegramPlane size={24} />, title: "Ahmad Saad Automation", subtitle: "Telegram System Scripting" }
  ];

  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200/60 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Clients<span className="text-purple-700">.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">Trusted by expanding businesses and specialized global brands to develop stable systems.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientList.map((client, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-purple-700 text-2xl font-black mb-4 border border-slate-100">
                {client.isText ? client.label : client.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{client.title}</h3>
              <p className="text-xs text-slate-500 mt-1">{client.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;