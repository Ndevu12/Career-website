"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative gradient-hero py-10 px-4 sm:px-3 lg:px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-10 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-in"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="absolute bottom-10 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-in"
          style={{ animationDelay: "0.4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center py-10 lg:py-22">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>GEOFINDA Tech Hub Career Portal</span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Launch Your Future in{" "}
          <span className="text-gradient-brand">Technology</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Build real projects. Work in industry-simulated environments. Get
          paired with experienced mentors. Explore 30+ career opportunities —
          academic and professional internships, and job placements across five
          technology domains.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/apply"
            className="px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-2xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/programs"
            className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/40 transition-all duration-200 inline-flex items-center gap-2"
          >
            Explore Opportunities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/20">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-3xl md:text-4xl font-black text-white">
              30+
            </div>
            <div className="text-white/80 text-sm mt-1">Opportunities</div>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-3xl md:text-4xl font-black text-white">5</div>
            <div className="text-white/80 text-sm mt-1">Technology Domains</div>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-3xl md:text-4xl font-black text-white">
              8–14
            </div>
            <div className="text-white/80 text-sm mt-1">Duration (weeks)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
