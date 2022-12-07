
import './App.css';
import { AbMorton } from './Components/AboutMorton/AbMorton';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';

function App() {
  return (
    <div className="App" >
<Nav/>
<Header/>
<AbMorton/>
<AboutUs/>
    </div>
  );
}

export default App;
