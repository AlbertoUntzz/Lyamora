import React from 'react'
import blanconegro from '../assets/blanconegro.png'
import kitpastel from '../assets/kitpastel.jpg'


export default function Catalogo() {
  return (
   <section id="catalogo" className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-lyamora mb-10">
          Nuestro Catálogo
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Aquí puedes ver algunos ejemplos de termos personalizados que hemos hecho. Cada diseño es único y especial.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={blanconegro} alt="Termo personalizado 1" className="rounded-md mb-4 object-cover h-64 w-full" />
            <h3 className="text-lg font-semibold text-lyamora">Termo con nombre grabado</h3>
            <p className="text-gray-600 text-sm">Diseño limpio, ideal para regalo personal.</p>
          </div>

          {/* Producto 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={kitpastel} alt="Termo personalizado 2" className="rounded-md mb-4 object-cover h-64 w-full" />
            <h3 className="text-lg font-semibold text-lyamora">Termo corporativo</h3>
            <p className="text-gray-600 text-sm">Perfecto para empresas y promociones.</p>
          </div>

          {/* Producto 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src="/ejemplo3.jpg" alt="Termo personalizado 3" className="rounded-md mb-4 object-cover h-64 w-full" />
            <h3 className="text-lg font-semibold text-lyamora">Termo con frase motivacional</h3>
            <p className="text-gray-600 text-sm">Haz tuyo cada día con una frase especial.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
