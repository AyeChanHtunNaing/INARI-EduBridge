'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Award, PiggyBank, Landmark, ExternalLink, Bookmark } from 'lucide-react';
import { Scholarship } from '@/types/scholarship';
import { Badge } from '../ui/Badge';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

export const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('saved_scholarships') || '[]');
      setIsBookmarked(saved.some((item: any) => item.id === scholarship.id));
    }
  }, [scholarship.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('saved_scholarships') || '[]');
      let updated;
      
      if (isBookmarked) {
        updated = saved.filter((item: any) => item.id !== scholarship.id);
        setIsBookmarked(false);
      } else {
        updated = [...saved, { 
          id: scholarship.id, 
          name: scholarship.name, 
          slug: scholarship.slug 
        }];
        setIsBookmarked(true);
      }
      
      localStorage.setItem('saved_scholarships', JSON.stringify(updated));
      window.dispatchEvent(new Event('bookmarks-updated'));
    }
  };

  const isOngoing = scholarship.deadline.toLowerCase().includes('ongoing');

  return (
    <div className="group bg-white rounded-3xl border border-cream hover:border-primary/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden p-6 relative">
      
      {/* Category Badge & Bookmark Icon */}
      <div className="flex items-center justify-between mb-4">
        <Badge variant="secondary">
          {scholarship.category} Scholarship
        </Badge>
        
        <button
          onClick={toggleBookmark}
          className={`p-2 rounded-full border border-cream hover:border-primary/20 transition-all duration-200 ${
            isBookmarked
              ? 'bg-primary text-white border-primary scale-110 shadow-sm'
              : 'bg-cream/10 text-muted hover:text-primary hover:bg-cream/30'
          }`}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Scholarship'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Header Info */}
      <div className="mb-4">
        <span className="text-[10px] text-muted font-bold font-sans uppercase tracking-wider block mb-1">
          {scholarship.provider}
        </span>
        <h3 className="text-base sm:text-lg font-bold font-display text-charcoal leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[3.25rem]">
          {scholarship.name}
        </h3>
      </div>

      {/* Highlights Block */}
      <div className="bg-cream/20 border border-cream/50 rounded-2xl p-4 space-y-3 mb-5 flex-1">
        {/* Stipend Details */}
        {scholarship.monthlyStipend ? (
          <div className="flex items-start gap-2.5">
            <PiggyBank className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-muted font-bold uppercase block leading-none mb-0.5">Monthly Allowance</span>
              <span className="text-sm font-bold text-primary-dark">{scholarship.monthlyStipend}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-2.5">
            <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-muted font-bold uppercase block leading-none mb-0.5">Scholarship Benefits</span>
              <span className="text-xs font-semibold text-charcoal">{scholarship.benefits}</span>
            </div>
          </div>
        )}

        {/* Tuition Coverage */}
        <div className="flex items-start gap-2.5">
          <Landmark className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] text-muted font-bold uppercase block leading-none mb-0.5">Tuition Coverage</span>
            <Badge variant={scholarship.tuitionCoverage === 'Full' ? 'success' : 'warning'} className="mt-1 font-bold">
              {scholarship.tuitionCoverage} Coverage
            </Badge>
          </div>
        </div>
      </div>

      {/* Deadline Indicator */}
      <div className="flex items-center gap-2 text-xs text-muted font-semibold mb-6">
        <Calendar className="w-4 h-4 text-primary shrink-0" />
        <span>Application Deadline: </span>
        <span className={`font-bold ${isOngoing ? 'text-green-600' : 'text-red-500 bg-red-50 px-2 py-0.5 rounded-md border border-red-100'}`}>
          {scholarship.deadline}
        </span>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
        {/* Official Source */}
        <a
          href={scholarship.officialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-cream/30 hover:bg-cream border border-beige text-primary-dark font-semibold rounded-xl text-xs transition-colors duration-200"
        >
          <span>Official Source</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Dynamic Details Page */}
        <Link
          href={`/scholarships/${scholarship.slug}`}
          className="flex-1 inline-flex items-center justify-center py-2.5 px-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-xs shadow-md hover:shadow-lg transition-all duration-200"
        >
          View Details
        </Link>
      </div>

    </div>
  );
};
export default ScholarshipCard;
