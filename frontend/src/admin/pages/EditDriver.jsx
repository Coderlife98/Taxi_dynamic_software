import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../constant/constant';
import Loader from '../../components/Loader';

const EditDriver = ({ title }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [data, setData] = useState({
    name: {},
    mobile_no: {},
    age: {},
    licence_no: {},
    experience: {},
    status: {}
  });
  const getData = async () => {
    try {
      const response = await axios.post(`${url}/api/driver/edit/${id}`, {}, {
        headers: {
          Authorization: `Bearer${token}`
        },
        withCredentials: true
      })
      if (response) {
        console.log(response.data.data);
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/driver/updateDriverById/${id}`, { data }, {
        headers: {
          Authorization: `Bearer${token}`
        },
        withCredentials: true
      })
      if (response) {
        setLoading(false);
        navigate('/admin/driver/list');
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      {loading && <Loader />}
      <div className='flex w-full h-screen justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className="border border-slate-500 p-5"
        >
          <h2 className="text-lg text-white font-bold mb-4">{title}</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Left column */}
            <div>
              <input
                type="text"
                placeholder="Name"
                name='name'
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value })
                }}
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
              <input
                type="text"
                name='mobile_no'
                value={data.mobile_no}
                onChange={(e) => {
                  setData({ ...data, mobile_no: e.target.value })
                }}
                placeholder="Mobile Number"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>

            {/* Right column */}
            <div>
              <input
                type="text"
                name='age'
                value={data.age}
                onChange={(e) => {
                  setData({ ...data, age: e.target.value })
                }}
                placeholder="Age"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
              <input
                type="text"
                name='licence_no'
                value={data.licence_no}
                onChange={(e) => {
                  setData({ ...data, licence_no: e.target.value })
                }}
                placeholder="Licence No."
                className="border w-full border-slate-300 text-white my-2 py-1 px-3"
              />
            </div>

            {/* Seat number */}
            <div>
              <input
                type="text"
                name='experience'
                value={data.experience}
                onChange={(e) => {
                  setData({ ...data, experience: e.target.value })
                }}
                placeholder="Experience"
                className="border border-slate-300 text-white w-full py-1 px-3"
              />
            </div>

            {/* Status */}
            <div>
              <select
                name='status'
                className="border border-slate-300 text-white w-full py-1 px-3"
              >
                <option className='text-black' value="">Select Status</option>
                <option className='text-black' value="true">True</option>
                <option className='text-black' value="false">False</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="py-2 mt-5 w-full cursor-pointer rounded-b-md bg-green-700 text-white"
          >
            Add
          </button>
        </form>
      </div>
    </>
  )
}

export default EditDriver
