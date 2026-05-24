'use client';

import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { Scholarship } from '@/types/scholarship';

interface ScholarshipBookmarkButtonProps {
  scholarship: Scholarship;
}

export const ScholarshipBookmarkButton: React.FC<ScholarshipBookmarkButtonProps> = ({ scholarship }) => {
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

  return (
    <button
      onClick={toggleBookmark}
      className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border rounded-2xl text-xs md:text-sm font-bold transition-all duration-200 ${
        isBookmarked
          ? 'bg-primary border-primary text-white shadow-sm'
          : 'bg-cream/20 border-beige hover:bg-cream/40 text-primary-dark'
      }`}
      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Scholarship'}
    >
      <Bookmark className={`w-4.5 h-4.5 ${isBookmarked ? 'fill-current' : ''}`} />
      <span>{isBookmarked ? 'Saved to Directory' : 'Bookmark Details'}</span>
    </button>
  );
};
export default ScholarshipBookmarkButton;
