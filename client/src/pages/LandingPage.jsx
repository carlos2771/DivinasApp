import { useState } from "react";
import "../App.css"
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [isVibrating, setVibrating] = useState(false);

  const startVibrating = () => {
    setVibrating(true);
    setTimeout(() => {
      setVibrating(false);
    }, 1000); // Duración de la animación en milisegundos
  };
  return (
    <div>
      <div className="bg-blackBackground">

        <div className="flex justify-center pt-14 pb-10">
          <h1 className="text-4xl text-parrafo">Divinas Salon De Belleza</h1>
        </div>

        <div className="flex justify-center pb-10">
        <h2 className="text-2xl mb-5 text-parrafo">Belleza, Cosmetica Y Cuidado Personal</h2>
        </div>

        <div className="flex justify-center flex-col pl-10 pr-10 mr-96 ml-96">

        <p className="text-xl mb-5 text-center text-parrafo">
          ¡Descubre la belleza que mereces! Sumérgete en nuestra selección
          premium de productos para el cabello y la piel, diseñados para elevar
          tu rutina de cuidado personal. En nuestro servicio de skincare,
          fusionamos lo mejor de la naturaleza y la ciencia para brindarte una
          piel radiante y saludable. ¡Únete a nosotros y embárcate en un viaje
          hacia una belleza que se siente y se ve increíblemente bien!
        </p>

        <div className="flex justify-center mb-10 mt-12">
          <button className="bg-primary rounded-full">
            <a href="https://wa.me/+573016086708?text=Hola quiero agendar una cita" target="_blank" className="pr-5 pl-5 pt-2 pb-2 text-xl font-medium ">Reservar Cita</a>
          </button>
        </div>

        </div>

        <div className="bg-white pb-10">
          
        <div className="flex justify-center pt-14 pb-10">
          <h1 className="text-4xl text-letras">Servicios</h1>
        </div>

        <div className="flex justify-center pb-10">
        <h2 className="text-2xl mb-5 text-letras">En divinas salon de belleza tenemos a tu disposicion</h2>
        </div>
        
        <div className="flex justify-around ml-16">
          <p className="text-xl text-letras">Cabello</p>
          <p className="text-xl text-letras">Cosmetica</p>
          <p className="text-xl text-letras">Cuidado Personal</p>
        </div>

        <div className="flex justify-center mt-16">
        <button className="bg-primary rounded-full ">
            <Link to={"/servicios"}  className="pr-8 pl-8  text-xl font-medium  ">Servicios</Link >
          </button>
        </div>

        </div>
      </div>
      <div className="whatsapp-button-container">
        <a href="https://wa.me/+573225766733?text=Hola quiero agendar una cita" target="_blank" className={`whatsapp-button ${isVibrating ? "vibrate" : ""}`}
          onMouseEnter={startVibrating}>
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
