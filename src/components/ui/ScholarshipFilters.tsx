import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export interface ScholFilterState {
  category: string;
  degreeLevel: string;
  funding: string;
  applyFromAbroad: boolean;
}

interface ScholarshipFiltersProps {
  filters: ScholFilterState;
  onChange: (filters: ScholFilterState) => void;
  onReset: () => void;
  availableCategories: string[];
  availableDegrees: string[];
}

export const ScholarshipFilters: React.FC<ScholarshipFiltersProps> = ({
  filters,
  onChange,
  onReset,
  availableCategories,
  availableDegrees
}) => {
  const handleSelectChange = (key: keyof ScholFilterState, value: any) => {
    onChange({
      ...filters,
      [key]: value
    });
  };

  const handleToggleChange = (key: keyof ScholFilterState) => {
    onChange({
      ...filters,
      [key]: !filters[key] as any
    });
  };

  return (
    <div className="bg-cream/20 border border-cream rounded-3xl p-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-cream">
        <div className="flex items-center gap-2 text-charcoal font-bold font-display">
          <Filter className="w-5 h-5 text-primary" />
          <span>Filter Scholarships</span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-muted hover:text-primary font-semibold flex items-center gap-1 transition-colors"
          title="Reset filters"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Funding Coverage Filter */}
      <div className="space-y-2">
        <label className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Tuition Coverage
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['All', 'Full', 'Partial'].map((f) => (
            <button
              key={f}
              onClick={() => handleSelectChange('funding', f === 'All' ? '' : f)}
              className={`py-2 px-1 text-xs font-semibold rounded-xl border text-center transition-all ${
                (f === 'All' && !filters.funding) || filters.funding === f
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-beige text-charcoal hover:border-primary/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label htmlFor="category-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Scholarship Category
        </label>
        <select
          id="category-select"
          value={filters.category}
          onChange={(e) => handleSelectChange('category', e.target.value)}
          className="w-full bg-white border border-beige rounded-xl py-2 px-3 text-xs font-semibold text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
        >
          <option value="">All Categories</option>
          {availableCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Degree Level Filter */}
      <div className="space-y-2">
        <label htmlFor="degree-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Degree Level Eligibility
        </label>
        <select
          id="degree-select"
          value={filters.degreeLevel}
          onChange={(e) => handleSelectChange('degreeLevel', e.target.value)}
          className="w-full bg-white border border-beige rounded-xl py-2 px-3 text-xs font-semibold text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
        >
          <option value="">All Degrees</option>
          {availableDegrees.map((deg) => (
            <option key={deg} value={deg}>{deg}</option>
          ))}
        </select>
      </div>

      {/* Toggle Options */}
      <div className="space-y-3 pt-2">
        {/* Apply From Abroad Toggle */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.applyFromAbroad}
            onChange={() => handleToggleChange('applyFromAbroad')}
            className="w-4 h-4 text-primary focus:ring-primary border-beige rounded-sm accent-primary cursor-pointer"
          />
          <span className="text-xs font-semibold text-charcoal group-hover:text-primary transition-colors">
            Can Apply From Abroad
          </span>
        </label>
      </div>
    </div>
  );
};
export default ScholarshipFilters;
