import React from "react";

const Experience = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-slate-100/50 border-t border-slate-200/60 max-w-7xl mx-auto rounded-3xl mb-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 px-4">
        Experience Ledger<span className="text-purple-700">.</span>
      </h2>
      <div className="border border-slate-200 bg-white p-8 md:p-12 rounded-3xl shadow-sm space-y-6 relative overflow-hidden mx-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-slate-100 pb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Programmers Force</h3>
            <p className="text-purple-700 font-semibold text-sm">Software Engineer</p>
          </div>
          <span className="px-4 py-1 bg-slate-100 text-slate-700 rounded-full font-bold text-xs tracking-wider">Present</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-slate-600 text-base leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm tracking-wide uppercase text-purple-800">Application Architecture</h4>
            <p>Designing, developing, and maintaining scalable full-stack web applications. Focusing on high-performance algorithms, modular code structures, and optimization across both frontend and backend systems.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm tracking-wide uppercase text-purple-800">System Integration</h4>
            <p>Collaborating with cross-functional technical teams to integrate secure database frameworks, build robust API architectures, and implement modern performance optimization strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;