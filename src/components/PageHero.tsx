import React from 'react';

interface PageHeroProps {
  image: string;
  label?: string;
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ image, label, title, description }) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] max-h-[560px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 w-full">
        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[#00A896] mb-3">
            {label}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
