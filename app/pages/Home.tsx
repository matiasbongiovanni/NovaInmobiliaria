"use client"

import { Search, Home, MapPin, Building2, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HomeData {
  title: string
  paragraph: string
  buttonContact: string
  buttonProperties: string
}

const data: HomeData = {
  title: "La casa de tu sueños en un solo click.",
  paragraph:
    "Encontrá tu hogar perfecto sin vueltas. Filtrá fácilmente por ubicación, tamaño y precio. ¡Empezá a buscar hoy mismo!",
  buttonContact: "Contactanos",
  buttonProperties: "Ver propiedades",
}

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pallete-500 to-pallete-700">
      <div
        className="absolute inset-0 z-0 opacity-100 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8ef1ab197760231.6635b69328758.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 min-h-screen flex flex-col justify-between">
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-pallete-200">
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium">Nova Inmobiliaria</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{data.title}</h1>
            <p className="text-lg text-pallete-50/90 max-w-xl">{data.paragraph}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-pallete-300 hover:bg-pallete-200 text-white transition-colors duration-300">
              {data.buttonProperties}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-pallete-300 text-white bg-transparent transition-colors duration-300"
            >
              {data.buttonContact}
            </Button>
          </div>
        </div>

        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-xl md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="relative flex items-center">
              <MapPin className="absolute left-3 h-5 w-5 text-pallete-400" />
              <Input
                type="text"
                placeholder="Ubicación, barrio, etc."
                className="pl-10 bg-white/50 border-pallete-100/20 focus-visible:ring-pallete-300"
              />
            </div>
            <div className="relative flex items-center">
              <Building2 className="absolute left-3 h-5 w-5 text-pallete-400" />
              <Input
                type="text"
                placeholder="Departamento, casa, etc."
                className="pl-10 bg-white/50 border-pallete-100/20 focus-visible:ring-pallete-300"
              />
            </div>
            <div className="relative flex items-center">
              <DollarSign className="absolute left-3 h-5 w-5 text-pallete-400" />
              <Input
                type="text"
                placeholder="Rango de precio"
                className="pl-10 bg-white/50 border-pallete-100/20 focus-visible:ring-pallete-300"
              />
            </div>
            <Button className="w-full bg-pallete-400 hover:bg-pallete-300 text-white transition-colors duration-300">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

