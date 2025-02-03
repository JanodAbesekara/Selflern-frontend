import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Componenet/Navbar";
import Home from "./Pages/Homepage";
import GoogleDrivePicker from "./Pages/GoogleDrivePicker";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/GoogleDrivePicker" element={<GoogleDrivePicker />} />

      </Routes>
    </div>
  );
}

export default App;
