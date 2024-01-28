import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroComponent from "./components/hero-component/hero-component";
import Navbar from "./components/navbar/navbar";
import ProjectsComponent from "./components/projects/projects-component";

function App() {
  return (
    <div className="main-container">
      <div className="position-relative h-100 py-2">
        <Navbar />
        <HeroComponent />
      </div>

      <ProjectsComponent />
    </div>
  );
}

export default App;
