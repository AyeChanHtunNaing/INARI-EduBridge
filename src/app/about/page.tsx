import React from 'react';
import { ShieldCheck, Heart, Sparkles, Landmark, MapPin, Award, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CTASection from '@/components/sections/CTASection';

export default function AboutPage() {
  const coreValues = [
    {
      title: "Absolute Trust & Accuracy",
      desc: "We curate details directly from official Japanese university registries, JASSO, and Ministry guidelines. Accuracy is our absolute benchmark.",
      icon: <ShieldCheck className="w-5 h-5 text-primary" />
    },
    {
      title: "Student-Centered Guidance",
      desc: "Applying abroad is emotionally demanding. We offer honest, empathetic pathways without listing misleading administrative fees or forced tracks.",
      icon: <Heart className="w-5 h-5 text-primary" />
    },
    {
      title: "Accessibility for All",
      desc: "Providing a completely unified database of both English-medium and Japanese-medium programs, helping every student find their niche.",
      icon: <Sparkles className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'About Us' }]} className="mb-6" />

      {/* Page Header */}
      <SectionHeader
        badge="Who We Are"
        title="About INARI EduBridge"
        subtitle="Bridging international students with top-tier academic excellence in Japan. Developed as an all-in-one information ecosystem on behalf of the INARI Japanese Language Hub."
      />

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        
        {/* Left Column Content */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold font-display text-charcoal">
            Our Vision: Empowering International Scholars
          </h2>
          <div className="text-xs sm:text-sm text-muted leading-relaxed font-semibold space-y-4">
            <p>
              <strong>INARI Japanese Language Hub</strong> has established itself as a leading counseling academy and language prep school helping students successfully relocate and thrive in Japan.
            </p>
            <p>
              Recognizing that students struggle to find unified, transparent resources detailing prefecture options, scholarship deadlines, and admissions criteria across diverse university databases, we developed <strong>INARI EduBridge</strong>.
            </p>
            <p>
              This digital ecosystem bridges these gaps, acting as an easy-to-use search directory and chronological checklist to eliminate administrative stress, allowing scholars to focus strictly on their academic goals and language prep.
            </p>
          </div>
        </div>

        {/* Right Column Features Panel */}
        <div className="p-8 bg-cream/15 border border-cream rounded-3xl space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>

          <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream">
            Platform Highlights
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-muted font-sans">
            <div className="flex items-center gap-2.5">
              <Landmark className="w-5 h-5 text-primary shrink-0" />
              <span>Verified School Directory</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-primary shrink-0" />
              <span>Gov & Foundation Grants</span>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-primary shrink-0" />
              <span>Exams Guidelines (EJU/JLPT)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>Prefecture Area Filters</span>
            </div>
          </div>
        </div>

      </div>

      {/* Core Values Section */}
      <section className="py-12 border-t border-cream/50 mb-12">
        <h2 className="text-center text-xl font-bold font-display text-charcoal mb-10">
          Our Core Founding Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="p-6 bg-white border border-cream rounded-3xl hover:border-primary/20 hover:shadow-md transition-all duration-300 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center shrink-0 shadow-inner">
                {val.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-bold text-charcoal">{val.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-semibold">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Glowing Bottom CTA Section */}
      <CTASection />

    </div>
  );
}
