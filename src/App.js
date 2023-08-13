import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breweries from "./Hooks/Brewery";
import BrewPub from "./Hooks/BrewPub";
import Navbar from "./Components/Navbar";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Breweries />} />
          <Route path="/bars" element={<BrewPub />} />
          <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
