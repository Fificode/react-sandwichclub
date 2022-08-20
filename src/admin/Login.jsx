import React from 'react'
import Navbar from '../containers/Navbar'
const Login = () => {
  return (
    <div>
        <Navbar />
        <div className="landingimgbgmb">
            <div className="flex justify-center items-center w-[300px] h-[300px] shadow-md bg-white">
            <h1 className="text-[40px] p-3 font-[600] text-white">Log in</h1>
            <input type="text" name="" id="" className='' />
            <input type="email" name="" id="" className='' />
            </div>
        </div>
    </div>
  )
}

export default Login