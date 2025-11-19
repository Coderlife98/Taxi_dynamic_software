import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTaxiFrontFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosSpeedometer } from "react-icons/io";
import { FiBox } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiTakeMyMoney } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../constant/constant';
import Loader from '../../components/Loader';

const LeftBar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const operation = await axios.post(`${url}/api/logout`, {}, { withCredentials: true })
      if (operation) {
        setTimeout(() => {
          <Loader />
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate('/');
        }, 3000);
      }
    } catch (error) {
      console.log("Error while logout", error)
    }
  }
  return (
    <div className='bg-black h-full py-4  lg:block hidden  text-white'>
      <ul className='lg:py-10'>
        <li className="py-2 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r  hover:from-[#696026] hover:to-bg-transparent transition-all duration-500">
          <Link to="driver/add" className="text-slate-300 py-1 flex items-center">
            <LuLayoutDashboard className='mr-2 text-xl' />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r  hover:from-[#696026] hover:to-bg-transparent transition-all duration-500">
          <Link to="driver/list" className="text-slate-300 py-1 flex items-center">
            <BsFillTaxiFrontFill className='mr-2 text-xl' />
            <span>Driver</span>
          </Link>
        </li>
        <li className=' py-2 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="vehicle/list" className='text-slate-300 py-1 flex items-center' >
            <IoIosSpeedometer className='mr-2 text-xl' />
            <span>Vehicles</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="fair/list" className='text-slate-300 py-1 flex items-center' >
            <GiMoneyStack className='mr-2 text-xl' />
            <span>Fair</span>
          </Link>
        </li>
        <li className=' py-2 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="customer/list" className='text-slate-300 py-1 flex items-center' >
            <RiCustomerService2Line className='mr-2 text-xl' />
            <span>Customer</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="booking/list" className='text-slate-300 py-1 flex items-center' >
            <FiBox className='mr-2 text-xl' />
            <span>Booking</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="#" className='text-slate-300 py-1 flex items-center' >
            <GiTakeMyMoney className='mr-2 text-xl' />
            <span>Transaction</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="#" className='text-slate-300 py-1 flex items-center' >
            <TfiWrite className='mr-2 text-xl' />
            <span>Enquiry</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="#" className='text-slate-300 py-1 flex items-center' >
            <IoSettingsOutline className='mr-2 text-xl' />
            <span>Setting</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <Link to="news/add" className='text-slate-300 py-1 flex items-center' >
            <FaNewspaper className='mr-2 text-xl' />
            <span>News</span>
          </Link>
        </li>
        <li className='py-2 md:my-3 px-6 border-l-2 border-transparent bg-transparent hover:border-l-2 hover:border-white hover:bg-gradient-to-r hover:from-[#696026] hover:to-bg-transparent transition-all duration-500'>
          <div onClick={handleLogout} className='text-slate-300 py-1 cursor-pointer flex items-center' >
            <FaNewspaper className='mr-2 text-xl' />
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default LeftBar
