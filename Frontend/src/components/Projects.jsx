import React from "react";

const Projects = ({ images }) => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          My Projects<span className="text-purple-700">.</span>
        </h2>
        <p className="text-slate-500 max-w-2xl">A curated suite of modern, user-focused production applications engineered with performance and reliability.</p>
      </div>

      <div className="space-y-20">
        {/* Project 1 */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-full border border-purple-100">MERN Stack Application</span>
            <h3 className="text-3xl font-bold text-slate-950">Blood Donation Platform</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              A localized health portal designed to bridge gaps between blood donors and immediate recipients. Includes advanced geolocation matching indexes, profile verifications, and an analytical admin monitor suite.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-3">
            {images.map((imgSrc, index) => (
              <div key={index} className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
                <div className="overflow-hidden rounded-lg bg-slate-50 aspect-[4/3]">
                  <img src={imgSrc} alt="Application screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project 2 */}
        <div className="grid md:grid-cols-12 gap-8 items-center pt-8 border-t border-slate-200/60">
          <div className="md:col-span-5 space-y-4 md:order-2">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full border border-indigo-100">Full Stack Ecosystem</span>
            <h3 className="text-3xl font-bold text-slate-950">Enterprise Chat Application</h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              A team collaboration framework constructed using Laravel, Vue.js, and MongoDB. Structured to maintain multi-tenant workspaces, real-time channels messaging synchronization, and strict profile access keys.
            </p>
          </div>
          <div className="md:col-span-7 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center min-h-[220px] md:order-1 text-slate-400 font-medium">
            Enterprise Chat Workspace Mockup
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;