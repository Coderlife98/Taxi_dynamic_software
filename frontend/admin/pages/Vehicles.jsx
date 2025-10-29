import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from "axios";
const Vehicles = () => {

  const schema = yup.object().shape({
    name: yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
    brand: yup.string()
      .required("Brand is required")
      .matches(/^[A-Za-z0-9\s.,!?'"()-]+$/, "Brand contains invalid characters"),
    model: yup.string()
      .required("Model is required")
      .matches(/^[A-Za-z0-9\s]+$/, "Only letters and numbers are allowed"),
    color: yup.string()
      .required("Color is required")
      .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
    seat_no: yup
      .number()
      .typeError("Seat number must be a number")
      .required("Capacity of Seat is required")
      .positive("Seat number must be positive")
      .integer("Seat number must be an integer"),
   
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}api/addVehicle`, data);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      toast.success("Vehicle added successfully!");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const onError = (errors) => {
    console.log(errors);
    const firstError = Object.values(errors)[0];
    if (firstError?.message) toast.error(firstError.message);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <form
        className="border p-5"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        <h2 className="text-lg font-bold mb-4">Add Vehicle</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <input
              type="text"
              {...register('name')}
              placeholder="Enter Name"
              className="border w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              {...register('brand')}
              placeholder="Enter Brand"
              className="border w-full my-2 py-1 px-3"
            />
          </div>

          {/* Right column */}
          <div>
            <input
              type="text"
              {...register('model')}
              placeholder="Enter Model"
              className="border w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              {...register('color')}
              placeholder="Enter Color"
              className="border w-full my-2 py-1 px-3"
            />
          </div>

          {/* Seat number */}
          <div>
            <input
              type="number"
              {...register('seat_no')}
              placeholder="Enter Capacity of Seat"
              className="border w-full py-1 px-3"
            />
          </div>

          {/* Status */}
          <div>
            <select
              className="border w-full py-1 px-3"
            >
              <option value="">Select Status</option>
              <option value="True">True</option>
              <option value="False">False</option>
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
  );
};

export default Vehicles;
