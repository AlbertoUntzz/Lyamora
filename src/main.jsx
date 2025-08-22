import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'


const router = createBrowserRouter([

  {
    path: "/",
    element:<Hero/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
