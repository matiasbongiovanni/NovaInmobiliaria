import { KeyRound, LockKeyhole, Phone, House, ChartNoAxesCombined } from "lucide-react"

export default function Information() {
  const data = [
    {
      icon: <LockKeyhole className="w-6 h-6 text-pallete-200" />,
      title: "Seguridad Garantizada",
      description: "Tus datos y transacciones están protegidos con nosotros.",
    },
    {
      icon: <KeyRound className="w-6 h-6 text-pallete-200" />,
      title: "Acceso Exclusivo",
      description: "Descubre propiedades únicas seleccionadas especialmente para vos.",
    },
    {
      icon: <Phone className="w-6 h-6 text-pallete-200" />,
      title: "Asesoría Personalizada",
      description: "Nuestro equipo está listo para atender tus consultas.",
    },
    {
      icon: <House className="w-6 h-6 text-pallete-200" />,
      title: "Propiedades de Calidad",
      description: "Encontrá casas y departamentos con altos estándares de calidad.",
    },
    {
      icon: <ChartNoAxesCombined className="w-6 h-6 text-pallete-200" />,
      title: "Análisis de Mercado",
      description: "Reportes que te ayudan a tomar decisiones importantes estando seguro.",
    },
  ];  

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Por qué nos caracterizamos nosotros.</h2>
          <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          Encuentra el hogar ideal con el mejor asesoramiento y las mejores oportunidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.map((data, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-pallete-50 flex items-center justify-center group-hover:bg-pallete-100 transition-colors duration-300">
                {data.icon}
              </div>
              <h3 className="font-semibold mb-2 text-gray-900">{data.title}</h3>
              <p className="text-sm text-gray-500">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}