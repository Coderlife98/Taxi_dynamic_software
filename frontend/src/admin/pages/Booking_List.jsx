import React from 'react'
import Breadcums from '../components/Breadcums'
import { Link } from 'react-router-dom'
import { MdDeleteOutline, MdEdit } from 'react-icons/md'
import { CiRead } from 'react-icons/ci'

const Booking_List = () => {
  return (
    <div className="text-white w-full px-2 ">

      <Breadcums title="Booking List" />

      {/* Add Button start */}
      <div className='flex justify-end mt-5'>
        <Link to="/admin/booking/add" className='bg-sky-500 py-2 px-4 rounded-t-xl'>Add Booking</Link>
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
              <th scope="col" className="px-6 py-3">Driver</th>
              <th scope="col" className="px-6 py-3">Customer</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Booking Start Date</th>
              <th scope="col" className="px-6 py-3">Booking End Date</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                1
              </th>
              <td className="px-6 py-4">Delhi</td>
              <td className="px-6 py-4">Mumbai</td>
              <td className="px-6 py-4">Sedan</td>
              <td className="px-6 py-4">Rahul</td>
              <td className="px-6 py-4">Amit</td>
              <td className="px-6 py-4">Confirmed</td>
              <td className="px-6 py-4">2025-11-10</td>
              <td className="px-6 py-4">2025-11-12</td>
              {/* <td>
                <Link to={`/admin/fair/edit/${item._id}`} >
                  <MdEdit className='text-lg text-blue-500 inline' />
                </Link>
                <Link to={`/admin/fair/view/${item._id}`}>
                  <CiRead className='text-lg mx-3 text-yellow-400 inline' />
                </Link>
                <button onClick={() => { handleDelete(item._id) }} >
                  <MdDeleteOutline className='text-lg text-red-400 inline' />
                </button>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Booking_List
