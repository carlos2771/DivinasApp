import { useServicios } from "../../../hooks/useServicios";
import PrecioUñas from "./PrecioUñas";
import PrecioBelleza from "./PrecioBelleza";
import PrecioCabello from "./PrecioCabello"; // Asegúrate de que esta importación es correcta y de que el componente existe


export default function ListaPrecios() {
  const { subRaya } = useServicios();
  
  return (
    <div className="bg-black">
      <div className=" ">
        <div className="flex justify-center">
          <h1 className="text-3xl text-parrafo  ">
            Lista De Precios
          </h1>
        </div>

       <div className="flex justify-center ">
       {subRaya === "Cabello" ? (
          <PrecioCabello />
        ) : subRaya === "Uñas" ? (
          <PrecioUñas />
        ) : subRaya === "Belleza" ? (
          <PrecioBelleza />
        ) : null}
       </div>
        <div className="flex justify-center">
        
          <button className="rounded-full bg-primary mb-10 mt-10">
            <a  href="https://wa.me/+573225766733?text=Hola quiero agendar una cita" target="_blank" className="text-black  text-xl pl-5 pr-5   ">Reservar Cita</a>
          </button>
        </div>
      </div>
    </div>
  );
}
