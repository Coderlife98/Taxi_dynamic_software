import React, { useEffect, useState } from 'react'
import Breadcums from '../components/Breadcums'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constant/constant'
import { MdDeleteOutline, MdEdit } from 'react-icons/md'
import { CiRead } from 'react-icons/ci'
import { handleDelete } from '../../utils/utils'
import Loader from '../../components/Loader'

const Driver_List = () => {
  const [driverlist, SetDriverList] = useState([]);
  const [loading, setLoading] = useState(false);

  // +++++++++++++++++++  Delete Driver start +++++++++++++++++++++++++++++++++++++++++++++++++
  const onDeleteDriver = async (id) => {
    setLoading(true);
    const success = await handleDelete(id, "driver");
    if (success) {
      setTimeout(async () => {
        await getDriverList();
        setLoading(false);
      }, 1000);
      getDriverList();
    }
  };
  // +++++++++++++++++++  Delete Driver end +++++++++++++++++++++++++++++++++++++++++++++++++



  // +++++++++++++++++++  Fetch Driver start +++++++++++++++++++++++++++++++++++++++++++++++++
  const getDriverList = async () => {
    try {
      const response = await axios.post(`${url}/api/driver/driverlist`);
      SetDriverList(response.data.data);

    } catch (error) {
      console.log(error);
    }
  }
  // +++++++++++++++++++  Fetch Driver start +++++++++++++++++++++++++++++++++++++++++++++++++


  useEffect(() => {
    getDriverList();
  }, [])

  useEffect(() => {
  }, [driverlist]);


  return (
    <div className="text-white w-full px-2 ">

      <Breadcums title="Driver List" />

      {loading && <Loader />}
      <div className='flex justify-end mt-5'>
        <Link to="/admin/driver/add" className='bg-sky-500 py-2 px-4 rounded-t-xl'>Add Driver</Link>
      </div>


      <div className="w-full lg:w-full overflow-x-auto bg-black/40 rounded-md shadow-md mt-4">
        <table className="w-full text-nowrap text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sno</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Mobile Number</th>
              <th scope="col" className="px-6 py-3">Age</th>
              <th scope="col" className="px-6 py-3">Licence No</th>
              <th scope="col" className="px-6 py-3">Experience</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              driverlist.map((items, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{items.name}</td>
                  <td className="px-6 py-4">{items.mobile_no}</td>
                  <td className="px-6 py-4">{items.age}</td>
                  <td className="px-6 py-4">{items.licence_no}</td>
                  <td className="px-6 py-4">{items.experience}</td>
                  <td>
                    <Link to={`/admin/driver/edit/${items._id}`} >
                      <MdEdit className='text-lg text-blue-500 cursor-pointer inline' />
                    </Link>
                    <Link to={`/admin/fair/view/${items._id}`}>
                      <CiRead className='text-lg mx-3 text-yellow-400 cursor-pointer inline' />
                    </Link>
                    <button onClick={() => { onDeleteDriver(items._id) }} >
                      <MdDeleteOutline className='text-lg text-red-400 cursor-pointer inline' />
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

export default Driver_List
