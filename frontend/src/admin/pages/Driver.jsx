import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { url } from '../../constant/constant';
const Driver = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    name: '',
    mobile_no: '',
    experience: '',
    licence_no: '',
    age: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(`${url}/api/driver/add`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    if (data) {
      console.log(data);
      navigate('/admin/driver/list')
    } else {
      console.log("err");
    }
  }
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className="border border-slate-500 p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Driver</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <input
              type="text"
              placeholder="Name"
              name='name'
              value={formData.name}
              onChange={handleChange}
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              name='mobile_no'
              value={formData.mobile_no}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
          </div>

          {/* Right column */}
          <div>
            <input
              type="text"
              name='age'
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              name='licence_no'
              value={formData.licence_no}
              onChange={handleChange}
              placeholder="Licence No."
              className="border w-full border-slate-300 text-white my-2 py-1 px-3"
            />
          </div>

          {/* Seat number */}
          <div>
            <input
              type="text"
              name='experience'
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              className="border border-slate-300 text-white w-full py-1 px-3"
            />
          </div>

          {/* Status */}
          <div>
            <select
              name='status'
              value={formData.status}
              onChange={handleChange}
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
  )
}

export default Driver
