import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  Calendar, Award, PiggyBank, Landmark, ExternalLink, Mail, 
  MapPin, CheckCircle, ListTodo, AlertTriangle, Info, ArrowLeft, Bookmark 
} from 'lucide-react';
import { getScholarshipBySlug, getScholarships } from '@/lib/dynamodb';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import ScholarshipBookmarkButton from './ScholarshipBookmarkButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ScholarshipDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const scholarship = await getScholarshipBySlug(slug);

  if (!scholarship) {
    notFound();
  }

  // Get related scholarships (same category or similar providers)
  const allScholarships = await getScholarships();
  const relatedScholarships = allScholarships.filter(
    (s) => s.id !== scholarship.id && (s.category === scholarship.category || s.tuitionCoverage === scholarship.tuitionCoverage)
  ).slice(0, 3);

  const isOngoing = scholarship.deadline.toLowerCase().includes('ongoing');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb 
        items={[
          { label: 'Scholarships', href: '/scholarships' }, 
          { label: scholarship.name }
        ]} 
        className="mb-6" 
      />

      {/* Back button */}
      <Link
        href="/scholarships"
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary font-bold font-sans uppercase mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-primary" />
        <span>Back to Scholarships Directory</span>
      </Link>

      {/* Banner / Header Card */}
      <div className="bg-gradient-to-br from-cream via-cream/40 to-white border border-cream rounded-3xl p-6 sm:p-8 md:p-10 mb-10 shadow-xs relative overflow-hidden">
        
        {/* Wave background */}
        <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
          
          <div className="space-y-3 max-w-3xl">
            {/* Badges row */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-extrabold">
                {scholarship.category} Scholarship
              </Badge>
              <Badge variant={scholarship.tuitionCoverage === 'Full' ? 'success' : 'warning'} className="font-bold">
                {scholarship.tuitionCoverage} Tuition Coverage
              </Badge>
              {scholarship.applyFromAbroad && (
                <Badge variant="primary">
                  Apply From Abroad Allowed
                </Badge>
              )}
            </div>

            {/* Title & Provider */}
            <div>
              <span className="text-xs text-muted font-bold font-sans uppercase tracking-widest block mb-1">
                {scholarship.provider}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-charcoal leading-tight">
                {scholarship.name}
              </h1>
            </div>
          </div>

          {/* Dynamic Bookmark trigger & Official Source */}
          <div className="flex flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-cream/50 items-center">
            <ScholarshipBookmarkButton scholarship={scholarship} />
            
            <a
              href={scholarship.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow w-full md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Official Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Two Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left main details area */}
        <div className="lg:col-span-2 space-y-8 bg-white border border-cream rounded-3xl p-6 sm:p-8 shadow-xs">
          
          {/* 1. Benefits overview */}
          <section className="space-y-4">
            <h2 className="text-base sm:text-lg font-bold font-display text-charcoal flex items-center gap-2 border-b border-cream pb-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Scholarship Benefits & Allowances</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scholarship.monthlyStipend && (
                <div className="p-4.5 bg-cream/15 border border-cream rounded-2xl flex items-start gap-3">
                  <PiggyBank className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-0.5">Monthly Stipend Allowance</span>
                    <span className="text-base font-black text-primary-dark">{scholarship.monthlyStipend}</span>
                  </div>
                </div>
              )}

              <div className="p-4.5 bg-cream/15 border border-cream rounded-2xl flex items-start gap-3">
                <Landmark className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-0.5">Tuition Coverage Level</span>
                  <Badge variant={scholarship.tuitionCoverage === 'Full' ? 'success' : 'warning'} className="mt-1 font-bold">
                    {scholarship.tuitionCoverage} Tuition Coverage
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-xs font-semibold text-charcoal">
              <p className="leading-relaxed">
                <strong>Core Funding Summary: </strong>
                {scholarship.benefits}
              </p>
            </div>
          </section>

          {/* 2. Eligibility requirements */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-base sm:text-lg font-bold font-display text-charcoal flex items-center gap-2 border-b border-cream pb-2">
              <Info className="w-5 h-5 text-primary" />
              <span>Eligibility Requirements</span>
            </h2>

            <div className="space-y-3 font-sans text-xs font-semibold text-muted leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5">Eligible Degree Levels:</strong>
                  <span>{scholarship.degreeLevel.join(', ')} Applicants</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-charcoal block mb-0.5">Nationality Requirements:</strong>
                  <span>{scholarship.eligibleNationalities.join(', ')}</span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Required Documents */}
          <section className="space-y-4 pt-4 border-t border-gray-100">
            <h2 className="text-base sm:text-lg font-bold font-display text-charcoal flex items-center gap-2 border-b border-cream pb-2">
              <ListTodo className="w-5 h-5 text-primary" />
              <span>Required Application Documents</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scholarship.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="p-3 bg-cream/10 rounded-xl border border-cream/50 text-xs font-bold text-charcoal flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Notes Section */}
          {scholarship.notes && (
            <section className="space-y-3 pt-4 border-t border-gray-100">
              <h2 className="text-base sm:text-lg font-bold font-display text-charcoal flex items-center gap-2 border-b border-cream pb-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                <span>Important Notes & Key Advice</span>
              </h2>
              <div className="p-5 bg-red-50/50 border border-red-100 rounded-2xl text-xs sm:text-sm text-muted leading-relaxed font-semibold">
                <p className="whitespace-pre-line">{scholarship.notes}</p>
              </div>
            </section>
          )}

        </div>

        {/* Right Info Sidebar (Deadline alerts, Direct CTA, Related) */}
        <aside className="space-y-8">
          
          {/* Quick Apply / Deadline panel */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-5">
            <div className="text-center pb-4 border-b border-cream">
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-1">
                Application Deadline
              </span>
              <p className={`text-lg font-black ${isOngoing ? 'text-green-600' : 'text-red-500 bg-red-50 border border-red-100 rounded-xl py-1 px-3 inline-block mt-1 text-sm font-extrabold'}`}>
                {scholarship.deadline}
              </p>
            </div>

            <div className="space-y-4 font-sans text-xs font-semibold text-muted">
              {/* Application method */}
              <div>
                <p className="font-bold text-charcoal mb-0.5">Submission Method</p>
                <p>{scholarship.applicationMethod}</p>
              </div>

              {/* Apply from abroad */}
              <div>
                <p className="font-bold text-charcoal mb-0.5">Abroad Application</p>
                <p>{scholarship.applyFromAbroad ? 'Yes, can submit from home country' : 'No, must reside in Japan or apply post-enrollment'}</p>
              </div>
            </div>

            {/* Direct Official Apply Trigger */}
            <a
              href={scholarship.officialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-primary hover:bg-primary-dark text-white rounded-2xl text-xs md:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Apply on Official Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Related Scholarships */}
          <div className="bg-white border border-cream rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream mb-4">
              Similar Scholarships
            </h3>

            <div className="space-y-4">
              {relatedScholarships.map((schol) => (
                <div key={schol.id} className="p-3 bg-cream/10 hover:bg-cream/20 rounded-2xl border border-cream/50 transition-colors">
                  <span className="text-[9px] text-primary-dark font-black tracking-widest uppercase block mb-1">
                    {schol.category} TRACK
                  </span>
                  <Link 
                    href={`/scholarships/${schol.slug}`}
                    className="text-xs font-bold text-charcoal leading-snug hover:text-primary transition-colors block mb-2"
                  >
                    {schol.name}
                  </Link>
                  <p className="text-[10px] text-muted font-bold">
                    Coverage: <strong className="text-primary-dark">{schol.tuitionCoverage} Tuition</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </div>

    </div>
  );
}
