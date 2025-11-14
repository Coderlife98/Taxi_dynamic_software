import React from 'react'

const Customer = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <form
        className="border  border-slate-500 p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Customer</h2>

        <div className="grid md:grid-cols-2 text-white gap-4">
          {/* Left column */}
          <div>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Name"
                name='address'
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>
            <div>
              <label htmlFor="">Email Id</label>
              <input
                type="text"
                placeholder="Email Id"
                name='email'
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>
            <div>
              <label htmlFor="">Date</label>
              <input
                type="date"
                name='date'
                className="border border-slate-300 text-white w-full my-2 py-1 px-3"
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label htmlFor="">Phone No.</label>
            <input
              type="text"
              placeholder="Phone No."
              name='email'
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              name='email'
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
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

export default Customer
