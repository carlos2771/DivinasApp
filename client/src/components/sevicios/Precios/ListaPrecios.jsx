import { useServicios } from "../../../hooks/useServicios";
import PrecioUñas from "./PrecioUñas";
import PrecioBelleza from "./PrecioBelleza";
import PrecioCabello from "./PrecioCabello"; // Asegúrate de que esta importación es correcta y de que el componente existe

export default function ListaPrecios() {
  const { subRaya } = useServicios();
  
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Lista De Servicios</h1>
        </div>

        <div className="flex justify-center mb-12">
          {subRaya === "Cabello" ? (
            <PrecioCabello />
          ) : subRaya === "Uñas" ? (
            <PrecioUñas />
          ) : subRaya === "Belleza" ? (
            <PrecioBelleza />
          ) : null}
        </div>
        
        <div className="flex justify-center">
          <button className="rounded-full bg-primary text-white py-3 px-8 text-xl hover:bg-primary-dark transition">
            <a href="https://wa.me/+573225766733?text=Hola quiero agendar una cita" target="_blank">
              Reservar Cita
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
