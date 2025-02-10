type Props = {}

function About({}: Props) {
  return (
    <section>
        <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-10 gap-4">
        <div className="col-span-7 bg-pallete-500 p-4 rounded-lg">
  <span className="text-pallete-100 text-sm mt-4">
    Desde 2010 ayudando a nuestros clientes a encontrar su hogar ideal.
  </span>

  <h3 className="font-bold text-lg text-pallete-50">Nuestra Historia</h3>

  <p className="text-pallete-200 text-sm mt-1">
    NOVA Inmobiliaria nació de un sueño: crear un espacio donde las personas encontraran el hogar ideal, 
    ese lugar donde construir sus historias y hacer realidad sus aspiraciones. Tres jóvenes emprendedores, 
    con una visión clara y una pasión compartida por el sector inmobiliario, unieron sus fuerzas para dar vida a este proyecto. 
    Desde el primer día, nos hemos esforzado por ofrecer un servicio personalizado y de calidad, entendiendo que cada cliente es único 
    y tiene necesidades específicas. Hoy, con años de experiencia y miles de sueños cumplidos, seguimos trabajando con la misma 
    ilusión y compromiso que nos impulsaron a iniciar este camino.
  </p>
</div>

<div className="col-span-3 p-4 bg-pallete-600 rounded-lg">
  <p className="text-pallete-100 text-sm mt-4">
    Essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
</div>

        </div>
        </div>
    </section>
  )
}

export default About