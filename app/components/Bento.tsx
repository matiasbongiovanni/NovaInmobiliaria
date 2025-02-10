import React from 'react';
import { ArrowRight, TrendingUp, Clock, PaintbrushIcon as Paint, BarChartIcon as ChartBar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function BentoSection() {
  const bentoItems: BentoItem[] = [
    {
      title: "Rentabilidad",
      description: "Maximiza tu inversión con retornos superiores",
      icon: <TrendingUp className="w-6 h-6" />,
      className: "md:row-span-2 bg-pallete-400/80 hover:bg-pallete-300/80"
    },
    {
      title: "Tiempo",
      description: "Precios preferenciales en etapa temprana",
      icon: <Clock className="w-6 h-6" />,
      className: "md:col-span-2 bg-pallete-300/80 hover:bg-pallete-200/80"
    },
    {
      title: "Personalización",
      description: "Adapta la propiedad a tus necesidades",
      icon: <Paint className="w-6 h-6" />,
      className: "bg-pallete-200/80 hover:bg-pallete-100/80"
    },
    {
      title: "Valorización",
      description: "Benefíciate del incremento post-construcción",
      icon: <ChartBar className="w-6 h-6" />,
      className: "bg-pallete-400/80 hover:bg-pallete-300/80"
    },
  ];

  return (
    <section className="relative bg-pallete-500 min-h-[500px] w-[90%] mx-auto mt-12 p-8 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pallete-300/20 to-transparent" />
      
      <div className="relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-white text-4xl font-extrabold leading-tight mb-6">
            ¡Adelantate al mercado! Invertí en propiedades en pozo y obtené la mejor rentabilidad.
          </h2>
          <p className="text-pallete-100 mb-8">
            Descubre las ventajas de invertir en propiedades en desarrollo y asegura tu futuro financiero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8 h-[400px]">
          {bentoItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-6 rounded-xl transition-all duration-300",
                "transform hover:scale-[1.02]",
                "border border-pallete-300/20",
                "flex flex-col justify-between",
                "p-3",
                item.className
              )}
            >
              <div>
                <div className="p-2 inline-block rounded-lg bg-pallete-100/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-pallete-100">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 text-pallete-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="group px-6 py-3 bg-pallete-300 text-white rounded-lg font-semibold 
                           transition-all duration-300 hover:bg-pallete-200 flex items-center gap-2">
            ¡Contáctanos para más información!
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a href="#learn-more" className="text-pallete-100 hover:text-white transition-colors">
            Conoce más sobre el proceso →
          </a>
        </div>
      </div>
    </section>
  );
}
