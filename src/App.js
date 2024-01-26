import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroComponent from "./components/hero-component/hero-component";

function App() {
  return (
    <div>
      <HeroComponent />
      <div className="bg-warning" style={{height:"100vh"}}>
      </div>
     
    </div>
  );
}

export default App;
