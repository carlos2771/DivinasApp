import ImagenesServicios from "../components/sevicios/ImagenesServicios";
import ListaPrecios from "../components/sevicios/Precios/ListaPrecios";
import ServiciosNav from "../components/sevicios/ServiciosNav";
import { ServiciosProvider } from "../context/ServiciosContext";
export default function ServiciosPage() {
  return (
    <div className="">
      <ServiciosProvider>
        <ServiciosNav />
        <ImagenesServicios />
        <ListaPrecios />
      </ServiciosProvider>
    </div>
  );
}
