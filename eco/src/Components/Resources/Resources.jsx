import React from 'react'
import land1 from '../Images/lanfills1.jpeg';
import land2 from '../Images/lanfills2.jpeg';
import land3 from '../Images/landfills3.jpeg';

const Resources = () => {
  return (
    <>
      <div className=' bg-gradient-to-r from-green-100 from-10% via-green-200 via-30% to-green-300 to-90% pt-10 pb-10'>
        <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000'>
            <h1 className='underline'>Find Resources</h1>
        </div>
        <div className='grid grid-cols-2 mx-auto  w-[92%] pt-5 gap-10 pl-20 pt-10'>
          <div className='flex border-slate-400 border-2 rounded-lg shadow-2xl w-[80%] '>
            <div className=''>
              <img className='w-48' src={land1} alt="" />
            </div>
            <div className='text-lg pl-10 pt-2'>
              <h2 className='hover:scale-105 duration-700'>Delhi Landfills</h2>
              <div className='pt-3'>
                <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base'>See Resources</button>
              </div>
            </div>
          </div>
          <div className='flex border-slate-400 border-2 rounded-lg shadow-2xl w-[80%] '>
            <div className=''>
              <img className='w-48' src={land2} alt="" />
            </div>
            <div className='text-lg pl-10 pt-2'>
              <h2 className='hover:scale-105 duration-700'>Mumbai Landfills</h2>
              <div className='pt-3'>
                <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base'>See Resources</button>
              </div>
            </div>
          </div>
          <div className='flex border-slate-400 border-2 rounded-lg shadow-2xl w-[80%] '>
            <div className=''>
              <img className='w-48' src={land3} alt="" />
            </div>
            <div className='text-lg pl-10 pt-2'>
              <h2 className='hover:scale-105 duration-700'>Bangalore Landfills</h2>
              <div className='pt-3'>
                <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base'>See Resources</button>
              </div>
            </div>
          </div>
          <div className='flex border-slate-400 border-2 rounded-lg shadow-2xl w-[80%] '>
            <div className=''>
              <img className='w-48' src={land1} alt="" />
            </div>
            <div className='text-lg pl-10 pt-2'>
              <h2 className='hover:scale-105 duration-700'>Kolkata Landfills</h2>
              <div className='pt-3'>
                <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base'>See Resources</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources
