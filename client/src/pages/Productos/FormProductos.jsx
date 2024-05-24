import { useForm } from "react-hook-form";
import { useProductos } from "../../hooks/useProductos";

export default function FormProductos() {
  const { createProductos, getProductos } = useProductos();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const formData = new FormData();

    // Agrega los datos del formulario a formData
    formData.append("nombre", data.nombre);
    formData.append("tipo", data.tipo);
    formData.append("precio", data.precio);
    formData.append("descripcion", data.descripcion);

    // Agrega el archivo de imagen a formData
    if (data.img[0]) {
      formData.append("img", data.img[0]);
    }

    console.log("antes", formData);

    const res = await createProductos(formData);
    if(res){
      getProductos()
    }
    
  };

  return (
    <div className="bg-zinc-200 flex  flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <input type="text" {...register("nombre")} />
        </div>

        <div className="flex justify-center">
          <select {...register("tipo")}>
            <option value="Cabello">Cabello</option>
            <option value="Uñas">Uñas</option>
            <option value="Belleza">Belleza</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input type="number" {...register("precio")} />
        </div>
        <div className="flex justify-center">
          <input type="text" {...register("descripcion")} />
        </div>
        <div className="flex justify-center">
          <input type="file" {...register("img")} />
        </div>

        <div className="flex justify-center">
          <input  type="submit" />
        </div>
      </form>
    </div>
  );
}
