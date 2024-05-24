import ImageGallery from "react-image-gallery";
import Uñas from "../../assets/img/Uñas/uñas1.jpeg"
import Uñas2 from "../../assets/img/Uñas/uñas2.jpeg" 
import Uñas3 from "../../assets/img/Uñas/uñas3.jpeg" 
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
            original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIYjQ_rtIISBLT3VWBk7rRR9LSWktidoByKo6EjYVeQ&s",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIYjQ_rtIISBLT3VWBk7rRR9LSWktidoByKo6EjYVeQ&s"
        },
            {
            original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxOFab21VWlPcgCYjftVSQYnUakVeIdFMiIqWA9t4Mg&s",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxOFab21VWlPcgCYjftVSQYnUakVeIdFMiIqWA9t4Mg&s"
        },
        {
            original: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJVc5_dOH7vTIP1eW5ccnhz2C35YY7xpUw4PoUnMkfA&s",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJVc5_dOH7vTIP1eW5ccnhz2C35YY7xpUw4PoUnMkfA&s"
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
                    original: "https://img.freepik.com/foto-gratis/esteticista-clienta-salon-rutina-cuidado-facial_23-2148875460.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1715126400&semt=ais",
                    thumbnail: "https://img.freepik.com/foto-gratis/esteticista-clienta-salon-rutina-cuidado-facial_23-2148875460.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1715126400&semt=ais"
                },
             
                {
                    original: "https://st4.depositphotos.com/3514613/38371/i/450/depositphotos_383717932-stock-photo-doctor-beautician-cleanses-the-skin.jpg",
                    thumbnail: "https://st4.depositphotos.com/3514613/38371/i/450/depositphotos_383717932-stock-photo-doctor-beautician-cleanses-the-skin.jpg"
                },
                {
                    original: "https://img.freepik.com/foto-gratis/joven-hermosa-mujer-sonriente-parches-debajo-ojos_158538-19021.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1715817600&semt=ais_user",
                    thumbnail: "https://img.freepik.com/foto-gratis/joven-hermosa-mujer-sonriente-parches-debajo-ojos_158538-19021.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1715817600&semt=ais_user"
                },
             
        ],)
    }
  }, [subRaya]);

  return (
    <div className="flex justify-center mb-10 ">
        
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
