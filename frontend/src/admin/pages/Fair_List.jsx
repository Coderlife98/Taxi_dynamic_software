import React, { useEffect, useState } from 'react'
import Breadcums from '../components/Breadcums'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constant/constant'
import { MdEdit, MdDeleteOutline } from "react-icons/md";
import { CiRead } from "react-icons/ci";
const Fair_List = () => {
  const [list, setList] = useState([]);
  const token = localStorage.getItem('token');
  const getFairList = async () => {
    try {
      const fetchData = await axios.post(`${url}/api/fair/viewAllFair`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      setList(fetchData.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getFairList();
  }, [])

  useEffect(() => {
    console.log("Updated list:", list);
  }, [list]);
  return (
    <div className="text-white w-full px-2 ">

      <Breadcums title="Fair List" />

      {/* Add Button start */}
      <div className='flex justify-end mt-5'>
        <Link to="/admin/fair/add" className='bg-sky-500 py-2 px-4 rounded-t-xl'>Add Fair</Link>
      </div>
      {/* Add Button end */}

      <div className="w-full lg:w-full overflow-x-auto bg-black/40 rounded-md shadow-md mt-4">
        <table className="w-full text-nowrap text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sno</th>
              <th scope="col" className="px-6 py-3">From</th>
              <th scope="col" className="px-6 py-3">To</th>
              <th scope="col" className="px-6 py-3">Vehicle</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((items, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{items.from.address}</td>
                  <td className="px-6 py-4">{items.to.address}</td>
                  <td className="px-6 py-4">{items.vehicle.name}</td>
                  <td className="px-6 py-4">{items.price}</td>
                  <td>
                    <Link to={`/admin/fair/edit/${items._id}`} >
                      <MdEdit className='text-lg text-blue-500 inline' />
                    </Link>
                    <Link to={`/admin/fair/view/${items._id}`}>
                      <CiRead className='text-lg mx-3 text-yellow-400 inline' />
                    </Link>
                    <Link to={`/admin/fair/delete/${items._id}`}>
                      <MdDeleteOutline className='text-lg text-red-400 inline' />
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fair_List
