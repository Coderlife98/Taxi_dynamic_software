import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Vehicles from '../admin/pages/Vehicles.jsx'
import Home from '../Pages/Home.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Location from '../admin/pages/Location.jsx'
import Driver from '../admin/pages/Driver.jsx'
import AdminLayout from '../admin/Layout/AdminLayout.jsx'
import Booking from '../admin/pages/Booking.jsx'
import Fair from '../admin/pages/Fair.jsx'
import Customer from '../admin/pages/Customer.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path='/admin' element={<AdminLayout />} >
          <Route path='driver/add' element={<Driver />} />
          <Route path='location/add' element={<Location />} />
          <Route path='vehicle/add' element={<Vehicles />} />
          <Route path='booking/add' element={<Booking />} />
          <Route path='fair/add' element={<Fair />} />
          <Route path='customer/add' element={<Customer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
