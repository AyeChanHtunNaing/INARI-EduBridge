'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { GraduationCap, MapPin, SlidersHorizontal, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchBar from '@/components/ui/SearchBar';
import UniversityFilters, { UniFilterState } from '@/components/ui/UniversityFilters';
import UniversityCard from '@/components/cards/UniversityCard';
import EmptyState from '@/components/ui/EmptyState';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { SAMPLE_UNIVERSITIES } from '@/lib/data';

function UniversitiesContent() {
  const searchParams = useSearchParams();
  
  // State for search query and sidebar filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<UniFilterState>({
    prefecture: '',
    degreeLevel: '',
    fieldOfStudy: '',
    language: '',
    type: '',
    englishProgramsOnly: false,
    scholarshipAvailable: false
  });
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Initialize search query from URL parameter if present
  useEffect(() => {
    const urlQuery = searchParams.get('search');
    if (urlQuery) {
      setSearchQuery(urlQuery);
    }
  }, [searchParams]);

  // Aggregate metadata for filter selects
  const availablePrefectures = Array.from(new Set(SAMPLE_UNIVERSITIES.map(u => u.prefecture))).sort();
  
  const availableDegrees = Array.from(
    new Set(SAMPLE_UNIVERSITIES.flatMap(u => u.degreeLevels))
  ).sort();

  const availableFields = Array.from(
    new Set(SAMPLE_UNIVERSITIES.flatMap(u => u.fieldsOfStudy))
  ).sort();

  // Perform multi-criteria filtering
  const filteredUniversities = SAMPLE_UNIVERSITIES.filter((uni) => {
    // 1. Text Search query matching name, location, and overview
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchName = uni.name.toLowerCase().includes(query);
      const matchJpName = uni.japaneseName.toLowerCase().includes(query);
      const matchLoc = uni.location.toLowerCase().includes(query);
      const matchOverview = uni.overview.toLowerCase().includes(query);
      const matchFields = uni.fieldsOfStudy.some(f => f.toLowerCase().includes(query));
      
      if (!matchName && !matchJpName && !matchLoc && !matchOverview && !matchFields) {
        return false;
      }
    }

    // 2. University Type (National/Private)
    if (filters.type && uni.type !== filters.type) {
      return false;
    }

    // 3. Prefecture / Region
    if (filters.prefecture && uni.prefecture !== filters.prefecture) {
      return false;
    }

    // 4. Degree Level Offered
    if (filters.degreeLevel && !uni.degreeLevels.includes(filters.degreeLevel)) {
      return false;
    }

    // 5. Field of Study
    if (filters.fieldOfStudy && !uni.fieldsOfStudy.includes(filters.fieldOfStudy)) {
      return false;
    }

    // 6. Instruction Language
    if (filters.language && !uni.languageOfInstruction.includes(filters.language)) {
      return false;
    }

    // 7. English taught programs only toggle
    if (filters.englishProgramsOnly && !uni.englishPrograms) {
      return false;
    }

    // 8. Scholarships available toggle
    if (filters.scholarshipAvailable && !uni.scholarshipAvailable) {
      return false;
    }

    return true;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      prefecture: '',
      degreeLevel: '',
      fieldOfStudy: '',
      language: '',
      type: '',
      englishProgramsOnly: false,
      scholarshipAvailable: false
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumb navigation */}
      <Breadcrumb items={[{ label: 'Universities' }]} className="mb-6" />

      {/* Page Header */}
      <SectionHeader
        badge="Japan's Top Colleges"
        title="Explore Japanese Universities"
        subtitle="Filter and compare leading national and private academic institutions across Japan offering undergraduate, postgraduate, and short-term study schemes."
      />

      {/* Main Search Panel & Filter toggle for mobile */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="Search by university name, prefecture, major, or keywords..."
          className="flex-1"
        />
        
        {/* Mobile Filters Panel Toggle Button */}
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full md:w-auto px-5 py-3.5 bg-cream/70 hover:bg-cream border border-beige text-primary-dark font-bold rounded-2xl text-sm flex items-center justify-center gap-2 md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter Parameters</span>
        </button>
      </div>

      {/* Two-column layout: Left Filters / Right Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-1 h-fit sticky top-24">
          <UniversityFilters
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            availablePrefectures={availablePrefectures}
            availableFields={availableFields}
            availableDegrees={availableDegrees}
          />
        </aside>

        {/* Universities List / Grid Display */}
        <section className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between text-xs text-muted font-bold font-sans uppercase tracking-wider">
            <span>Showing {filteredUniversities.length} Universities</span>
            {(searchQuery || Object.values(filters).some(Boolean)) && (
              <button 
                onClick={resetFilters}
                className="text-primary hover:underline font-bold"
              >
                Clear all search parameters
              </button>
            )}
          </div>

          {filteredUniversities.length === 0 ? (
            <EmptyState onReset={resetFilters} className="mt-8" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredUniversities.map((uni) => (
                <UniversityCard key={uni.id} university={uni} />
              ))}
            </div>
          )}
        </section>

      </div>

      {/* Mobile Drawer Slide-out Filters */}
      {mobileFiltersOpen && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-xs flex justify-end md:hidden animate-fade-in"
          onClick={() => setMobileFiltersOpen(false)}
        >
          <div 
            className="w-80 bg-white h-full p-6 overflow-y-auto flex flex-col gap-6 animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-cream">
              <span className="font-bold text-charcoal font-display text-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <span>Filters</span>
              </span>
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1.5 rounded-full hover:bg-cream/50 text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1">
              <UniversityFilters
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                availablePrefectures={availablePrefectures}
                availableFields={availableFields}
                availableDegrees={availableDegrees}
              />
            </div>
            
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm mt-auto shadow-md"
            >
              Apply Filter Parameters ({filteredUniversities.length})
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default function UniversitiesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center font-semibold text-muted">
        Loading university database...
      </div>
    }>
      <UniversitiesContent />
    </Suspense>
  );
}
