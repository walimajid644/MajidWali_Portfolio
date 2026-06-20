import React from "react";
import { Button } from "antd";

const Hero = ({ phoneNumber }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[85vh]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none z-0 animate-pulse duration-[8000ms]" />
      
      <div className="relative z-10 max-w-4xl space-y-6">
        <p className="text-purple-700 font-semibold tracking-wider uppercase text-sm md:text-base tracking-[0.2em]">
          Available For Freelance & Full-Time Roles
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          I Build Stuff that <br />
          <span className="bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent relative">
            actually works!
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
          Code, bugs, and late-night coffee keep it all running. I turn complex problems into clean, high-performance web applications.
        </p>
        <div className="pt-6">
          <Button
            onClick={() => window.location.href = `tel:${phoneNumber}`}
            className="!bg-slate-900 hover:!bg-purple-700 !text-white !font-medium !h-12 !px-8 !text-base !border-none !rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            type="primary"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;