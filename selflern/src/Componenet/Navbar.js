import React from "react";
import logo from "../Assets/selfLogo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigator = useNavigate(); 

  const Navigatepage = () => {
    navigator("/ContactUs");
  };

  return (
    <div className="bg-blue-950 flex items-center justify-between px-4 py-3">
      <img src={logo} alt="Logo" className="h-14 rounded-2xl" />

      <h1 className="font-bold text-white text-sm text-center lg:text-3xl md:text-lg">
        Welcome to Self Learner
      </h1>

      <button
        className="text-cyan-900 rounded-2xl h-10 bg-zinc-50 px-4 text-sm"
        onClick={Navigatepage}
      >
        Contact ME
      </button>
    </div>
  );
}

export default Navbar;
