import Producto  from "../models/producto.models.js";

export const getProductos = async (req, res) =>{

    try{
        const findProductos = await Producto.find()
        if (!findProductos) {
            return res.status(404).json({ message: "productos no encontrados" });
          }
          res.send(findProductos);
    }catch (error){
        console.log(error, "error al encontrar los datos");
    }
}


export const createProducto = async (req, res) => {
   try {
     const {nombre, descripcion, precio, tipo} = req.body

     console.log("lo que se guardo",req.body);


     const newProducto = new Producto({
         nombre, descripcion, precio, tipo
     })
 
     const saveProducto = await newProducto.save()
     res.status(201).json(saveProducto)
   } catch (error) {
    console.log("error al crear",error);
   }
}

export const getProducto = async (req, res) =>{
    try{
        const findProducto = await Producto.findById(req.params.id)
        if (!findProducto) {
            return res.status(404).json({ message: "producto no encontrados" });
          }
          res.json(findProducto);
    }catch (error){
        console.log(error, "error al encontrar los datos");
    }
}
export const updateProducto = async (req, res) =>{
    try{
        const { nombre, descripcion, precio, tipo} = req.body
        console.log("bosyy", req.body);
        

        const changedProduct = await Producto.findByIdAndUpdate(req.params.id,
            { nombre, descripcion, precio, tipo},
             {new: true})
          res.json(changedProduct);
          console.log("melo");
    }catch (error){
        console.log(error, "error al encontrar los datos");
    }
}

export const deleteProducto = async (req, res) =>{
    try{
        const findProducto = await Producto.findByIdAndDelete(req.params.id)
        if (!findProducto) {
            return res.status(404).json({ message: "producto no encontrados" });
          }
          res.json(findProducto);
    }catch (error){
        console.log(error, "error al encontrar los datos");
    }
}