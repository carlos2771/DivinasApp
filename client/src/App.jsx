import { Routes, Route } from "react-router-dom"
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LandingPage from './pages/LandingPage'
import ServiciosPage from "./pages/ServiciosPage."

import { ProductosProvider } from "./context/ProductosContext"
import ProductosPage from "./pages/Productos/ProductosPage"
import ProductosUñasPage from "./pages/Productos/ProductosUñasPage"
import ProductosBellezaPage from "./pages/Productos/ProductosBellezaPage"
import Formulario from "./pages/Productos/FormProductos"



function App() {
 

  return (
    <div className="all-container">

    <Navbar/>
    <ProductosProvider>

    <Routes > 
    <Route path="/" element={<LandingPage/>} />
    
    <Route path="/servicios" element={<ServiciosPage/>} />
    <Route path="/Formulario" element={<Formulario/>} />
    <Route path="/productosCabello" element={<ProductosPage/>} />
    <Route path="/productosUñas" element={<ProductosUñasPage/>} />
    <Route path="/productosBelleza" element={<ProductosBellezaPage/>} />
     </Routes>
     
    </ProductosProvider>
    <Footer />
    </div>
  )
}

export default App
