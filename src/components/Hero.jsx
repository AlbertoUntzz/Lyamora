import React from 'react'
import termo_muestra from '../assets/termo_muestra.png'
import '../styles/animation.css'
import Logo from '../assets/Logo.gif'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-300 to-purple-100 px-6">
      <Link to="/">
        <div>
          <img 
            src={Logo} 
            alt="Logo" 
            className="fixed top-4 left-3 h-30 w-auto"
          />
        </div>
      </Link> 

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-900 leading-tight">
            Tu diseño,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              a tu estilo
            </span>
          </h1>
          <p className="mt-4 text-lg text-purple-800/80">
            Crea un termo único con tu nombre, logo o frase especial.  
            Calidad profesional en acero inoxidable.
          </p>
          <a href="#catalogo">
            <button className="mt-6 px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 hover:scale-105 transition transform">
              Ver Catálogo
            </button>
          </a>
        </div>

        <div className="flex justify-center animate-fadeIn delay-200">
          <img 
            src={termo_muestra} 
            alt="Termo personalizado"
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
