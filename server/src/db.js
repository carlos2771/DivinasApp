import moongose from "mongoose";
import { URI } from "./config.js";


export const connectDB = async () => {
    try {
    moongose.connect(URI)
    console.log("conexion exitosa👽");
    } catch (error) {
        console.log("Conexion a la base de datos erronea",error);
    }
}