import React from 'react'

const Fair = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <form
        className="border border-slate-500 p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Fair</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div>
            <input
              type="text"
              placeholder="Address"
              name='address'
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
            <input
              type="text"
              placeholder="Pincode"
              name='pincode'
              className="border border-slate-300 text-white w-full my-2 py-1 px-3"
            />
          </div>

          {/* Status */}
          <div>
            <select
              name='status'
              className="border border-slate-300 text-white w-full py-1 px-3"
            >
              <option className='text-black' value="">Select Status</option>
              <option className='text-black' value="True">True</option>
              <option className='text-black' value="False">False</option>
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

export default Fair
