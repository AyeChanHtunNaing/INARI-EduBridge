'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../ui/Logo';
import { Menu, X, Bookmark, ExternalLink, GraduationCap, Award, Trash2 } from 'lucide-react';
import { getUniversities, getScholarships } from '@/lib/dynamodb';
import { University } from '@/types/university';
import { Scholarship } from '@/types/scholarship';

interface SavedItem {
  id: string;
  type: 'university' | 'scholarship';
  name: string;
  slug: string;
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to make navbar look sleek
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync bookmarks from localStorage
  const loadBookmarks = () => {
    if (typeof window !== 'undefined') {
      const savedUnis = JSON.parse(localStorage.getItem('saved_universities') || '[]');
      const savedSchols = JSON.parse(localStorage.getItem('saved_scholarships') || '[]');
      
      const unisFormatted = savedUnis.map((item: any) => ({
        id: item.id,
        type: 'university' as const,
        name: item.name,
        slug: item.slug
      }));

      const scholsFormatted = savedSchols.map((item: any) => ({
        id: item.id,
        type: 'scholarship' as const,
        name: item.name,
        slug: item.slug
      }));

      setSavedItems([...unisFormatted, ...scholsFormatted]);
    }
  };

  useEffect(() => {
    loadBookmarks();
    // Listen for custom bookmark storage events to update instantly
    window.addEventListener('bookmarks-updated', loadBookmarks);
    return () => window.removeEventListener('bookmarks-updated', loadBookmarks);
  }, []);

  const removeBookmark = (e: React.MouseEvent, item: SavedItem) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      const key = item.type === 'university' ? 'saved_universities' : 'saved_scholarships';
      const current = JSON.parse(localStorage.getItem(key) || '[]');
      const updated = current.filter((i: any) => i.id !== item.id);
      localStorage.setItem(key, JSON.stringify(updated));
      window.dispatchEvent(new Event('bookmarks-updated'));
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Study Guide', href: '/study-guide' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-cream py-2' 
          : 'bg-white/90 backdrop-blur-sm border-b border-cream/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-cream/70 font-semibold' 
                      : 'text-charcoal hover:text-primary hover:bg-cream/20'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Saved Items & Hamburger Menu */}
          <div className="flex items-center gap-2">
            {/* Bookmarks Toggle button */}
            <div className="relative">
              <button
                onClick={() => setBookmarksOpen(!bookmarksOpen)}
                className={`p-2 rounded-full transition-all duration-200 relative ${
                  savedItems.length > 0 
                    ? 'text-primary bg-cream/50 hover:bg-cream' 
                    : 'text-muted hover:text-charcoal hover:bg-gray-100'
                }`}
                title="Saved Items"
              >
                <Bookmark className="w-5 h-5 fill-current" />
                {savedItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse border border-white">
                    {savedItems.length}
                  </span>
                )}
              </button>

              {/* Bookmarks Dropdown Overlay */}
              {bookmarksOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-cream z-50 overflow-hidden slide-in-down animate-fade-in">
                  <div className="p-4 bg-cream/50 border-b border-cream/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-primary fill-current" />
                      <span className="font-semibold text-charcoal text-sm">Saved Directory ({savedItems.length})</span>
                    </div>
                    <button 
                      onClick={() => setBookmarksOpen(false)}
                      className="text-muted hover:text-charcoal p-1 rounded-full hover:bg-cream/40"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                    {savedItems.length === 0 ? (
                      <div className="p-8 text-center text-muted font-medium text-xs">
                        <Bookmark className="w-8 h-8 mx-auto text-gray-300 stroke-[1.5] mb-2" />
                        No saved universities or scholarships yet.
                      </div>
                    ) : (
                      savedItems.map((item) => (
                        <div key={`${item.type}-${item.id}`} className="p-3 hover:bg-cream/10 flex items-start justify-between gap-3 group">
                          <Link 
                            href={`/${item.type === 'university' ? 'universities' : 'scholarships'}/${item.slug}`}
                            onClick={() => setBookmarksOpen(false)}
                            className="flex-1 flex gap-2 items-start"
                          >
                            {item.type === 'university' ? (
                              <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            ) : (
                              <Award className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="text-left">
                              <p className="text-xs font-semibold text-charcoal leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                                {item.name}
                              </p>
                              <span className="text-[10px] text-muted capitalize font-semibold">
                                {item.type}
                              </span>
                            </div>
                          </Link>
                          
                          <button
                            onClick={(e) => removeBookmark(e, item)}
                            className="text-gray-300 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                  
                  {savedItems.length > 0 && (
                    <div className="p-2 bg-gray-50 border-t border-gray-100 text-center">
                      <Link 
                        href="/universities" 
                        onClick={() => setBookmarksOpen(false)}
                        className="text-[11px] font-semibold text-primary hover:text-primary-dark inline-flex items-center gap-1"
                      >
                        Explore More Programs <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-primary hover:bg-cream/40 lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/50 backdrop-blur-xs lg:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed right-0 top-0 bottom-0 w-72 bg-white p-6 shadow-2xl flex flex-col gap-6 z-50 animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-cream">
              <Logo variant="icon-only" className="w-9 h-9" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-cream/50 text-charcoal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'text-primary bg-cream/70' 
                        : 'text-charcoal hover:text-primary hover:bg-cream/30'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-cream text-center">
              <p className="text-[10px] text-muted font-sans font-medium uppercase tracking-widest leading-normal">
                INARI Japanese Language Hub
              </p>
              <p className="text-[9px] text-gray-400 mt-1">Your Gateway to Study in Japan</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
