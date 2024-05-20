import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: {type:String, require: true},
    descripcion: {type:String, require: true},
    precio: {type:String, require: true},
    tipo:{type: String, require: true}
})

export default mongoose.model("Producto",productoSchema)

