'use client';

import React, { useState, Suspense } from 'react';
import { SlidersHorizontal, Award, X } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SearchBar from '@/components/ui/SearchBar';
import ScholarshipFilters, { ScholFilterState } from '@/components/ui/ScholarshipFilters';
import ScholarshipCard from '@/components/cards/ScholarshipCard';
import EmptyState from '@/components/ui/EmptyState';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { SAMPLE_SCHOLARSHIPS } from '@/lib/data';

function ScholarshipsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<ScholFilterState>({
    category: '',
    degreeLevel: '',
    funding: '',
    applyFromAbroad: false
  });
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Extract available categories and degrees for dropdown menus
  const availableCategories = Array.from(new Set(SAMPLE_SCHOLARSHIPS.map(s => s.category))).sort();
  
  const availableDegrees = Array.from(
    new Set(SAMPLE_SCHOLARSHIPS.flatMap(s => s.degreeLevel))
  ).sort();

  // Multi-parameter filter execution
  const filteredScholarships = SAMPLE_SCHOLARSHIPS.filter((schol) => {
    // 1. Text Search matching
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const matchName = schol.name.toLowerCase().includes(query);
      const matchProvider = schol.provider.toLowerCase().includes(query);
      const matchBenefits = schol.benefits.toLowerCase().includes(query);
      const matchNotes = schol.notes?.toLowerCase().includes(query) || false;
      
      if (!matchName && !matchProvider && !matchBenefits && !matchNotes) {
        return false;
      }
    }

    // 2. Category
    if (filters.category && schol.category !== filters.category) {
      return false;
    }

    // 3. Degree Level Offered
    if (filters.degreeLevel && !schol.degreeLevel.includes(filters.degreeLevel)) {
      return false;
    }

    // 4. Funding Coverage Level (Full/Partial)
    if (filters.funding && schol.tuitionCoverage !== filters.funding) {
      return false;
    }

    // 5. Apply From Abroad Toggle
    if (filters.applyFromAbroad && !schol.applyFromAbroad) {
      return false;
    }

    return true;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setFilters({
      category: '',
      degreeLevel: '',
      funding: '',
      applyFromAbroad: false
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Path Breadcrumbs */}
      <Breadcrumb items={[{ label: 'Scholarships' }]} className="mb-6" />

      {/* Header */}
      <SectionHeader
        badge="Financial Support"
        title="Find Scholarships for Studying in Japan"
        subtitle="Cataloging government fellowships, university tuition waivers, and private foundation grants. Filter by eligibility requirements, monthly stipends, and deadlines."
      />

      {/* Search Input Panels */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <SearchBar 
          value={searchQuery} 
          onChange={setSearchQuery} 
          placeholder="Search by scholarship name, provider organization, or key benefits..."
          className="flex-1"
        />
        
        {/* Mobile toggle filters */}
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full md:w-auto px-5 py-3.5 bg-cream/70 hover:bg-cream border border-beige text-primary-dark font-bold rounded-2xl text-sm flex items-center justify-center gap-2 md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filter Parameters</span>
        </button>
      </div>

      {/* Sidebar layouts */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block lg:col-span-1 h-fit sticky top-24">
          <ScholarshipFilters
            filters={filters}
            onChange={setFilters}
            onReset={resetFilters}
            availableCategories={availableCategories}
            availableDegrees={availableDegrees}
          />
        </aside>

        {/* Scholarships Directory Grid */}
        <section className="lg:col-span-3">
          <div className="mb-4 flex items-center justify-between text-xs text-muted font-bold font-sans uppercase tracking-wider">
            <span>Showing {filteredScholarships.length} Scholarships</span>
            {(searchQuery || Object.values(filters).some(Boolean)) && (
              <button 
                onClick={resetFilters}
                className="text-primary hover:underline font-bold"
              >
                Clear all search parameters
              </button>
            )}
          </div>

          {filteredScholarships.length === 0 ? (
            <EmptyState onReset={resetFilters} className="mt-8" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredScholarships.map((schol) => (
                <ScholarshipCard key={schol.id} scholarship={schol} />
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
            className="w-80 bg-white h-full p-6 overflow-y-auto flex flex-col gap-6 z-50 animate-slide-in-left"
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
              <ScholarshipFilters
                filters={filters}
                onChange={setFilters}
                onReset={resetFilters}
                availableCategories={availableCategories}
                availableDegrees={availableDegrees}
              />
            </div>
            
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl text-sm mt-auto shadow-md"
            >
              Apply Filter Parameters ({filteredScholarships.length})
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default function ScholarshipsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center font-semibold text-muted">
        Loading scholarship database...
      </div>
    }>
      <ScholarshipsContent />
    </Suspense>
  );
}
