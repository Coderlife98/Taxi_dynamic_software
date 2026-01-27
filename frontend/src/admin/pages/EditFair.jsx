import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../constant/constant'
import Loader from '../../components/Loader'
const EditFair = () => {
  const { id } = useParams()
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    from: {},
    to: {},
    vehicle: {},
    price: ''
  });
  const getDataById = async () => {
    const fair = await axios.post(`${url}/api/fair/view/${id}`, {}, {
      headers: {
        Authorization: `Bearer${token}`
      },
      withCredentials: true
    });
    if (!fair) {
      console.log("Error in fair");
    }
    setData(fair.data.data);
  }

  const handlerUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await axios.put(`${url}/api/UpdateById/${id}`, { price: data.price });
    if (response) {
      navigate('/admin/fair/list');
      setLoading(false);
    }
  }
  useEffect(() => {
    getDataById()
  }, [])
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <>
      {loading && <Loader />}
      <div className="flex w-full h-screen justify-center items-center">
        <form
          onSubmit={handlerUpdate}
          className="border border-slate-500 min-w-8/12 max-w-10/12 p-5"
        >
          <h2 className="text-lg text-white font-bold mb-4">Update Fair</h2>

          <div className="grid md:grid-cols-2 text-white gap-4">

            {/* ================= FROM ================= */}
            <div>
              <div>
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  name="from"
                  id="from"
                  readOnly
                  value={data.from.address}
                  className="border border-slate-300 text-white w-full py-1 px-3"
                />
              </div>

              {/* ================= STATUS ================= */}
              <div className="my-3">
                <label htmlFor="vehicle">Vehicle</label>
                <input
                  type="text"
                  name="vehicle"
                  id="vehicle"
                  value={data.vehicle.name}
                  readOnly
                  className="border border-slate-300 text-white w-full py-1 px-3"
                />
              </div>
            </div>

            {/* ================= TO ================= */}


            {/* ================= VEHICLE ================= */}
            <div>
              <div>
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  name="to"
                  id="to"
                  value={data.to.address}
                  readOnly
                  className="border border-slate-300 text-white w-full py-1 px-3"
                />
              </div>
              <div className="my-3">
                <label htmlFor="vehicle">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={(e) => {
                    setData({ ...data, price: e.target.value })
                  }}
                  value={data.price}
                  className="border border-slate-300 text-white w-full py-1 px-3"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="py-2 mt-5 w-full rounded-b-md bg-green-700 text-white"
          >
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default EditFair
