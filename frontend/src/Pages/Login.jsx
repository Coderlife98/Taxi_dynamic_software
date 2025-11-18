import React, { useState } from 'react'
import { images } from '../constant/constant'
import BreadCums from '../components/BreadCums'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (event) => {

  }
  return (
    <div className='w-full'>
      <BreadCums title="Login" images={images.loginHero} />
      <div className='container mx-auto py-5  lg:px-10 lg:py-10'>
        <div className="grid md:grid-cols-2 border border-black p-4 rounded-t-xl lg:p-7 my-3 gap-6 md:gap-10">
          <div className='flex items-center'>
            <form onSubmit={handleLogin} method='post' className='border w-full p-4 rounded-t-xl border-slate-400'>
              <div className='text-center'>
                <h3 className='lg:text-3xl text-xl font-semibold mb-4'>Login Now</h3>
              </div>
              <div className=''>
                <input type="text" onChange={(event) => { setEmail(event.target.value) }} placeholder='Enter EmaiId' name='email' className='focus-within:outline-0 py-1 px-2 w-full border-1' />
              </div>
              <div className='my-3'>
                <input type="text" onChange={(event) => { setPassword(event.target.value) }} placeholder='Enter Password' name='password' className='focus-within:outline-0 py-1 px-2 w-full border-1 ' />
              </div>
              <div>
                <button className='py-2 bg-blue-600 w-full'>Submit</button>
              </div>
            </form>
          </div>
          <div className='flex justify-center'>
            <img src={images.login_left} className='size-86' alt="Login Taxi Images" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
