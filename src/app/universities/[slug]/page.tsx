import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, Landmark, Calendar, Mail, ExternalLink, GraduationCap, 
  BookOpen, CircleDollarSign, ShieldCheck, Heart, Award, ArrowLeft 
} from 'lucide-react';
import { getUniversityBySlug, getScholarships } from '@/lib/dynamodb';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Badge from '@/components/ui/Badge';
import UniversityTabsContainer from './UniversityTabsContainer';
import UniversityBookmarkButton from './UniversityBookmarkButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function UniversityDetailPage({ params }: PageProps) {
  // Await page params in Next.js 15
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Retrieve matching university
  const university = await getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  // Retrieve related scholarships (sponsored by this university or matching university name)
  const allScholarships = await getScholarships();
  const relatedScholarships = allScholarships.filter(
    (schol) => 
      schol.category === 'University' && 
      (schol.provider.toLowerCase().includes(university.name.toLowerCase()) || 
       schol.name.toLowerCase().includes(university.name.toLowerCase()) ||
       schol.provider.toLowerCase().includes(university.japaneseName.split(' ')[0].toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Dynamic breadcrumb path indicator */}
      <Breadcrumb 
        items={[
          { label: 'Universities', href: '/universities' }, 
          { label: university.name }
        ]} 
        className="mb-6" 
      />

      {/* Back button link */}
      <Link
        href="/universities"
        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary font-bold font-sans uppercase mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-primary" />
        <span>Back to University Directory</span>
      </Link>

      {/* Modern Banner / Header Card */}
      <div className="bg-gradient-to-br from-cream via-cream/40 to-white border border-cream rounded-3xl p-6 sm:p-8 md:p-10 mb-10 shadow-xs relative overflow-hidden">
        
        {/* Abstract seigaiha background */}
        <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
          
          <div className="space-y-3 max-w-3xl">
            {/* Badges row */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="charcoal">
                {university.type} University
              </Badge>
              <Badge variant="secondary" className="font-bold">
                {university.prefecture} Prefecture
              </Badge>
              {university.englishPrograms && (
                <Badge variant="success">
                  English Curriculums
                </Badge>
              )}
            </div>

            {/* University Names */}
            <div>
              <span className="text-xs text-muted font-bold font-sans uppercase tracking-widest block mb-1">
                {university.japaneseName}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-charcoal leading-tight">
                {university.name}
              </h1>
            </div>

            {/* Location tag */}
            <p className="flex items-center gap-2 text-xs sm:text-sm text-muted font-semibold">
              <MapPin className="w-4.5 h-4.5 text-primary shrink-0" />
              <span>{university.location}</span>
            </p>
          </div>

          {/* Quick Primary Actions */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-cream/50 items-center">
            <UniversityBookmarkButton university={university} />
            <a
              href={university.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

      {/* Main Tabbed Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Interactive Tabs Content Panel */}
        <div className="lg:col-span-2">
          <UniversityTabsContainer university={university} />
        </div>

        {/* Right Info Sidebar (Related Scholarships, Quick Numbers, Helpline) */}
        <aside className="space-y-8">
          
          {/* Quick Metrics Sidebar Card */}
          <div className="bg-cream/15 border border-cream rounded-3xl p-6 space-y-4">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream">
              Quick Highlights
            </h3>
            
            <div className="space-y-4 font-sans text-xs font-semibold text-muted">
              {/* Tuition */}
              <div className="flex items-start gap-3">
                <CircleDollarSign className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Estimated Tuition</p>
                  <p>{university.tuitionEstimate}</p>
                </div>
              </div>

              {/* Intake periods */}
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Admissions Open</p>
                  <p>{university.admissionPeriods.join(' & ')} Intake</p>
                </div>
              </div>

              {/* Programs instruction */}
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-charcoal mb-0.5">Instruction Medium</p>
                  <p>{university.languageOfInstruction.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Scholarships Sidebar Card */}
          <div className="bg-white border border-cream rounded-3xl p-6 shadow-xs">
            <h3 className="text-sm font-bold font-display uppercase tracking-wider text-charcoal pb-3 border-b border-cream mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Related Scholarships</span>
            </h3>

            {relatedScholarships.length === 0 ? (
              <div className="text-center py-6 text-muted font-medium text-xs">
                <Award className="w-8 h-8 mx-auto text-gray-300 stroke-[1.2] mb-2" />
                <span>No sponsored institutional grants cataloged for this university. Privately-financed students can apply for government or JASSO awards.</span>
              </div>
            ) : (
              <div className="space-y-4">
                {relatedScholarships.map((schol) => (
                  <div key={schol.id} className="p-3 bg-cream/10 hover:bg-cream/20 rounded-2xl border border-cream/50 transition-colors">
                    <span className="text-[9px] text-primary-dark font-black tracking-widest uppercase block mb-1">
                      {schol.category} FUNDING
                    </span>
                    <Link 
                      href={`/scholarships/${schol.slug}`}
                      className="text-xs font-bold text-charcoal leading-snug hover:text-primary transition-colors block mb-2"
                    >
                      {schol.name}
                    </Link>
                    
                    <div className="flex items-center justify-between text-[10px] text-muted font-semibold">
                      <span>Stipend: <strong className="text-primary-dark">{schol.monthlyStipend || 'Tuition reduction'}</strong></span>
                      <Link 
                        href={`/scholarships/${schol.slug}`}
                        className="text-primary hover:underline font-bold"
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* INARI Direct Academic Helpline support Card */}
          <div className="bg-charcoal text-white rounded-3xl p-6 space-y-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-wave-pattern opacity-5 pointer-events-none"></div>
            <span className="text-[9px] bg-primary text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest leading-none inline-block">
              Free Support
            </span>
            <h3 className="text-sm font-bold font-display uppercase tracking-wider">
              Need Application Help?
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-sans font-medium">
              Struggling with research proposal plans or recommendation files for this university? Speak to our local Japanese language advisors for free support.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-bold shadow-sm transition-colors duration-200"
            >
              <span>Get Application Support</span>
              <Mail className="w-3.5 h-3.5" />
            </Link>
          </div>

        </aside>

      </div>

    </div>
  );
}
