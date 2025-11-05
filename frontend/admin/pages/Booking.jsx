import React from 'react'

const Booking = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <form
        className="border border-slate-500 max-w-10/12 w-full p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Booking</h2>

        <div className="grid md:grid-cols-2 text-white  gap-4">
          {/* Left column */}
          <div>
            <label htmlFor="from">From</label>
            <select name="" id="from" className='border border-slate-300 text-white w-full py-1 px-3'>
              <option value=""></option>
            </select>
          </div>
          <div>
            <label htmlFor="to">To</label>
            <select name="" id="to" className='border border-slate-300 text-white w-full py-1 px-3'>
              <option value=""></option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 text-white  my-3 gap-4">
          {/* Left column */}
          <div>
            <label htmlFor="vehicles">Vehicles</label>
            <select name="" id="vehicles" className='border border-slate-300 text-white w-full py-1 px-3'>
              <option value=""></option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" name='price' id='price' className='border border-slate-300 text-white w-full py-1 px-3' />
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

export default Booking
