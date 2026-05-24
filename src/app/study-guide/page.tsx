import React from 'react';
import { 
  GraduationCap, BookOpen, Compass, ShieldCheck, Award, FileText, 
  MapPin, Heart, HelpCircle, CheckCircle, Calendar, BookCheck, ClipboardList, Send, Plane 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Breadcrumb from '@/components/ui/Breadcrumb';
import StepGuideCard from '@/components/cards/StepGuideCard';
import CTASection from '@/components/sections/CTASection';

export default function StudyGuidePage() {
  const timelineSteps = [
    {
      stepNumber: "01",
      icon: <Compass className="w-6 h-6" />,
      title: "Choose Your Study Goal",
      description: "Decide whether you want to enroll in an English-taught degree program directly (E-Track) or study Japanese intensely at a language school first to join a standard Japanese-taught course."
    },
    {
      stepNumber: "02",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Search Universities and Programs",
      description: "Explore top national and private institutions in our database. Identify courses matching your academic background and professional aspirations."
    },
    {
      stepNumber: "03",
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Check Admission Requirements",
      description: "Review GPA standards, necessary standardized testing (SAT/ACT/IB/EJU), English proficiency benchmarks (IELTS/TOEFL), and document submission deadlines."
    },
    {
      stepNumber: "04",
      icon: <FileText className="w-6 h-6" />,
      title: "Prepare Your Documents",
      description: "Gather high school transcripts, graduation cards, letters of recommendation, bank balance statements, and draft your study and research plans."
    },
    {
      stepNumber: "05",
      icon: <Award className="w-6 h-6" />,
      title: "Apply for Scholarships",
      description: "Submit application materials for fully-funded MEXT awards, JASSO honors stipends, or university-specific tuition reduction schemes (rolling timelines)."
    },
    {
      stepNumber: "06",
      icon: <Send className="w-6 h-6" />,
      title: "Submit Admissions Applications",
      description: "Upload your profiles through university web portals, mail physically certified paper documents to Japan, and pay standard application screening fees."
    },
    {
      stepNumber: "07",
      icon: <BookCheck className="w-6 h-6" />,
      title: "Prepare for Interviews and Entrance Exams",
      description: "Practice university-specific mock questions, complete web writing tasks, or sit for standard national entrance exams like the EJU if required."
    },
    {
      stepNumber: "08",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Apply for a Student Visa",
      description: "Once accepted, the university will request a Certificate of Eligibility (COE) from Japanese Immigration. Apply for your visa at the nearest Japanese Embassy using this COE."
    },
    {
      stepNumber: "09",
      icon: <Plane className="w-6 h-6" />,
      title: "Prepare for Arrival in Japan",
      description: "Book economy airfares, secure student dormitory or private shared apartment placements, register for health insurance, and attend arrival orientation events."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Study Guide' }]} className="mb-6" />

      {/* Page Header */}
      <SectionHeader
        badge="Step-by-step Pathway"
        title="Your Guide to Studying in Japan"
        subtitle="Embarking on international studies requires careful planning. Follow our comprehensive milestone checklist and expert exam breakdowns to successfully join your dream campus."
      />

      {/* Main Grid: Left Timeline / Right Exam Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Timeline Checklist Column */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold font-display text-charcoal pb-3 border-b border-cream flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Study in Japan Application Timeline</span>
          </h2>

          <div className="space-y-6">
            {timelineSteps.map((step) => (
              <StepGuideCard
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* Right Exam Details Column */}
        <aside className="space-y-8">
          
          {/* EJU Exam Highlights */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-2 border-b border-cream">
              EJU Exam Guide
            </h3>
            
            <p className="text-xs text-muted leading-relaxed font-semibold">
              The <strong>Examination for Japanese University Admission (EJU)</strong> is a standardized entrance test evaluating academic skills and basic science/math for undergraduate entrance to Japanese-taught programs.
            </p>

            <ul className="space-y-2.5 text-[11px] font-bold text-charcoal">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Held twice a year (June & November)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Math, Science, and Japan & the World</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Required for standard local degrees</span>
              </li>
            </ul>
          </div>

          {/* JLPT Exam Highlights */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shadow-inner">
              <BookCheck className="w-5 h-5" />
            </div>
            
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-2 border-b border-cream">
              JLPT Language Guide
            </h3>
            
            <p className="text-xs text-muted leading-relaxed font-semibold">
              The <strong>Japanese Language Proficiency Test (JLPT)</strong> evaluates vocabulary, grammar, reading, and listening capabilities for non-native speakers across 5 distinct levels (N5 to N1).
            </p>

            <ul className="space-y-2.5 text-[11px] font-bold text-charcoal">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>Levels: N5 (basic) to N1 (advanced)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>N5/N4 recommended for general student visa</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span>N2/N1 required for Japanese graduate tracks</span>
              </li>
            </ul>
          </div>

          {/* Research Plan Guide */}
          <div className="bg-white border border-cream rounded-3xl p-6 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-primary shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-2 border-b border-cream">
              Writing a Study / Research Plan
            </h3>
            
            <p className="text-xs text-muted leading-relaxed font-semibold">
              For graduate school and MEXT candidates, your Study and Research Plan is the most critical asset. Focus on explaining:
            </p>

            <div className="space-y-3 pl-2 border-l-2 border-primary/50 text-[11px] text-muted font-bold">
              <p>1. Why this research must be done specifically in Japan</p>
              <p>2. Connect your topic to specific host professors</p>
              <p>3. Detail realistic methodologies and timelines</p>
            </div>
          </div>

        </aside>

      </div>

      {/* Glowing Bottom CTA Section */}
      <CTASection />

    </div>
  );
}
