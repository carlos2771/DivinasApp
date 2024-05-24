import { Routes, Route } from "react-router-dom"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/LandingPage'
import ServiciosPage from "./pages/ServiciosPage."
import ProductosMain from "./pages/Productos/ProductosMain"





function App() {
 

  return (
    <div>

    <Navbar/>

    <Routes > 
    <Route path="/" element={<LandingPage/>} />
    <Route path="/servicios" element={<ServiciosPage/>} />
    <Route path="/productos" element={<ProductosMain/>} />
     </Routes>
     
    <Footer/>
    </div>
  )
}

export default App
