import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroComponent from "./components/hero-component/hero-component";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroComponent />
      <div className="bg-warning" style={{height:"100vh"}}>
      </div>
    </div>
  );
}

export default App;
