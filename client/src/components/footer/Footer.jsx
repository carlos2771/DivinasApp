
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="bg-primary flex justify-around pt-5 ">
          <div className="">
            <h1 className="text-2xl  text-letras">Horarios de atención </h1>
            <div className="flex ">
              <p className="text-letras text-lg">Lunes - Sabado</p>
              <p className="pl-10 text-letras text-lg"> 9 Am - 7 Pm</p>
            </div>

            <div className="flex">
              <p className="text-letras text-lg">Domingo</p>
              <p className="pl-20 text-letras text-lg">Cerrado</p>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl  text-letras">Ubicacion </h1>
            <div className="">
              <p className="text-letras text-lg">Cra. 52 #51-52<br/> La Candelaria,
                 Medellín, La Candelaria,Medellin <br/> Antioquia</p>
             
            </div>

            

            <div className="pt-10">
              <h2 className="text-letras text-lg"><FontAwesomeIcon icon={faEnvelope} /> Email: divinassalondebelleza23@gmail.com </h2>
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl  text-letras  ">Redes <FontAwesomeIcon icon={faGlobe} />  </h1>
            <div className=" flex flex-col gap-4">
              <div className="text-2xl  text-letras"> <a href="https://www.facebook.com/profile.php?id=61558098616805" target="_blank"><FaFacebook /></a></div>
              <div className="text-2xl  text-letras"><a href="https://www.instagram.com/divinassalondebelleza23/" target="_blank"><FaInstagram/></a></div>
              <div className="text-2xl  text-letras"><a href="https://wa.me/+573225766733?text=Hola quiero agendar una cita" target="_blank"><FaWhatsapp/></a></div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
