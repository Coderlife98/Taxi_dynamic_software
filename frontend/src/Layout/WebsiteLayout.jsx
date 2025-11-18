import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, Link } from "react-router-dom";
const WebsiteLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default WebsiteLayout
