import React from 'react';
import Link from 'react';
import NextLink from 'next/link';
import { Mail, GraduationCap } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white rounded-3xl py-12 px-6 sm:px-12 md:py-16 shadow-xl max-w-7xl mx-auto my-12">
      
      {/* Background visual seigaiha wave overlay */}
      <div className="absolute inset-0 seigaiha pointer-events-none"></div>
      
      {/* Visual glowing bubbles */}
      <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-[-50%] left-[-10%] w-[250px] h-[250px] rounded-full bg-white/5 blur-xl pointer-events-none"></div>

      <div className="relative text-center max-w-3xl mx-auto z-10">
        
        {/* Header Badge */}
        <span className="inline-block px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase mb-4 shadow-sm font-sans">
          Ready to Start Your Journey?
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight leading-tight mb-4">
          Empower Your Study in Japan <br className="hidden sm:inline" /> 
          Pathways with Expert Assistance
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-cream/90 font-semibold leading-relaxed mb-8 max-w-2xl mx-auto">
          Not sure where to begin? Our professional team at INARI Japanese Language Hub is ready to help you map out your academic goals, prepare documentation, and secure admissions.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NextLink
            href="/contact"
            className="w-full sm:w-auto px-7 py-3 bg-white hover:bg-cream text-primary-dark font-black rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>Request Free Counseling</span>
          </NextLink>

          <NextLink
            href="/universities"
            className="w-full sm:w-auto px-7 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white font-black rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Search Universities</span>
          </NextLink>
        </div>

      </div>
    </section>
  );
};
export default CTASection;
