import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breweries from "./Features/Brewery";
import Bar from "./Features/Bar";
import Navbar from "./Components/Navbar";
import Contactus from "./Components/Contactus";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Breweries />} />
          <Route path="/bars" element={<Bar />} />
          <Route path="/contactus" element={<Contactus/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
