import React from 'react'
import Header from '../components/Header'
import LeftBar from '../components/LeftBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-[url('./../src/assets/Admin/bg_admin.jpg')] bg-cover bg-center h-screen">
        <div className='lg:w-[230px] z-30 top-10 scrollbar-hidden max-h-screen overflow-y-scroll fixed  border-r-2 border-white'>
          <LeftBar />
        </div>
        <main className='flex-1 md:ml-56'>
          <Outlet />
        </main>
      </div>
    </div >
  )
}

export default AdminLayout
