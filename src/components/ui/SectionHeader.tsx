import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  center = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto max-w-2xl' : 'text-left'} ${className}`}>
      
      {/* Small Badge Pill */}
      {badge && (
        <span className="inline-block px-3.5 py-1 bg-cream/70 text-primary-dark border border-beige rounded-full text-xs font-bold font-sans uppercase tracking-widest mb-3.5 shadow-xs">
          {badge}
        </span>
      )}
      
      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-charcoal tracking-tight leading-tight">
        {title}
      </h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-muted font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      
    </div>
  );
};
export default SectionHeader;
