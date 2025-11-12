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
import Booking_List from '../admin/pages/Booking_List.jsx'
import News from '../admin/pages/News.jsx'
import Customer_List from '../admin/pages/Customer_List.jsx'
import Driver_List from '../admin/pages/Driver_List.jsx'
import Vehicle_List from '../admin/pages/Vehicle_List.jsx'
import Location_List from '../admin/pages/Location_List.jsx'
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
          <Route path='booking/list' element={<Booking_List />} />
          <Route path='customer/list' element={<Customer_List />} />
          <Route path='driver/list' element={<Driver_List />} />
          <Route path='vehicle/list' element={<Vehicle_List />} />
          <Route path='fair/add' element={<Fair />} />
          <Route path='location/list' element={<Location_List />} />
          <Route path='customer/add' element={<Customer />} />
          <Route path='news/add' element={<News />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
