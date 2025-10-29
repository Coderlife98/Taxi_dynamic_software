import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Vehicles from '../admin/pages/vehicles.jsx'
import Home from '../Pages/Home.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for default styling
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/add/vehicle" element={<Vehicles />} />
      </Routes>
    </>
  )
}

export default App
