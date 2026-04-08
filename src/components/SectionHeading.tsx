import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, description, align = 'center', light = false }) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {label && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-3 ${light ? 'text-[#00A896]' : 'text-[#00A896]'}`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight ${light ? 'text-white' : 'text-[#0A2540]'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
