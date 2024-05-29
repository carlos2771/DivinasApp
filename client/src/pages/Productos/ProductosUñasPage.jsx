import { useEffect, useState } from "react"
import { useProductos } from "../../hooks/useProductos"

export default function ProductosUñasPage() {
    const { productos, getProductos } = useProductos();
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  useEffect(() => {
    if (Array.isArray(productos)) {
      const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados);
    }
  }, [productos, busqueda]);

  return (
    <div>
      <div className="pl-48 pt-10">
        <input 
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1 h-10 text-black"
        />
      </div>
      <div className="flex justify-around flex-wrap pl-80 pr-80 pt-10 gap-10 py-80 ">
        {productosFiltrados.filter(producto => producto.tipo === "Uñas").map((producto) => (
          <div key={producto._id} className="">
            <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
              <img
                className="w-96 h-96 transition-transform group-hover:scale-110 duration-200"
                src={`data:image/jpeg;base64,${producto.img}`}
                alt={producto.nombre}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <div>
                  <h3 className="text-white text-xl">{producto.nombre}</h3>
                  <h2 className="text-gray-300">{producto.tipo}</h2>
                  <p className="text-gray-300">{producto.descripcion}</p>
                  <p className="text-white">{producto.precio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
