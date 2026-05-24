import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'charcoal' | 'outline' | 'success' | 'warning' | 'danger';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-150';
  
  const variants = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-cream text-primary-dark border border-beige',
    accent: 'bg-orange-500/10 text-orange-600 border border-orange-500/20',
    charcoal: 'bg-charcoal text-white',
    outline: 'bg-transparent border border-gray-300 text-charcoal hover:border-primary hover:text-primary',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border border-yellow-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
export default Badge;
