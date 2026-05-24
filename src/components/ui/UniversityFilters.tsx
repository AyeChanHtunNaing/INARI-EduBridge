import React from 'react';
import { Filter, RotateCcw } from 'lucide-react';

export interface UniFilterState {
  prefecture: string;
  degreeLevel: string;
  fieldOfStudy: string;
  language: string;
  type: string;
  englishProgramsOnly: boolean;
  scholarshipAvailable: boolean;
}

interface UniversityFiltersProps {
  filters: UniFilterState;
  onChange: (filters: UniFilterState) => void;
  onReset: () => void;
  availablePrefectures: string[];
  availableFields: string[];
  availableDegrees: string[];
}

export const UniversityFilters: React.FC<UniversityFiltersProps> = ({
  filters,
  onChange,
  onReset,
  availablePrefectures,
  availableFields,
  availableDegrees
}) => {
  const handleSelectChange = (key: keyof UniFilterState, value: any) => {
    onChange({
      ...filters,
      [key]: value
    });
  };

  const handleToggleChange = (key: keyof UniFilterState) => {
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
          <span>Filter Universities</span>
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

      {/* University Type Filter */}
      <div className="space-y-2">
        <label className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          University Type
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['All', 'National', 'Private'].map((t) => (
            <button
              key={t}
              onClick={() => handleSelectChange('type', t === 'All' ? '' : t)}
              className={`py-2 px-1 text-xs font-semibold rounded-xl border text-center transition-all ${
                (t === 'All' && !filters.type) || filters.type === t
                  ? 'bg-primary border-primary text-white shadow-sm'
                  : 'bg-white border-beige text-charcoal hover:border-primary/30'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Location / Prefecture Filter */}
      <div className="space-y-2">
        <label htmlFor="prefecture-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Location / Prefecture
        </label>
        <select
          id="prefecture-select"
          value={filters.prefecture}
          onChange={(e) => handleSelectChange('prefecture', e.target.value)}
          className="w-full bg-white border border-beige rounded-xl py-2 px-3 text-xs font-semibold text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
        >
          <option value="">All Regions</option>
          {availablePrefectures.map((pref) => (
            <option key={pref} value={pref}>{pref}</option>
          ))}
        </select>
      </div>

      {/* Degree Level Filter */}
      <div className="space-y-2">
        <label htmlFor="degree-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Degree Level Offered
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

      {/* Field of Study Filter */}
      <div className="space-y-2">
        <label htmlFor="field-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Field of Study
        </label>
        <select
          id="field-select"
          value={filters.fieldOfStudy}
          onChange={(e) => handleSelectChange('fieldOfStudy', e.target.value)}
          className="w-full bg-white border border-beige rounded-xl py-2 px-3 text-xs font-semibold text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
        >
          <option value="">All Fields</option>
          {availableFields.map((field) => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>
      </div>

      {/* Language of Instruction */}
      <div className="space-y-2">
        <label htmlFor="language-select" className="block text-xs font-bold font-display uppercase tracking-wider text-charcoal">
          Instruction Language
        </label>
        <select
          id="language-select"
          value={filters.language}
          onChange={(e) => handleSelectChange('language', e.target.value)}
          className="w-full bg-white border border-beige rounded-xl py-2 px-3 text-xs font-semibold text-charcoal focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
        >
          <option value="">All Languages</option>
          <option value="English">English Medium</option>
          <option value="Japanese">Japanese Medium</option>
        </select>
      </div>

      {/* Toggle Options */}
      <div className="space-y-3 pt-2">
        {/* English Programs Toggle */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.englishProgramsOnly}
            onChange={() => handleToggleChange('englishProgramsOnly')}
            className="w-4 h-4 text-primary focus:ring-primary border-beige rounded-sm accent-primary cursor-pointer"
          />
          <span className="text-xs font-semibold text-charcoal group-hover:text-primary transition-colors">
            English-taught Degrees Only
          </span>
        </label>

        {/* Scholarships Available Toggle */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.scholarshipAvailable}
            onChange={() => handleToggleChange('scholarshipAvailable')}
            className="w-4 h-4 text-primary focus:ring-primary border-beige rounded-sm accent-primary cursor-pointer"
          />
          <span className="text-xs font-semibold text-charcoal group-hover:text-primary transition-colors">
            Scholarship Schemes Available
          </span>
        </label>
      </div>
    </div>
  );
};
export default UniversityFilters;
