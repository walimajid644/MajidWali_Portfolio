import React from "react";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";

const Services = () => {
  const items = [
    {
      icon: <FaCode size={22} />,
      title: "Frontend Engineering",
      desc: "Crafting fluid, high-performance React architectures packed with modular components, smooth layouts, and tailored utility-first designs."
    },
    {
      icon: <FaServer size={22} />,
      title: "Backend & Database",
      desc: "Building secure RESTful APIs, complex data schemas with MongoDB, stateful session architectures, and robust server pipelines via Node.js."
    },
    {
      icon: <FaLayerGroup size={22} />,
      title: "UI/UX Optimization",
      desc: "Eliminating design clutter. Structuring applications around purposeful modern grids, seamless accessibility standards, and tactile responses."
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          What I Offer<span className="text-purple-700">.</span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">Engineered for absolute performance, intuitive UX, and clean architecture.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-6 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;