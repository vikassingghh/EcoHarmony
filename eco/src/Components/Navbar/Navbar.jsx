import React from 'react'
import logo2 from '../Images/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-green-300 from-10% via-green-200 via-30% to-green-100 to-90%'>
      <nav className='flex justify-between items-center mx-auto  w-[92%] '>
        <div className='flex items-center'>
            <img className='w-32 h-16' src={logo2} alt="" />
            <a href=""><h1 className='font-medium text-2xl'>EcoHarmony</h1></a>
        </div>
        <div className=''>
            <ul className='flex gap-4 items-center'>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="/" >Home</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="/resources">Available Resources</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="/service">Services</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="/product">Recycle Products</a></li>
                <li><a className='font-semibold hover:text-gray-500 duration-800' href="/collab">Collaborators</a></li>
            </ul>
        </div>
        <div>
            <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Log In</button>
        </div>
        
      </nav>
      </div>
    </>
  )
}

export default Navbar
