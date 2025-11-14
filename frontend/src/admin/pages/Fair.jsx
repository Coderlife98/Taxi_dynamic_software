import React from 'react'

const Fair = () => {
  return (
    <div className='flex w-full h-screen  justify-center items-center'>
      <form
        className="border border-slate-500 min-w-8/12 max-w-10/12 p-5"
      >
        <h2 className="text-lg text-white font-bold mb-4">Add Fair</h2>

        <div className="grid md:grid-cols-2 text-white gap-4">
          {/* Left column */}
          <div>
            <div>
              <label htmlFor="from">From</label>
              <select name="" id="from" className='border border-slate-300 text-white w-full py-1 px-3'>
                <option value=""></option>
              </select>
            </div>
            <div className='my-3'>
              <label htmlFor="to">Status</label>
              <select name="" id="to" className='border border-slate-300 text-white w-full py-1 px-3'>
                <option value=""></option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <div>
              <label htmlFor="to">To</label>
              <select name="" id="to" className='border border-slate-300 text-white w-full py-1 px-3'>
                <option value=""></option>
              </select>
            </div>
            <div className='my-3'>
              <label htmlFor="to">Price</label>
              <input type="text" name='price' id='price' className='border border-slate-300 text-white w-full py-1 px-3' />
            </div>
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
