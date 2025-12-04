import React, { useEffect, useState } from 'react'
import Breadcums from '../components/Breadcums'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constant/constant'

const Vehicle_List = () => {
  const [vehcileList, setVehicleList] = useState([]);
  useEffect(() => {
    const vehicleList = async () => {
      try {
        const response = await axios.post(`${url}/api/vehicleList`);
        setVehicleList(response.data.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    vehicleList();
  }, [])

  useEffect(() => {
    console.log(vehcileList);
  }, [vehcileList])
  return (
    <div className="text-white w-full px-2 ">

      <Breadcums title="Vehicle List" />

      {/* Add Button start */}
      <div className='flex justify-end mt-5'>
        <Link to="/admin/vehicle/add" className='bg-sky-500 py-2 px-4 rounded-t-xl'>Add Vehicle</Link>
      </div>
      {/* Add Button end */}

      <div className="w-full lg:w-full overflow-x-auto bg-black/40 rounded-md shadow-md mt-4">
        <table className="w-full text-nowrap text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sno</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Brand</th>
              <th scope="col" className="px-6 py-3">Model</th>
              <th scope="col" className="px-6 py-3">Color</th>
              <th scope="col" className="px-6 py-3">Capacity of Seat</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              vehcileList.map((items, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{items.name}</td>
                  <td className="px-6 py-4">{items.brand}</td>
                  <td className="px-6 py-4">{items.model}</td>
                  <td className="px-6 py-4">{items.color}</td>
                  <td className="px-6 py-4">{items.seat_no}</td>
                  <td className="px-6 py-4">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View
                    </button>
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

export default Vehicle_List
