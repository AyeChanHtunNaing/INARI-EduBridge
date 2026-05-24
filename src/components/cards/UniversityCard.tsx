'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, BookOpen, CircleDollarSign, ExternalLink, Bookmark, GraduationCap } from 'lucide-react';
import { University } from '@/types/university';
import { Badge } from '../ui/Badge';

interface UniversityCardProps {
  university: University;
}

export const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('saved_universities') || '[]');
      setIsBookmarked(saved.some((item: any) => item.id === university.id));
    }
  }, [university.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem('saved_universities') || '[]');
      let updated;
      
      if (isBookmarked) {
        updated = saved.filter((item: any) => item.id !== university.id);
        setIsBookmarked(false);
      } else {
        updated = [...saved, { 
          id: university.id, 
          name: university.name, 
          slug: university.slug 
        }];
        setIsBookmarked(true);
      }
      
      localStorage.setItem('saved_universities', JSON.stringify(updated));
      // Dispatch a custom event to notify Navbar
      window.dispatchEvent(new Event('bookmarks-updated'));
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-cream hover:border-primary/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Visual Header / Image */}
      <div className="relative h-48 w-full bg-cream overflow-hidden">
        {university.imageUrl ? (
          <img
            src={university.imageUrl}
            alt={university.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream to-beige text-primary">
            <GraduationCap className="w-16 h-16 stroke-[1.2]" />
          </div>
        )}
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <Badge variant={university.type === 'National' ? 'charcoal' : 'secondary'}>
            {university.type} University
          </Badge>
          {university.englishPrograms && (
            <Badge variant="success">
              English Programs Available
            </Badge>
          )}
        </div>

        {/* Bookmark Action */}
        <button
          onClick={toggleBookmark}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 z-10 shadow-sm ${
            isBookmarked
              ? 'bg-primary text-white scale-110'
              : 'bg-white/80 hover:bg-white text-muted hover:text-primary'
          }`}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark University'}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Name Header */}
        <div className="mb-4">
          <span className="text-[10px] text-muted font-bold font-sans uppercase tracking-wider block mb-1">
            {university.japaneseName}
          </span>
          <h3 className="text-lg font-bold font-display text-charcoal leading-snug group-hover:text-primary transition-colors line-clamp-1">
            {university.name}
          </h3>
        </div>

        {/* Info Grid */}
        <div className="space-y-3.5 mb-6 text-xs text-muted font-medium flex-1">
          {/* Location */}
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span className="truncate">{university.location}</span>
          </div>

          {/* Majors / Degree Level */}
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-charcoal mb-0.5">Degrees Offered:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {university.degreeLevels.slice(0, 3).map((level) => (
                  <span key={level} className="bg-cream/40 px-2 py-0.5 rounded text-[10px] text-primary-dark font-bold font-sans">
                    {level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tuition Estimate */}
          <div className="flex items-center gap-2.5">
            <CircleDollarSign className="w-4 h-4 text-primary shrink-0" />
            <span className="font-bold text-charcoal">{university.tuitionEstimate}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
          {/* Official Site */}
          <a
            href={university.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-cream/30 hover:bg-cream border border-beige text-primary-dark font-semibold rounded-xl text-xs transition-colors duration-200"
          >
            <span>Official Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Details Page */}
          <Link
            href={`/universities/${university.slug}`}
            className="flex-1 inline-flex items-center justify-center py-2.5 px-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl text-xs shadow-md hover:shadow-lg transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UniversityCard;
