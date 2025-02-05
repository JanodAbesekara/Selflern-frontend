import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componenet/Navbar";
import Home from "./Pages/Homepage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
