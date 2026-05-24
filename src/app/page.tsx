import React from 'react';
import Link from 'next/link';
import { GraduationCap, Award, BookOpen, ChevronRight, HelpCircle, Heart, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeader from '@/components/ui/SectionHeader';
import UniversityCard from '@/components/cards/UniversityCard';
import ScholarshipCard from '@/components/cards/ScholarshipCard';
import StepGuideCard from '@/components/cards/StepGuideCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';

import { getUniversities, getScholarships } from '@/lib/dynamodb';

export default async function Home() {
  // Fetch initial featured items directly from server layer
  const universitiesList = await getUniversities();
  const scholarshipsList = await getScholarships();

  // Pick top 3 for dashboard display
  const featuredUnis = universitiesList.slice(0, 3);
  const featuredSchols = scholarshipsList.slice(0, 3);

  const steps = [
    {
      stepNumber: "01",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Define Your Goal",
      description: "Decide whether you want to enroll in an English-taught degree program or study Japanese intensely at a language school first."
    },
    {
      stepNumber: "02",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Find Your Program",
      description: "Search and filter through top Japanese universities offering courses in your chosen field of study."
    },
    {
      stepNumber: "03",
      icon: <Award className="w-6 h-6" />,
      title: "Secure Funding",
      description: "Check eligibility for fully-funded government programs like MEXT or partial university tuition reductions."
    },
    {
      stepNumber: "04",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Visa & Enrollment",
      description: "Submit certified academic documents, pass necessary university interviews, and apply for your Student Visa."
    }
  ];

  const testimonials = [
    {
      name: "Thandar Aung",
      role: "Waseda University (SILS) - Class of 2026",
      origin: "Myanmar",
      quote: "INARI Japanese Language Hub guided me through the entire Waseda admission process. Getting accepted into the School of International Liberal Studies with their support changed my life!"
    },
    {
      name: "Aung Kaung Myat",
      role: "Ritsumeikan APU (APM) - Recipient of 100% Tuition Waiver",
      origin: "Myanmar",
      quote: "Securing the APU Tuition Reduction Scholarship was my biggest hurdle. The team helped me write a stellar scholarship request essay and prepared me for the video interview perfectly."
    },
    {
      name: "May Zin Phyo",
      role: "The University of Tokyo (PEAK) - MEXT Scholar",
      origin: "Myanmar",
      quote: "Winning the MEXT Embassy Recommendation scholarship requires meticulous planning. The mock exam guidelines and research proposal advice I received from INARI was invaluable."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero landing CTA zone */}
      <HeroSection />

      {/* Trust factors showcase */}
      <section className="py-12 bg-cream/30 border-b border-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sincere & Expert Advice", desc: "No complex administrative fees. We focus strictly on finding the best academic match for your aspirations.", icon: <Heart className="w-6 h-6 text-primary" /> },
              { title: "Branded Experience", desc: "Built as a professional hub for students, ensuring absolute trust, transparency, and accuracy of guides.", icon: <Sparkles className="w-6 h-6 text-primary" /> },
              { title: "Direct Path to Admissions", desc: "Access the same templates, advice, and credentials used by students who won top tier scholarships.", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
            ].map((trust, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white rounded-3xl border border-cream/50 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-cream flex items-center justify-center shrink-0">
                  {trust.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal mb-1">{trust.title}</h3>
                  <p className="text-xs text-muted leading-relaxed font-semibold">{trust.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities segment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <SectionHeader
              badge="Top Institutions"
              title="Featured Japanese Universities"
              subtitle="Discover top-tier national giants and prominent private colleges with robust English degree programs."
              className="mb-0 max-w-2xl"
            />
            
            <Link
              href="/universities"
              className="inline-flex items-center gap-1.5 px-5 py-3 bg-cream hover:bg-beige text-primary-dark font-bold rounded-2xl text-xs transition-all duration-200 shadow-sm shrink-0"
            >
              <span>Explore All Universities</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredUnis.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scholarships segment */}
      <section className="py-20 bg-cream/15 border-y border-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <SectionHeader
              badge="Funding Options"
              title="Top Scholarships for Japan"
              subtitle="Fund your educational journey with fully-funded ministry awards or generous tuition waiver grants."
              className="mb-0 max-w-2xl"
            />

            <Link
              href="/scholarships"
              className="inline-flex items-center gap-1.5 px-5 py-3 bg-cream hover:bg-beige text-primary-dark font-bold rounded-2xl text-xs transition-all duration-200 shadow-sm shrink-0"
            >
              <span>Find More Scholarships</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSchols.map((schol) => (
              <ScholarshipCard key={schol.id} scholarship={schol} />
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Timeline guidance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Process Checklist"
            title="How to Study in Japan"
            subtitle="Entering a Japanese college doesn't have to be confusing. Follow our structured timeline to navigate your admissions journey."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
            {steps.map((step) => (
              <StepGuideCard 
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/study-guide"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal hover:bg-charcoal/90 text-white font-bold rounded-2xl text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>View Comprehensive Study Guide</span>
              <ChevronRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Testimonials */}
      <section className="py-20 bg-cream/15 border-y border-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Testimonials"
            title="Student Success Stories"
            subtitle="Meet international students who successfully navigated their Japanese educational paths with the guidance of INARI."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {testimonials.map((test, idx) => (
              <TestimonialCard 
                key={idx}
                name={test.name}
                role={test.role}
                origin={test.origin}
                quote={test.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Get instant, clear answers to common questions about admissions, language filters, and scholarship opportunities in Japan."
            center
          />

          <FAQAccordion />
        </div>
      </section>

      {/* Glowing Bottom CTA Section */}
      <CTASection />

    </div>
  );
}
