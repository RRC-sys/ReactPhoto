// Components
import GridPhotos from "./components/GridPhotos";
import NavBar from "./components/NavBar";
import Parallaxe from "./components/Parallaxe";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <GridPhotos />
        <Parallaxe photoPath="./images/street.jpg" />
        <Services/>
        <Parallaxe photoPath="./images/stars.jpg" />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
