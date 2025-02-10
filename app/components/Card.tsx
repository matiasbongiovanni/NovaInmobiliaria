import { Bed, Bath, Square, MapPin, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

interface Property {
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rooms: number;
  bathrooms: number;
  area: number;
  tag?: string;
};

const properties: Property[] = [
  {
      title: "Moderna Casa en Barrio Privado",
      description: "Casa de 3 habitaciones con diseño minimalista, piscina y jardín amplio.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ba036b182015771.65262b2a31e7e.png",
      price: 750000,
      location: "Palermo, Buenos Aires",
      rooms: 3,
      bathrooms: 2,
      area: 180
  },
  {
      title: "Casa en Zona Tranquila",
      description: "Departamento de lujo con balcón panorámico, gimnasio y seguridad 24hs.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4030c4111372859.60007b9c8c7c5.png",
      price: 550000,
      location: "Puerto Madero, Buenos Aires",
      rooms: 2,
      bathrooms: 2,
      area: 95
  },
  {
      title: "Casa en Zona Tranquila",
      description: "Hermosa casa de campo con grandes ventanales, chimenea y amplio terreno.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3f46de116456715.6062731053397.png",
      price: 600000,
      location: "Tigre, Buenos Aires",
      rooms: 4,
      bathrooms: 3,
      area: 250
  }
];

function Card() {
  return (
    <section>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-pallete-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

                {property.tag && (
                  <span className="absolute top-4 left-4 bg-pallete-200 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.tag}
                  </span>
                )}

                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0F0B23] transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{property.description}</p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 text-sm">{property.location}</span>
                </div>

                <div className="mb-6">
                  <p className="text-2xl font-bold text-black">${property.price.toLocaleString("us-US")}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{property.rooms} hab.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{property.bathrooms} baños</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{property.area} m²</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Link
                    href="#"
                    className={cn(
                      "flex-1 text-center py-2.5 rounded-lg text-sm font-medium",
                      "border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors",
                    )}
                  >
                    Ver más
                  </Link>
                  <Link
                    href="#"
                    className={cn(
                      "flex-1 text-center py-2.5 rounded-lg text-sm font-medium",
                      "bg-pallete-300 text-white hover:bg-pallete-400 transition-colors",
                    )}
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Card
