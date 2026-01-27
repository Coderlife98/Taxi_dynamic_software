import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../../constant/constant';
import { useNavigate } from "react-router";
import Loader from '../../components/Loader';
const Fair = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [location, setLocation] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    vehicle: '',
    status: '',
    price: ''
  });

  // ================= FETCH LOCATION =================
  useEffect(() => {
    locationHandler();
    vehicleHandler();
  }, []);

  const locationHandler = async () => {
    try {
      const fetchAddress = await axios.post(
        `${url}/api/address/viewAll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );

      if (fetchAddress) {
        setLocation(fetchAddress.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const vehicleHandler = async () => {
    const response = await axios.post(`${url}/api/vehicleList`);
    setVehicle(response.data.data);
  }

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // ================= FILTER TO LOCATION =================
  const filteredValue = location.filter(
    (item) => item._id !== formData.from
  );

  // ================= SUBMIT =================
  const handlerFair = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/fair/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      if (response) {
        setLoading(false);
        navigate('/admin/fair/list');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="flex w-full h-screen justify-center items-center">
        <form
          onSubmit={handlerFair}
          className="border border-slate-500 min-w-8/12 max-w-10/12 p-5"
        >
          <h2 className="text-lg text-white font-bold mb-4">Add Fair</h2>

          <div className="grid md:grid-cols-2 text-white gap-4">

            {/* ================= FROM ================= */}
            <div>
              <label htmlFor="from">From</label>
              <select
                name="from"
                id="from"
                value={formData.from}
                onChange={handleChange}
                className="border bg-black border-slate-300 text-white w-full py-1 px-3"
              >
                <option value="">-- Select --</option>
                {location.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.address}
                  </option>
                ))}
              </select>

              {/* ================= STATUS ================= */}
              <div className="my-3">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border border-slate-300 bg-black text-white w-full py-1 px-3"
                >
                  <option value="">-- Select --</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>

            {/* ================= TO ================= */}
            <div>
              <label htmlFor="to">To</label>
              <select
                name="to"
                id="to"
                value={formData.to}
                onChange={handleChange}
                className="border bg-black border-slate-300 text-white w-full py-1 px-3"
              >
                <option value="">-- Select --</option>
                {filteredValue.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.address}
                  </option>
                ))}
              </select>

              {/* ================= PRICE ================= */}
              <div className="my-3">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border border-slate-300 text-white w-full py-1 px-3"
                />
              </div>
            </div>

            {/* ================= VEHICLE ================= */}
            <div>
              <label htmlFor="vehicle">Vehicle</label>
              <select
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                className="border bg-black border-slate-300 text-white w-full py-1 px-3"
                id="vehicle">
                <option value="">-- Select --</option>
                {
                  vehicle.map((items, index) => (
                    <option key={index} value={items._id} >{items.name}</option>
                  ))
                }
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

export default Fair;
