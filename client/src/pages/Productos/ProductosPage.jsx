import { useEffect } from "react";
import { useProductos } from "../../hooks/useProductos";

export default function ProductosPage() {
  const { productos, getProductos } = useProductos();

  useEffect(() => {
    getProductos();
  }, [getProductos]);

  

  return (
    <div>
      {Array.isArray(productos) &&
        productos
          .filter((producto) => producto.tipo === "Cabello")
          .map((producto) => (
            <div key={producto._id} className="">
              <div>
              <img 
              className="w-96 h-96"
                 // Utiliza w-full para ocupar el ancho completo del contenedor
                src={`data:image/jpeg;base64,${producto.img}`}
                alt={producto.nombre}
              />

              </div>
            </div>
          ))}
    </div>
  );
}
