import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Catalogo from "./components/Catalogo"

function App() {

  return (
    <div className="font-sans bg-purple-300 text-gray-900 pt-8">
      <Navbar/>
      <Hero/>
      <Catalogo/>
    </div>
  )
}

export default App
