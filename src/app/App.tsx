import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { Footer } from './components/Footer';
import {
  Target,
  Lightbulb,
  TrendingUp,
  Zap,
  Brain,
  BookOpen,
  Microscope,
  Settings,
  Hand,
  CheckCircle,
  Users,
  Trophy,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="motivacion" title="Motivación y Justificación" icon={<Lightbulb className="text-secondary" size={32} />}>
        <div className="space-y-10 text-gray-700">

          {/* Párrafos en dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-7 bg-gradient-to-br from-primary/5 to-white rounded-2xl border border-primary/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mt-1">
                <Target className="text-primary" size={20} />
              </div>
              <p className="text-base leading-relaxed">
                En eventos de alta intensidad como el <strong>Mundial 2026</strong>, la diferencia entre una recuperación exitosa y una lesión permanente radica en los primeros minutos de atención. Un movimiento brusco o un giro mal calculado puede agravar traumatismos cervicales o fracturas, poniendo en riesgo la integridad del paciente.
              </p>
            </div>
            <div className="flex gap-4 p-7 bg-gradient-to-br from-secondary/5 to-white rounded-2xl border border-secondary/10">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mt-1">
                <Zap className="text-secondary" size={20} />
              </div>
              <p className="text-base leading-relaxed">
                <strong>Vital Soccer</strong> nace para eliminar el riesgo del entrenamiento en el mundo real. Mediante Realidad Virtual y retroalimentación háptica, recreamos la inestabilidad del terreno y el estrés del estadio, entrenando paramédicos y sirviendo como herramienta de <strong>rehabilitación neuro-motriz</strong>.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-8 bg-white rounded-2xl border-t-4 border-secondary shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500" />
              <div className="text-6xl font-black text-secondary mb-2">85%</div>
              <div className="w-10 h-1 bg-secondary rounded-full mb-4" />
              <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-2">Estabilidad en el traslado</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Los usuarios aprenden a compensar el peso de la camilla de forma casi instintiva.</p>
            </div>
            <div className="relative p-8 bg-white rounded-2xl border-t-4 border-secondary shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500" />
              <div className="text-6xl font-black text-secondary mb-2">40%</div>
              <div className="w-10 h-1 bg-secondary rounded-full mb-4" />
              <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-2">Precisión motora</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Especialmente útil en pacientes de rehabilitación que necesitan reconectar estímulos sensoriales con movimientos físicos.</p>
            </div>
            <div className="relative p-8 bg-white rounded-2xl border-t-4 border-secondary shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-secondary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500" />
              <div className="text-6xl font-black text-secondary mb-2">60%</div>
              <div className="w-10 h-1 bg-secondary rounded-full mb-4" />
              <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider mb-2">Reducción de lesiones secundarias</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Al entrenar en un entorno seguro, se garantiza que el paramédico no cometerá errores que dañen más al paciente en la vida real.</p>
            </div>
          </div>

        </div>
      </Section>

      <Section id="descripcion" title="Descripción del Problema" icon={<Target className="text-secondary" size={32} />}>
        <div className="space-y-8 text-gray-700">
          <p className="text-base leading-relaxed max-w-3xl mx-auto text-center text-gray-600">
            En eventos masivos como el <strong className="text-primary">Mundial 2026</strong>, los accidentes en cancha requieren atención inmediata. El traslado manual en camilla es un desafío crítico: el peso del jugador, la velocidad y las irregularidades del césped pueden causar movimientos bruscos que agravan lesiones cervicales. <strong>Practicar estos traslados en la vida real es arriesgado y costoso.</strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problemas */}
            <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-red-100 bg-red-50">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                  <Target className="text-red-500" size={16} />
                </div>
                <h4 className="font-bold text-red-900 text-base">Problemas Identificados</h4>
              </div>
              <ul className="p-6 space-y-4">
                {[
                  { title: 'Riesgo de agravamiento', desc: 'Movimientos bruscos durante el traslado pueden empeorar lesiones del paciente.' },
                  { title: 'Dificultad de coordinación', desc: 'El personal médico requiere sincronización perfecta para mantener el equilibrio.' },
                  { title: 'Entorno de alto estrés', desc: 'La presión del estadio y factores físicos dificultan la toma de decisiones.' },
                  { title: 'Falta de herramientas', desc: 'Escasez de sistemas con biofeedback táctil para recuperar el control motor.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-400 mt-2" />
                    <div>
                      <span className="font-semibold text-red-800 text-sm">{item.title}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Solución */}
            <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-green-50 to-white overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-secondary/20 bg-green-50">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <CheckCircle className="text-secondary" size={16} />
                </div>
                <h4 className="font-bold text-primary text-base">Nuestra Solución</h4>
              </div>
              <ul className="p-6 space-y-4">
                {[
                  { title: 'Simulación Háptica Realista', desc: 'Sistema físico que envía vibraciones según el balance de la camilla.' },
                  { title: 'Entrenamiento Inmersivo VR', desc: 'Escenarios 3D realistas para practicar en condiciones críticas sin riesgo.' },
                  { title: 'Biofeedback para Rehabilitación', desc: 'Sensores y motores de vibración para entrenar coordinación y equilibrio.' },
                  { title: 'Prevención de Errores', desc: 'Sistema de monitoreo que alerta sobre inclinaciones peligrosas en tiempo real.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="font-semibold text-primary text-sm">{item.title}: </span>
                      <span className="text-gray-600 text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="objetivos" title="Objetivos del Proyecto" icon={<Trophy className="text-secondary" size={32} />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Target size={28} />}
            title="Entrenamiento y Seguridad Médica"
            description="Desarrollar una simulación de realidad virtual inmersiva enfocada en el entrenamiento de paramédicos para el traslado seguro de jugadores lesionados, garantizando la estabilidad del paciente mediante tecnología háptica."
          />
          <FeatureCard
            icon={<Zap size={28} />}
            title="Biofeedback en Tiempo Real"
            description="Implementar un sistema físico que proporcione respuesta táctil inmediata según el balance de la camilla, entrenando la coordinación motora para evitar movimientos bruscos que agraven lesiones."
          />
          <FeatureCard
            icon={<Brain size={28} />}
            title="Soporte en Rehabilitación"
            description="Utilizar la estimulación multisensorial para asistir en procesos de rehabilitación motriz, obligando al usuario a coordinar sus movimientos y equilibrio mediante vibraciones y resistencia física."
          />
          <FeatureCard
            icon={<Users size={28} />}
            title="Inmersión Total Segura"
            description="Integrar visores de realidad virtual para recrear escenarios críticos del Mundial 2026, permitiendo practicar situaciones de alto riesgo de forma segura y controlada desde cualquier lugar."
          />
          <FeatureCard
            icon={<TrendingUp size={28} />}
            title="Reducción de Riesgos"
            description="Evaluar la capacidad de respuesta y estabilidad del usuario bajo presión, con la meta de reducir lesiones secundarias durante evacuaciones reales en eventos deportivos masivos."
          />
          <FeatureCard
            icon={<Settings size={28} />}
            title="Dificultad Evolutiva"
            description="Ajustar dinámicamente los niveles de inestabilidad y factores externos (como el cansancio del paramédico o el estado del césped) para personalizar el entrenamiento según la experiencia del usuario."
          />
        </div>
      </Section>

      <Section
        id="objetivos-empresa"
        title="Objetivos y Metas de XR NEXUS"
        icon={<Target className="text-white" size={32} />}
        variant="highlight"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            variant="highlight"
            icon={<Lightbulb size={28} />}
            title="Innovación Médica Inmersiva"
            description="Posicionarnos como líderes en la creación de simuladores de realidad virtual con tecnología háptica para entrenar la atención de emergencias médicas en eventos deportivos, ayudando a que el personal reaccione mejor bajo situaciones de estrés."
          />
          <FeatureCard
            variant="highlight"
            icon={<Users size={28} />}
            title="Seguridad en el Deporte"
            description="Reducir significativamente las lesiones secundarias durante las evacuaciones en estadios mediante el entrenamiento preventivo, garantizando que cada jugador herido reciba un traslado seguro y estable."
          />
          <FeatureCard
            variant="highlight"
            icon={<TrendingUp size={28} />}
            title="Expansión de Capacitación"
            description="Comercializar hardware háptico especializado y programas de capacitación rumbo al Mundial 2026, estableciendo alianzas con organismos de protección civil y servicios de emergencia internacionales."
          />
          <FeatureCard
            variant="highlight"
            icon={<Trophy size={28} />}
            title="Evolución Terapéutica"
            description="Expandir nuestras simulaciones a otras áreas de primeros auxilios y procesos de rehabilitación motriz, utilizando el biofeedback táctil para mejorar la calidad de vida y la recuperación de los pacientes."
          />
        </div>
      </Section>

      <Section id="marco-teorico" title="Marco Teórico" icon={<Microscope className="text-secondary" size={32} />}>
        <div className="space-y-8 text-gray-700">
          <p className="text-base leading-relaxed max-w-3xl mx-auto text-center text-gray-600">
            El sistema <strong className="text-primary">Vital Soccer</strong> se fundamenta en principios científicos que combinan la realidad virtual, la tecnología háptica y la medicina de emergencias para mejorar la respuesta fisiológica y motriz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col gap-3 bg-white border-2 border-gray-100 p-7 rounded-2xl hover:border-secondary hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="text-secondary" size={18} />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Inmersión y Respuesta Real</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                El objetivo de la Realidad Virtual en nuestro sistema es engañar al cerebro para que procese el entorno digital como si fuera real. Esto permite activar respuestas fisiológicas auténticas en el usuario, facilitando la práctica segura en escenarios de emergencia que en la vida real serían peligrosos o costosos.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-white border-2 border-gray-100 p-7 rounded-2xl hover:border-secondary hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Hand className="text-secondary" size={18} />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Biofeedback Táctil Avanzado</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                La tecnología háptica proporciona retroalimentación física mediante vibraciones y resistencia. En el ámbito médico, se ha demostrado que estos sistemas ayudan a mejorar habilidades motoras y proporcionan sensaciones táctiles esenciales para la coordinación precisa durante el traslado de pacientes.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-white border-2 border-gray-100 p-7 rounded-2xl hover:border-secondary hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="text-secondary" size={18} />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Formación Clínica Inmersiva</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                Respaldado por estudios (como los publicados en BMC Medicine), la realidad virtual permite a los estudiantes y profesionales practicar escenarios de emergencia inmersivos. Enfrentarse a situaciones críticas en un entorno virtual ayuda a desarrollar la calma y la toma de decisiones bajo presión.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-white border-2 border-gray-100 p-7 rounded-2xl hover:border-secondary hover:shadow-md transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-secondary" size={18} />
              </div>
              <h4 className="font-bold text-lg text-gray-900">Rehabilitación y Control Motor</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                El sistema utiliza sensores de movimiento y motores de vibración para obligar al usuario a mantener el equilibrio. Esta interacción constante entre el estímulo físico y la respuesta del usuario es clave para procesos de rehabilitación neuro-motriz y la sincronización perfecta en equipo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="metodologia" title="Metodología" icon={<Settings className="text-secondary" size={32} />}>
        <div className="space-y-8 text-gray-700">
          <p className="text-base leading-relaxed max-w-3xl mx-auto text-center text-gray-600">
            El desarrollo e implementación de <strong className="text-primary">Vital Soccer</strong> se divide en cuatro etapas principales que integran diseño digital, programación avanzada y construcción de hardware especializado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {[
              { n: 1, title: 'Entorno Virtual', desc: 'Creación del escenario inmersivo del estadio y los elementos interactivos, asegurando que el entorno sea realista para el contexto del Mundial 2026.' },
              { n: 2, title: 'Programación de la Simulación', desc: 'Desarrollo de la mecánica de inclinación y física de la camilla, con respuesta dinámica a los movimientos del usuario.' },
              { n: 3, title: 'Sistema Háptico', desc: 'Construcción del dispositivo físico con Arduino Nano, giroscopios, acelerómetros y motores de vibración para retroalimentación física real.' },
              { n: 4, title: 'Pruebas y Calibración', desc: 'Ajuste de sensores y la intensidad de vibración para lograr interacción perfecta entre las acciones reales del usuario y la simulación virtual.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary transition-all duration-300">
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">
                  {n}
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                {n < 4 && (
                  <div className="hidden md:block absolute -right-2 top-10 w-4 h-0.5 bg-secondary/30 z-10" />
                )}
              </div>
            ))}
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-7 rounded-r-2xl">
            <h4 className="font-bold text-lg text-primary mb-3">Enfoque en Seguridad y Rehabilitación</h4>
            <p className="text-sm leading-relaxed text-gray-600">
              Adoptamos un modelo de validación clínica que prioriza la estabilidad del paciente. Cada iteración del proyecto se enfoca en perfeccionar cómo el usuario percibe el equilibrio, permitiendo que la herramienta sea efectiva tanto para <strong>paramédicos en situaciones de estrés</strong> como para personas en procesos de <strong>rehabilitación motriz</strong>.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="haptico"
        title="Sistema Háptico"
        icon={<Hand className="text-white" size={32} />}
        variant="highlight"
      >
        <div className="space-y-8">
          <p className="text-xl leading-relaxed text-center max-w-3xl mx-auto text-white/90">
            El corazón de Vital Soccer es un dispositivo físico diseñado para que el usuario sienta la inestabilidad de la camilla, permitiendo un entrenamiento de equilibrio y coordinación sin precedentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <FeatureCard
              variant="highlight"
              icon={<Zap size={28} />}
              title="Componentes de Precisión"
              description="El sistema utiliza un Arduino Nano como unidad central, integrando un giroscopio y acelerómetro para detectar cualquier cambio de inclinación en la camilla física con total exactitud."
            />
            <FeatureCard
              variant="highlight"
              icon={<Brain size={28} />}
              title="Motores de Vibración"
              description="Implementamos motores de vibración que responden en tiempo real. Si la camilla se inclina, el dispositivo vibra con mayor intensidad hacia ese lado, obligando al usuario a compensar el peso para estabilizar al paciente."
            />
            <FeatureCard
              variant="highlight"
              icon={<Target size={28} />}
              title="Sensado de Movimiento"
              description="El sensor detecta la respuesta del usuario ante la inestabilidad. Una vez que el usuario logra equilibrar la camilla, la vibración se detiene, confirmando que el traslado se realiza de forma segura."
            />
            <FeatureCard
              variant="highlight"
              icon={<TrendingUp size={28} />}
              title="Apoyo en Rehabilitación"
              description="Este hardware está diseñado no solo para paramédicos, sino como una herramienta de apoyo en procesos de rehabilitación motriz, donde el paciente recibe estímulos físicos que lo guían para recuperar su coordinación y control fino."
            />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
