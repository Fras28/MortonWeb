import React from "react";
import "./AbMorton.css"
import 'animate.css';
import 'aos/dist/aos.css';

export const AbMorton = ()=>{
   

return (
  <div className="morty"> 
  <div className="infoAbMorty">
      <p className="textAb">Command Generator<br/> Que la tecnologia solucione la gestion</p>
    </div>
    <div className="aboutCards">
<div className="card c1"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Landing Page</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard">La pantalla de inicio de la aplicación presenta el logotipo de la empresa y un breve mensaje de bienvenida. También cuenta con una barra de botones que permite al cliente acceder a las diferentes secciones de la aplicación de manera rápida y sencilla. </p>
  </div>
</div>
<div className="card c2"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Secciones</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard">La aplicación cuenta con pantallas personalizadas para diferentes secciones. En la parte superior se encuentra un carrusel que facilita la búsqueda de productos. Además, hay espacio disponible para la publicidad y/o imágenes personalizadas.</p>
  </div>
</div>
<div className="card c3"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Funciones</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard b4">En las secciones de la aplicación, puedes ver información sobre tus productos, como su nombre, valor y una breve descripción. También puedes agregar productos al carro de compras y acceder a tu mochila/carrito de compra a través del botón 'Ver pedido'</p>
  </div>
</div>
<div className="card c4"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">Carro de compras</p>
  </div>
  <div className="card-bio">
    <p className="textInfoCard ">Desde la sección de tu mochila/carrito de compras, podrás ver y modificar el pedido que has armado previamente. También podrás ver el valor total de tu pedido y generar una comanda directamente desde la aplicación</p>
  </div>
</div>
    </div>
  </div>
)
}