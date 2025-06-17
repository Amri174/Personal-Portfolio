import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import { Contact } from "./components/Contact";
import { BatteryStatus } from "./components/BatteryStatus";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <BatteryStatus />
    </div>
  );
}

export default App;
