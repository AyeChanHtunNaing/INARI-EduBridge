import React from 'react';
import { SearchX, RefreshCcw } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  onReset?: () => void;
  resetLabel?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Matches Found",
  message = "We couldn't find any listings matching your current search parameters or filter selections. Try adjusting your fields or resetting them completely.",
  onReset,
  resetLabel = "Clear All Filters",
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-12 bg-cream/15 rounded-3xl border-2 border-dashed border-beige max-w-lg mx-auto ${className}`}>
      <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-primary mb-5 shadow-inner">
        <SearchX className="w-8 h-8 stroke-[1.5]" />
      </div>
      
      <h3 className="text-xl font-bold font-display text-charcoal mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted leading-relaxed mb-6 font-medium max-w-sm">
        {message}
      </p>
      
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          <RefreshCcw className="w-4 h-4" />
          <span>{resetLabel}</span>
        </button>
      )}
    </div>
  );
};
export default EmptyState;
