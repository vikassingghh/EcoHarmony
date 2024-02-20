import React from 'react'
import image1 from '../Images/image1.svg';
import image2 from '../Images/image2.svg';
import image3 from '../Images/image3.svg';
import hero from '../Images/hero2.gif';

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 pb-10">
        <div className='justify-center item-center m-auto  pt-14'>
            <h1 className='text-5xl font-medium hover:scale-110 duration-500'><span className='font-black text-green-600'>One Step Solution</span></h1>
            <h1 className='text-5xl font-medium pt-4 '>For Waste Management</h1>
            <div className='flex pt-5 gap-2'>
              <p>Find Resources</p>
              <img className='w-7' src={image1} alt="" /> 
            </div>
            <div className='flex pt-1 gap-2'>
              <p>Buy Recycle Products</p>
              <img className='w-7' src={image2} alt="" /> 
            </div>
            <div className='flex pt-1 gap-2'>
              <p>Contribute in Enviorment</p>
              <img className='w-7' src={image3} alt="" /> 
            </div>
            <div className='pt-3 pl-8'>
            <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center'>Contact Us</button>
            </div>  
        </div>
        <div className=''>
            <img className='w-fit' src={hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
