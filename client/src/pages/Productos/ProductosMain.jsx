import { ProductosProvider } from "../../context/ProductosContext";
import FormProductos from "./FormProductos";
import ProductosPage from "./ProductosPage";

export default function ProductosMain() {
  return (
    <div>
       <ProductosProvider>
    <ProductosPage/>
      <FormProductos />
    </ProductosProvider>
    </div>
  );
}
