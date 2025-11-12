import React from 'react'
import { Link } from 'react-router-dom'

const Breadcums = ({ title }) => {
  return (
    <div className='w-full border border-slate-600 p-4'>
      <div className='flex justify-between items-center'>
        <div>
          {title}
        </div>
        <div>
          <div className=''>
            <Link to="">Home </Link>
            <span>/ </span>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcums
