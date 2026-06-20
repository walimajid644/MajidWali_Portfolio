import React from "react";
import { BsPersonCheck } from "react-icons/bs";

const About = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-700 rounded-2xl rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
              <BsPersonCheck size={120} className="text-purple-700" />
            </div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-4">
          <div className="space-y-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              A Bit About Me<span className="text-purple-700">.</span>
            </h2>
            <p className="text-sm font-semibold tracking-wide uppercase text-purple-700">(& My Code)</p>
          </div>
          <div className="text-slate-600 space-y-4 leading-relaxed text-base md:text-lg">
            <p>
              Hi, I’m <strong className="text-slate-900 font-semibold">Majid Wali</strong> — a passionate MERN Stack Developer dedicated to building dynamic, highly-responsive, and client-centric web applications.
            </p>
            <p>
              I thrive on translating complex human concepts into pixel-perfect frontend layouts and secure backend logic, continually refining my toolkit to align with industry benchmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;