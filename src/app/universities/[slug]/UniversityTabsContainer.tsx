'use client';

import React, { useState } from 'react';
import { University } from '@/types/university';
import { 
  Info, BookOpen, GraduationCap, CircleDollarSign, Mail, 
  MapPin, CheckCircle, ExternalLink, Bookmark 
} from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface UniversityTabsContainerProps {
  university: University;
}

export const UniversityTabsContainer: React.FC<UniversityTabsContainerProps> = ({ university }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'programs' | 'admission' | 'fees' | 'contact'>('overview');

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: <Info className="w-4 h-4" /> },
    { id: 'programs' as const, label: 'Programs', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'admission' as const, label: 'Admission', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'fees' as const, label: 'Fees & Funding', icon: <CircleDollarSign className="w-4 h-4" /> },
    { id: 'contact' as const, label: 'Contact Details', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-white border border-cream rounded-3xl overflow-hidden shadow-xs">
      
      {/* Scrollable Tab bar header */}
      <div className="bg-cream/10 border-b border-cream/50 flex overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4.5 px-5 sm:px-6 font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-colors border-b-2 focus:outline-none shrink-0 ${
                isActive 
                  ? 'border-primary text-primary bg-white' 
                  : 'border-transparent text-muted hover:text-charcoal hover:bg-cream/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs panels wrapper */}
      <div className="p-6 sm:p-8 font-sans">
        
        {/* OVERVIEW PANEL */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-3">
                About the Institution
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium">
                {university.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-sm font-bold font-display text-charcoal mb-3">
                Key Fields of Study Offered
              </h4>
              <div className="flex flex-wrap gap-2">
                {university.fieldsOfStudy.map((field) => (
                  <Badge key={field} variant="outline" className="font-semibold text-xs py-1 px-3">
                    {field}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-sm font-bold font-display text-charcoal mb-3">
                Language Requirements
              </h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium">
                Depending on the program track chosen, courses are conducted in <strong>{university.languageOfInstruction.join(' and ')}</strong>. English programs typically require IELTS or TOEFL certificates, while standard programs require EJU Japanese or JLPT credentials.
              </p>
            </div>
          </div>
        )}

        {/* PROGRAMS PANEL */}
        {activeTab === 'programs' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-2">
                Available Courses & Degree Programs
              </h3>
              <p className="text-xs text-muted mb-4 font-semibold">
                Below is a curated selection of degree courses popular with international students, taught either fully in English or with high bilingual support:
              </p>
              
              <ul className="divide-y divide-gray-100 border border-cream rounded-2xl overflow-hidden bg-cream/5">
                {university.programs.map((prog, idx) => (
                  <li key={idx} className="p-4 flex items-start gap-3 hover:bg-cream/10 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-charcoal leading-snug">
                      {prog}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ADMISSION PANEL */}
        {activeTab === 'admission' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-3">
                Admission Requirements & Eligibility
              </h3>
              <div className="p-5 bg-cream/15 border border-cream rounded-2xl mb-4">
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-medium whitespace-pre-line">
                  {university.requirements}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <h4 className="text-sm font-bold font-display text-charcoal">
                Required Application Documents
              </h4>
              <p className="text-xs text-muted font-semibold leading-relaxed">
                Standard documents required for screening typically include high school/college graduation certificates, full transcripts, standardized test scores (SAT/ACT/IB/EJU), English proficiency cards, recommendation letters, statement of purpose, and financial support proof.
              </p>
            </div>
          </div>
        )}

        {/* FEES PANEL */}
        {activeTab === 'fees' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-3">
                Tuition Fees & Financial Aid
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-cream/25 border border-cream rounded-2xl">
                  <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-1">
                    Annual Tuition Estimate
                  </span>
                  <p className="text-lg font-black text-primary-dark">
                    {university.tuitionEstimate}
                  </p>
                  <span className="text-[10px] text-muted font-medium mt-2 block">
                    *Estimates vary depending on faculty. National university tuition is fixed, while private rates vary.
                  </span>
                </div>

                <div className="p-5 bg-cream/25 border border-cream rounded-2xl flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-1">
                      Scholarship Support Schemes
                    </span>
                    <p className="text-sm font-bold text-charcoal">
                      {university.scholarshipAvailable 
                        ? 'Generous Financial Waivers Available' 
                        : 'Contact Administration for Private Grants'}
                    </p>
                  </div>
                  <span className="text-[10px] text-muted font-medium mt-3 block">
                    Institutional tuition reductions of 30% to 100% are offered to outstanding applicants.
                  </span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-sm font-bold font-display text-charcoal mb-2">
                External Financing
              </h4>
              <p className="text-xs text-muted leading-relaxed font-semibold">
                In addition to university waivers, students can apply for the fully-funded MEXT government scholarship (covers all tuition, monthly stipends, and airfare) or apply for the JASSO honors scholarship upon arrival in Japan.
              </p>
            </div>
          </div>
        )}

        {/* CONTACT PANEL */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display text-charcoal mb-4">
                Institutional Contact Information
              </h3>
              
              <div className="space-y-4 text-xs font-semibold text-muted font-sans max-w-md">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-charcoal mb-0.5">Admissions Mailbox</p>
                    <a href={`mailto:${university.contactEmail}`} className="text-primary hover:underline text-xs">
                      {university.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-charcoal mb-0.5">Campus Location</p>
                    <p>{university.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <a
                href={university.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-charcoal hover:bg-charcoal/90 text-white rounded-2xl text-xs font-bold transition-all shadow-sm"
              >
                <span>Access University Admissions Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
export default UniversityTabsContainer;
