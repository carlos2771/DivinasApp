import moongose from "mongoose";



const uri = `mongodb+srv://admin:admin@cluster0.49jaesh.mongodb.net/divinas`;


export const connectDB = async () => {
    try {
    moongose.connect(uri)
    console.log("conexion exitosa👽");
    } catch (error) {
        console.log("Conexion a la base de datos erronea",error);
    }
}