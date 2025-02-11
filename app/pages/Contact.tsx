import React from 'react'

interface Props { 
  name: string;
  email: string;
  phone: string;
  message: string;
}

function Contact({name, email, phone, message}: Props) {
  return (
    <section className="min-h-[400px] py-12 mb-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-2xl font-bold mb-2">Contáctanos</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Estamos para ayudarte a encontrar la propiedad ideal para tu inversión. Contamos con un equipo de profesionales listos para atenderte.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type='text' 
                placeholder='Nombre'
                value={name}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pallete-200 text-sm" 
              />
              <input 
                type='text' 
                placeholder='Email'
                value={email}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pallete-200 text-sm"
              />
              <input 
                type='text' 
                placeholder='Telefono'
                value={phone}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pallete-200 text-sm"
              />
              <textarea
                placeholder='Consulta'
                value={message}
                rows={3}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pallete-200 text-sm"
              />
              <button className='bg-pallete-400 text-white px-4 py-2 rounded-lg hover:bg-pallete-500 transition-colors text-sm'>
                Enviar
              </button>
            </div>
          </div>
          <div className="w-full h-[400px] md:h-full rounded-lg shadow-xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.515524414416!2d-58.43376422514887!3d-34.56582005549626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5bb9cc8d1eb%3A0xc2f736f4d8d45c73!2sAv.%20del%20Libertador%204567%2C%20C1426BWG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739000427250!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact