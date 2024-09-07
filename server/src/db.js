import mongoose from "mongoose";
import 'dotenv/config'

export const connectDB = async () => {
    const URI = process.env.URI || `mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/divinas`
    try {
    mongoose.connect(URI)
    console.log("conexion exitosa👽");
    } catch (error) {
        console.log("Conexion a la base de datos erronea",error);
    }
}