import React, { useEffect, useState } from 'react'
import Breadcums from '../components/Breadcums'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constant/constant'

const Customer_List = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${url}/api/customer/viewAll`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            withCredentials: true
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.log('Error while fetching customer list data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
  }, [data]);

  return (
    <div className="text-white w-full px-2 ">

      <Breadcums title="Customer List" />

      {/* Add Button start */}
      <div className='flex justify-end mt-5'>
        <Link to="/admin/customer/add" className='bg-sky-500 py-2 px-4 rounded-t-xl'>Add Customer</Link>
      </div>
      {/* Add Button end */}

      <div className="w-full lg:w-full overflow-x-auto bg-black/40 rounded-md shadow-md mt-4">
        <table className="w-full text-nowrap text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sno</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email Id</th>
              <th scope="col" className="px-6 py-3">Age</th>
              <th scope="col" className="px-6 py-3">Phone No</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.mobile_no}</td>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-600 text-white px-3 cursor-pointer py-1 rounded hover:bg-blue-700">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customer_List
