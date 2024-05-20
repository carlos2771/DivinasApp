import { useContext } from "react"
import { ServiciosContext } from "../context/ServiciosContext"

export const useServicios = () => {
    const context = useContext(ServiciosContext)
    if(!context)
        throw new Error(
    "No estas usando Context adecuadamente")
    return context
}