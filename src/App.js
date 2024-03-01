
import './App.css';
import { AbMorton } from './Components/AboutMorton/AbMorton';
import { AboutUs } from './Components/AboutUs/AboutUs';
import Carousel from './Components/Carousel/Carousel';
import { Footer } from './Components/Footer/contact';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';

import Baires from "./assets/BairesLogo.png"
import Coqui from "./assets/CoquiLogo.png"
import Poulet from "./assets/PouletLogo.png"
import ReyPollo from "./assets/ReyPolloLogo.png"
import Hudson from "./assets/HudsonLogo.png"
import MasDonto from "./assets/LogoDTM.png"
import Morton from "./assets/MortonLogo.png"
function App() {
  const logos = [
    { url:"https://www.bairesbarbb.com.ar/",
      img:Baires},
      {url:"https://coqui-cakes.vercel.app/",
      img:Coqui},
      {url:"https://poulet-carnes.vercel.app/",
        img:Poulet},
        {url:"https://rey-del-pollo.vercel.app/",
          img:ReyPollo},
          {url:"https://hudsonbb.vercel.app/",
            img:Hudson},
            {url:"https://www.dontomascerveceria.com.ar/",
              img:MasDonto},
              {url:"https://catalogo-digital-morton.vercel.app/",
                img:Morton},
  


    
    // Agrega más URLs según sea necesario
  ];
  return (
    <div className="App" >
<Nav/>
<Header/>

<Carousel logos={logos}  />

<AbMorton/>
<AboutUs/>
<Footer/>
    </div>
  );
}

export default App;
