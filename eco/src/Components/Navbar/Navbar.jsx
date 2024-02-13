import React from 'react'
import logo2 from '../Images/logo2.png';

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center mx-auto  w-[92%]'>
        <div>
            <img className='w-32 h-16' src={logo2} alt="" />
        </div>
        <div >
            <ul className='flex gap-4 items-center'>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href=''>Home</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="">Avilable Resourses</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="">Recycle Products</a> </li>
            </ul>
        </div>
        <div>
            <button className='bg-green-600 px-4 py-1 text-white rounded-full hover:bg-green-400 items-center'>Log In</button>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar
