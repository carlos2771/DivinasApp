import { useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';


export const ServiciosContext = createContext();

export const ServiciosProvider = ({children}) => {
    const [subRaya, setSubraya] = useState("Cabello");
    const handleClick = (servicio) => {
        setSubraya(servicio);
    };

    return(
        <ServiciosContext.Provider
        value={{

            subRaya,
            handleClick
        }}
        
        >
        {children}
        </ServiciosContext.Provider>
    )
}

ServiciosProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

//el error children is missing in props validation context react indica que no se ha incluido en el proseso de validacion, esto puede generar problemas  si los hijos tienen un tipo o estructura de datos inesperados.