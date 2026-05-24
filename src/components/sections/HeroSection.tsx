'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, GraduationCap, Award, BookOpen, Compass, MapPin, Landmark } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/universities?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Educational floating badges definitions
  const badges = [
    { icon: <GraduationCap className="w-5 h-5" />, text: "780+ Universities", position: "top-[15%] left-[8%] md:left-[12%]" },
    { icon: <Award className="w-5 h-5" />, text: "Fully-Funded MEXT", position: "top-[45%] right-[5%] md:right-[10%]" },
    { icon: <BookOpen className="w-5 h-5" />, text: "English Curriculums", position: "bottom-[20%] left-[5%] md:left-[15%]" },
    { icon: <Compass className="w-5 h-5" />, text: "Student Visa Support", position: "bottom-[35%] right-[8%] md:right-[15%]" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream/30 to-white pt-20 pb-24 md:pt-28 md:pb-32 border-b border-cream">
      
      {/* Wave pattern background details */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10 pointer-events-none"></div>
      
      {/* Large logo circular highlight */}
      <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-2xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Floating Animated Badges (Hidden on mobile) */}
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className={`absolute hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-cream/50 animate-float text-charcoal font-bold text-xs font-sans ${badge.position}`}
            style={{ animationDelay: `${idx * 0.8}s` }}
          >
            <span className="text-primary">{badge.icon}</span>
            <span>{badge.text}</span>
          </div>
        ))}

        {/* Parent Branding Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full border border-cream shadow-sm mb-6 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
          <span className="text-[10px] sm:text-xs font-bold font-sans uppercase tracking-widest text-primary-dark">
            INARI Japanese Language Hub
          </span>
        </div>

        {/* Headlines */}
        <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl md:text-6xl font-black font-display text-charcoal tracking-tight leading-[1.1] mb-6">
          Your Gateway to <br className="sm:hidden" />
          <span className="text-primary bg-clip-text relative">
            Study in Japan
            {/* Soft underline wave SVG */}
            <svg className="absolute left-0 bottom-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0,5 C30,10 70,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted font-medium leading-relaxed mb-10 px-2">
          Explore top Japanese universities, discover fully-funded scholarships, navigate admission processes, and receive expert study-in-Japan counseling in one complete space.
        </p>

        {/* Comprehensive Integrated Search Form */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="max-w-2xl mx-auto bg-white p-2 rounded-3xl shadow-xl border border-cream flex flex-col sm:flex-row items-center gap-2 mb-10"
        >
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search universities, scholarships, or fields of study..."
              className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm md:text-base text-charcoal font-semibold placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 text-sm md:text-base"
          >
            Search Directory
          </button>
        </form>

        {/* Grid of Main Call-To-Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <Link
            href="/universities"
            className="w-full sm:w-auto px-6 py-3 bg-charcoal hover:bg-charcoal/90 text-white font-bold rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>Explore Universities</span>
          </Link>
          
          <Link
            href="/scholarships"
            className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <Award className="w-4 h-4" />
            <span>Find Scholarships</span>
          </Link>
          
          <Link
            href="/study-guide"
            className="w-full sm:w-auto px-6 py-3 bg-cream/70 hover:bg-cream border border-beige text-primary-dark font-bold rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Guide</span>
          </Link>
        </div>

        {/* Small Visual Mini-Metrics (for trust-building) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-cream/80 pt-10">
          {[
            { label: "National & Private", desc: "Top Institutions", icon: <Landmark className="text-primary w-5 h-5" /> },
            { label: "Prefectures", desc: "Across All of Japan", icon: <MapPin className="text-primary w-5 h-5" /> },
            { label: "EJU & JLPT", desc: "Exam Timelines", icon: <BookOpen className="text-primary w-5 h-5" /> },
            { label: "Free Support", desc: "By INARI Experts", icon: <GraduationCap className="text-primary w-5 h-5" /> },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal leading-none mb-1">{item.label}</p>
                <p className="text-[10px] text-muted font-medium leading-none">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default HeroSection;
