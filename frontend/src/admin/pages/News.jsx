import React from 'react'

const News = () => {
  return (
    <div className='flex w-full h-screen  justify-center items-center'>
      <form
        className="border border-slate-500 min-w-8/12 max-w-10/12 p-5"
      >
        <div>
          <h2 className="text-lg text-white font-bold mb-4">Add NEWS</h2>
        </div>

        <div>
          <label htmlFor="from" className='text-white'>News</label>
          <input type="text" name='heading' id='price' placeholder='Enter Heading Of News' className='border border-slate-300 text-white w-full py-1 px-3' />
          <div className='mt-2'>
            <label htmlFor="" className='text-white'>Description</label>
            <textarea name="" className='px-2 border border-slate-300 w-full' placeholder='Enter Descriptiuon Of News' id="">

            </textarea>
          </div>
        </div>
        <div>
          <button className='bg-sky-400 py-1 px-3 text-white w-full'>Add NEWS</button>
        </div>
      </form>
    </div>
  )
}

export default News
