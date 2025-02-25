import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from '../Componenet/Navbar';
import Homepage from '../Pages/Homepage';
import ContactUs from '../Pages/ContactUs';

function ContextHandle() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default ContextHandle