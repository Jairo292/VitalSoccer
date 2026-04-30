import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
}

export function FeatureCard({ icon, title, description, variant = 'default' }: FeatureCardProps) {
  const isHighlight = variant === 'highlight';

  return (
    <div
      className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isHighlight
          ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15'
          : 'bg-white border border-gray-200 hover:border-secondary shadow-lg'
      }`}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform group-hover:scale-110 ${
        isHighlight ? 'bg-white/20' : 'bg-secondary/10 text-secondary'
      }`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold mb-3 ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${isHighlight ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
