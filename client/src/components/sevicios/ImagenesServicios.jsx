import ImageGallery from "react-image-gallery";
import Uñas from "../../assets/img/Uñas/uñas1.jpeg"
import Uñas2 from "../../assets/img/Uñas/uñas2.jpeg" 
import Uñas3 from "../../assets/img/Uñas/uñas3.jpeg" 

import c1 from "../../assets/img/Cabellos/1.jpeg"
import c2 from "../../assets/img/Cabellos/2.jpeg"
import c3 from "../../assets/img/Cabellos/3.jpeg"
import c4 from "../../assets/img/Cabellos/4.jpeg"
import c5 from "../../assets/img/Cabellos/5.jpeg"

import b1 from "../../assets/img/Belleza/1.jpeg"
import b2 from "../../assets/img/Belleza/2.jpeg"
import b3 from "../../assets/img/Belleza/3.jpeg"

import "react-image-gallery/styles/css/image-gallery.css";
import { useServicios } from "../../hooks/useServicios";
import { useState } from "react";
import { useEffect } from "react";



export default function ImagenesServicios() {
  const { subRaya } = useServicios();
  const [tipoServicios, setTipoServicio] = useState([]);
  useEffect(() => {
    if (subRaya === "Cabello") {
        setTipoServicio( [
      
        {
            original: c1,
            thumbnail: c1
        },
        {
            original: c2,
            thumbnail: c2
        },
        {
            original: c3,
            thumbnail: c3
        },
        {
            original: c4,
            thumbnail: c4
        },
        {
            original: c5,
            thumbnail: c5
        },
      
          
        ],)
          
    }else if(subRaya === "Uñas"){
        setTipoServicio( 
          [
            {
                original: Uñas,
                thumbnail: Uñas
            },
            {
                original: Uñas2,
                thumbnail: Uñas2
            },
            {
                original: Uñas3,
                thumbnail: Uñas3
            },
        ],)
    }else{
        setTipoServicio( 
            [
                {
                    original: b1,
                    thumbnail: b1
                },
                {
                    original: b2,
                    thumbnail: b2
                },
                {
                    original: b3,
                    thumbnail: b3
                },
              
                
             
        ],)
    }
  }, [subRaya]);

  return (
    <div className="flex justify-center mb-10  ">
        
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showNav={true}
        autoPlay={false}
        slideInterval={2000}
        thumbnailPosition="bottom"
        items={tipoServicios}
      
      />
    </div>
  );
}
