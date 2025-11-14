import React from 'react'
import Header from '../admin/components/Header'
import LeftBar from '../admin/components/LeftBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex bg-[url('./../src/assets/Admin/bg_admin.jpg')] pt-14 bg-cover bg-center w-full min-h-screen">
        <div className='lg:w-[230px] scrollbar-hidden z-30 left-0 top-10 fixed max-h-[calc(100vh-56px)] overflow-y-auto border-r-2 border-white'>
          <LeftBar />
        </div>
        <main className='flex-1 py-8 md:py-12 overflow-y-auto px-5 w-full flex md:px-8 lg:ml-[230px]'>
          <Outlet />
        </main>
      </div>
    </div >
  )
}

export default AdminLayout
