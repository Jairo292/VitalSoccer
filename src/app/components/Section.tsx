import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'default' | 'highlight';
}

export function Section({ id, title, children, icon, variant = 'default' }: SectionProps) {
  const isHighlight = variant === 'highlight';

  return (
    <section
      id={id}
      className={`py-20 ${isHighlight ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {icon && (
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
              isHighlight ? 'bg-white/10 backdrop-blur-sm' : 'bg-secondary/10'
            }`}>
              {icon}
            </div>
          )}
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isHighlight ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
          <div className={`w-24 h-1 mx-auto rounded-full ${isHighlight ? 'bg-white/30' : 'bg-secondary'}`}></div>
        </div>

        <div className={`prose prose-lg max-w-none ${isHighlight ? 'prose-invert' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  );
}
