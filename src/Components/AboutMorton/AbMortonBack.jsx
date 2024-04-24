import React from "react";
import "./AbMorton.css"
import 'animate.css';
import 'aos/dist/aos.css';

export const AbMortonBack = ()=>{
   

return (
  <div className="morty"> 

<h2 className="textAbColor">Potenciando la Seguridad y Eficiencia con Strapi en la Gestión de Información </h2>

    <div className="aboutCards">
<div className="card c5"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Admin Panel</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard  b1 ">Seguridad Confiable: Nuestra plataforma, impulsada por el robusto sistema de login de Strapi, garantiza una autenticación segura para tus usuarios. Protegemos sus cuentas y datos con una sólida infraestructura de seguridad.

Experiencia de Usuario Personalizada: ofrecemos una experiencia de usuario personalizada al permitir la gestión de roles y permisos de manera flexible. Adaptamos el acceso y la interacción según las necesidades específicas de cada usuario. </p>
  </div>
</div>

<div className="card c7"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Estructura Intuitiva</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard b2" >Gestión Eficiente: La interfaz de Content Manager en Strapi centraliza la gestión de contenido, brindando una experiencia eficiente para agregar y organizar información desde un único lugar.

Personalización Intuitiva: Strapi ofrece una interfaz altamente personalizable, permitiendo a los usuarios adaptar la estructura de datos de manera intuitiva para una experiencia única y ajustada a sus necesidades.

Organización Clara: La interfaz limpia y organizada de Content Manager facilita la visualización y edición de contenido, optimizando la gestión efectiva y sin complicaciones.</p>
  </div>
</div>
<div className="card c8"  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Creacion de Articulos</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard b3">Gestión Eficiente: Strapi simplifica la creación y personalización de contenido de forma rápida y sencilla.<br/>
Interfaz Intuitiva: Nuestra plataforma ofrece una experiencia de edición de contenido simple y accesible para usuarios de todos los niveles.<br/>
Flexibilidad Estructural: Strapi permite a los usuarios crear relaciones entre objetos, brindando control total sobre la estructura del contenido y adaptándose a diversas necesidades.</p>
  </div>
</div>
    </div>
  </div>
)
}