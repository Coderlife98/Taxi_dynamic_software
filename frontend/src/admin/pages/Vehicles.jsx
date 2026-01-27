import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { url } from '../../constant/constant';
import Loader from '../../components/Loader';
const Vehicles = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    model: '',
    color: '',
    seat_no: '',
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
    setLoading(true);
    const data = await axios.post(`${url}/api/addVehicle`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });

    if (data) {
      navigate('/admin/vehicle/list')
      setLoading(false);
    } else {
      console.log("error");
    }
  }
  return (
    <>
      {
        loading && <Loader />
      }
      <div className="flex w-full h-screen justify-center items-center">
        <form
          className="border border-white p-5"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg text-white font-bold mb-4">Add Vehicle</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Left column */}
            <div>
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
              <input
                type="text"
                name='brand'
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>

            {/* Right column */}
            <div>
              <input
                type="text"
                name='model'
                onChange={handleChange}
                value={formData.model}
                placeholder="Model"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
              <input
                type="text"
                name='color'
                onChange={handleChange}
                value={formData.color}
                placeholder="Color"
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>

            {/* Seat number */}
            <div>
              <input
                type="number"
                onChange={handleChange}
                value={formData.seat_no}
                name='seat_no'
                placeholder="Capacity of Seat"
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
            className="py-2 mt-5 w-full rounded-b-md bg-green-700 text-white"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Vehicles;
