import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToNext = () => {
    const element = document.getElementById('motivacion');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1635272024672-aaf4810e2f47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2NjZXIlMjBmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMGdyZWVuJTIwZ3Jhc3N8ZW58MXx8fHwxNzc3NTE4NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#2d6a42]/90 to-secondary/95"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-[fadeIn_1s_ease-out]">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-white/90 text-sm font-medium">Innovación en Medicina Deportiva y Rehabilitación</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            VITAL SOCCER:
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              La Ciencia de la Estabilidad
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sistema avanzado de Realidad Virtual y tecnología háptica diseñado para el entrenamiento de precisión en traslados médicos y la recuperación de la coordinación motora
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToNext}
              className="group px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Conocer más
            </button>
            <button
              onClick={() => document.getElementById('haptico')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Sistema Háptico
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80 hover:text-white transition-colors"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
