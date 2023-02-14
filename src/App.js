
import './App.css';
import { AbMorton } from './Components/AboutMorton/AbMorton';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Footer } from './Components/Footer/contact';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';

function App() {
  return (
    <div className="App" >
<Nav/>
<Header/>
<AbMorton/>
<AboutUs/>
<Footer/>
    </div>
  );
}

export default App;
