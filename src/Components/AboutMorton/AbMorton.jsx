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
    <p className="title">John Doe</p>
    <p className="subtitle">Web Dev</p>
  </div>
  <div className="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card c2"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">John Doe</p>
    <p className="subtitle">Web Dev</p>
  </div>
  <div className="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card c3"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">John Doe</p>
    <p className="subtitle">Web Dev</p>
  </div>
  <div className="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
<div className="card c4"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
  <div className="card-info">
    <p className="title">John Doe</p>
    <p className="subtitle">Web Dev</p>
  </div>
  <div className="card-bio">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
    </div>
   
  </div>
)
}