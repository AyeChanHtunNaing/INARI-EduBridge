'use client';

import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { University } from '@/types/university';

interface UniversityBookmarkButtonProps {
  university: University;
}

export const UniversityBookmarkButton: React.FC<UniversityBookmarkButtonProps> = ({ university }) => {
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
      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark University'}
    >
      <Bookmark className={`w-4.5 h-4.5 ${isBookmarked ? 'fill-current' : ''}`} />
      <span>{isBookmarked ? 'Saved to Directory' : 'Bookmark University'}</span>
    </button>
  );
};
export default UniversityBookmarkButton;
