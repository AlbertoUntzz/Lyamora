import React from 'react'

export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-moraLight to-white'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4 text-purple-900'>
            Tu diseño, a tu estilo
        </h1>
        <p className='text-lg md:text-xl max-w-xl mb-6 text-gray-700'>
            Crea un termo único con tu nombre, logo o frase especial. Calidad profesional en acero inoxidable.
        </p>
        <a href="Catalogo.jsx">
            <button className='bg-lyamora text-white px-6 py-3 rounded-full shdow hover:bg-purple-800 transition'>
                Ver Catalogo
            </button>
        </a>
    </section>
    
  )
}
