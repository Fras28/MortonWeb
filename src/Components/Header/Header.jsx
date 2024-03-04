import React from "react";
import "./Header.css"
import 'animate.css';
import 'aos/dist/aos.css';


export const Header = ()=>{
   

return (

  <div className="Header">
<div className="HeaderInfo" data-aos="zoom-in-right">
  <div>
<p className="titleHead">INNOVATION &</p> <p className="titleHead2"> SOFTWARE COMPANY</p>
  </div>
<p className="subHead">Ponemos la tecnologia al servicio de las personas</p>
     <div className="aboutUs-demo" data-aos="fade-up" data-aos-duration="800">
        
          <a className="ax2" href="https://catalogo-digital-morton.vercel.app/" target="_blank" rel="noopener noreferrer">Demo Catálogo Digital</a>
        </div>
</div>

  </div>

)
}