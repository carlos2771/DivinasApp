import { useServicios } from "../../hooks/useServicios";



export default function ServiciosNav() {
    const {subRaya, handleClick} = useServicios()
    


    return (
        <div className="flex justify-center mt-10">
            <div>
                <h3 className="text-parrafo text-xl bg-black text-center">Servicios</h3>
                <div className="bg-primary mb-10 flex justify-around w-96">
                    <div>
                        <p 
                            className={`cursor-pointer ${subRaya === "Uñas" ? "underline" : "hover:underline"}`} 
                            onClick={() => handleClick("Uñas")}
                        >
                            Uñas
                        </p>
                    </div>
                    <div>
                        <p 
                            className={`cursor-pointer ${subRaya === "Cabello" ? "underline" : "hover:underline"}`} 
                            onClick={() => handleClick("Cabello")}
                        >
                            Cabello
                        </p>
                    </div>
                    <div>
                        <p 
                            className={`cursor-pointer ${subRaya === "Belleza" ? "underline" : "hover:underline"}`} 
                            onClick={() => handleClick("Belleza")}
                        >
                            Belleza
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}
