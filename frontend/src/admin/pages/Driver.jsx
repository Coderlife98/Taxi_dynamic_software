import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from "axios";
const Driver = () => {

  const schema = yup.object().shape({
    name: yup.string()
      .required('Name is required')
      .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
    mobile_no: yup
      .string()
      .matches(/^\d{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .required("Age is required"),
    licence_no: yup
      .string()
      .required('Licence No is required'),
    experience: yup
      .string()
      .required('Experience is required'),
    status: yup
      .string()
      .required('Status is required')
  })

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })

  const onSubmit = async (data) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/driver/add`, data);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      toast.success('Driver Added Successfully');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value)
      }
      reset()
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  }
  const onError = (errors) => {
    const firstError = Object.values(errors)[0];
    if (firstError?.message) {
      toast.error(firstError.message)
    }
  }
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="border border-slate-500 p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Driver</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <input
              type="text"
              {...register('name')}
              placeholder="Name"
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              {...register('mobile_no')}
              placeholder="Mobile Number"
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
          </div>

          {/* Right column */}
          <div>
            <input
              type="text"
              {...register('age')}
              placeholder="Age"
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              {...register('licence_no')}
              placeholder="Licence No."
              className="border w-full border-slate-300 text-white my-2 py-1 px-3"
            />
          </div>

          {/* Seat number */}
          <div>
            <input
              type="number"
              {...register('experience')}
              placeholder="Experience"
              className="border border-slate-300 text-white w-full py-1 px-3"
            />
          </div>

          {/* Status */}
          <div>
            <select {...register('status')} className="border border-slate-300 text-white w-full py-1 px-3">
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
  )
}

export default Driver
