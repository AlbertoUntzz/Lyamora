import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
         <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
            <h1 class='text-2xl font-bold text-lyamora'>Lyamora</h1>
            <ul className='felx gap-6 text-gray-700 font-medium'>
                <li><a href="#catalogo" className='hover:text-lyamora'>Catalogo</a></li>        
                <li><a href="#personaliza" className='hover:text-lyamora'>Personaliza</a></li>        
                <li><a href="#contacto" className='hover:text-lyamora'>Contacto</a></li>        
            </ul>      
         </div>
    </nav>
   
  )
}
