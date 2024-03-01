import React from "react";
import "./AboutUs.css";
import "animate.css";
import "aos/dist/aos.css";

export const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs-container">
      <div className="aboutUs-content" data-aos="fade-up" data-aos-duration="800">
          <h1>¿Por qué elegir Morton Soluciones?</h1>

          <p>
            Transforma la experiencia en tu comercio con nuestra aplicación
            exclusiva. En Morton Soluciones, nos enorgullece ofrecerte una
            herramienta diseñada para potenciar la atención al cliente y
            agilizar procesos.
          </p>

          <p>
            Imagina la posibilidad de que tus clientes exploren tu catálogo,
            realicen pedidos directamente desde la aplicación. Esto no
            solo agiliza el proceso, sino que también permite a tus clientes
            tomar decisiones rápidas y cómodas desde la comodidad de su celular.
          </p>

          <p>
            Optimiza el tiempo en operaciones sin consumir y aumenta la
            eficiencia para impulsar las ganancias de tu negocio de manera
            significativa.
          </p>

          <p>
            ¡No pierdas más tiempo! Únete a la revolución de los negocios
            modernos y eficientes con Morton Soluciones.
          </p>
        </div>

        <div className="aboutUs-features" data-aos="fade-up" data-aos-duration="800">
          <h2>Beneficios que Ofrecemos:</h2>

          <div className="feature">
            <h3>Facilidad de Navegación</h3>
            <p>Un catálogo digital organizado para una búsqueda de productos clara y sencilla.</p>
          </div>

          <div className="feature">
            <h3>Pedidos a Través de WhatsApp</h3>
            <p>Realiza pedidos directamente desde el catálogo a través de WhatsApp con solo unos clics.</p>
          </div>

          <div className="feature">
            <h3>Interacción Personalizada</h3>
            <p>Permite a tus clientes enviar pedidos detallados y personalizados de manera eficiente.</p>
          </div>

          <div className="feature">
            <h3>Aumento de las Ventas</h3>
            <p>Proporciona una forma fácil para que los clientes realicen pedidos, aumentando las ventas y la fidelización.</p>
          </div>

          <div className="feature">
            <h3>Lista de Precios Actualizada</h3>
            <p>Mantén a tus clientes informados sobre los precios de manera constante y sin esfuerzo.</p>
          </div>
        </div>

        <div className="aboutUs-demo" data-aos="fade-up" data-aos-duration="800">
          <h2>¿Te gustaría probarlo?</h2>
          <p>Explora nuestra <strong>DEMO</strong> y lleva tu negocio al siguiente nivel:</p>
          <a className="ax" href="https://catalogo-digital-morton.vercel.app/" target="_blank" rel="noopener noreferrer">Demo Catálogo Digital</a>
        </div>

        
      </div>
    </div>
  );
};
