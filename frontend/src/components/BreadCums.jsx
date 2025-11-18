import React from 'react'

const BreadCums = ({ title, images }) => {
  return (
    <div className='w-full '>
      <div className='relative'>
        <img src={images} alt={images} className='w-full' />
      </div>
    </div>
  )
}

export default BreadCums
