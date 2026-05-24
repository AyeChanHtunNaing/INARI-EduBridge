import React from 'react';

interface LoadingStateProps {
  type?: 'card-grid' | 'details' | 'list';
  count?: number;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ 
  type = 'card-grid', 
  count = 6, 
  className = '' 
}) => {
  if (type === 'details') {
    return (
      <div className={`max-w-4xl mx-auto space-y-6 animate-pulse ${className}`}>
        <div className="h-10 bg-gray-200 rounded-lg w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-64 bg-gray-200 rounded-2xl w-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 bg-gray-200 rounded-xl md:col-span-2"></div>
          <div className="h-32 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className={`space-y-4 animate-pulse ${className}`}>
        {Array.from({ length: count }).map((_, idx) => (
          <div key={idx} className="p-4 border border-cream rounded-2xl flex items-center gap-4 bg-white">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="w-20 h-8 bg-gray-200 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="bg-white border border-cream rounded-3xl p-5 space-y-4 shadow-xs">
          <div className="h-48 bg-gray-200 rounded-2xl w-full"></div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3.5 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="h-8 bg-gray-200 rounded-full w-24"></div>
            <div className="h-8 bg-gray-200 rounded-lg w-20"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LoadingState;
