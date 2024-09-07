import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-primary sticky top-0 z-50">
      <nav className="flex items-center justify-between w-full px-60 relative ">
        <div className="ml-24 space-x-24">
          <Link to="/" className="text-letras hover:underline">Inicio</Link>
          <a onClick={scrollToFooter} className="text-letras hover:underline cursor-pointer">Nosotros</a>
        </div>
    
        <div className="flex items-center justify-center">
          <img className="h-20 w-22" src="https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/438712058_122111272034269953_5054094984923943878_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG3EuXLZYKqQ4wDNvRSrK7CVRqutw6Roe5VGq63DpGh7lgNfmG9gxYCnU4CTiw5aSymvcu9bOqmsIIzE8Gq0RBk&_nc_ohc=q-EdxYRQaNsQ7kNvgGm0L5t&_nc_ht=scontent.feoh1-1.fna&oh=00_AYDeh1Tacc3EqFMAhYjwp3ecTJY_GX2vBmdv11OKERA9nA&oe=665D9586" alt="Logo" />
        </div>

        <div className="mr-24 space-x-24 relative">
          <Link className="text-letras hover:underline" onClick={toggleMenu}>Productos</Link>
          {isMenuOpen && (
            <ul
              className="submenu bg-white absolute top-full mt-2 shadow-lg flex flex-col space-y-7 p-10 rounded-lg "
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={closeMenu}
            >
              <li className="text-letras hover:underline"> <Link to={"/productosCabello"}>Cabello </Link></li>
              <li className="text-letras hover:underline"> <Link to={"/productosBelleza"}>Belleza </Link></li>
              <li className="text-letras hover:underline"> <Link to={"/productosUñas"}> Uñas</Link></li>
            </ul>
          )}
          <Link to="servicios" className="text-letras hover:underline">Servicios</Link>
        </div>
      </nav>
    </div>
  );
}
