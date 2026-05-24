import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search universities, scholarships, or majors...",
  className = ''
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted">
        <Search className="w-5 h-5" />
      </div>
      
      {/* Search Input Field */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-11 pr-11 py-3.5 bg-white border border-beige hover:border-primary/40 focus:border-primary rounded-2xl text-charcoal placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/10 text-sm md:text-base font-medium shadow-sm transition-all duration-200"
      />
      
      {/* Clear Button */}
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted hover:text-charcoal transition-colors"
          title="Clear search"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
export default SearchBar;
