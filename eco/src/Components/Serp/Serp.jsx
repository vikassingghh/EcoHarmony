import React from 'react'
import computer from '../Images/computer.jpeg';
import ser1 from '../Images/random.jpg';
import ser2 from '../Images/ser2.jpeg'
import ser3 from '../Images/ser3.jpeg'
import ser4 from '../Images/ser4.jpeg'
import ser5 from '../Images/ser5.jpeg'
import ser6 from '../Images/ser6.jpeg'
import ser7 from '../Images/ser7.jpeg'
import ser8 from '../Images/ser8.jpeg'
import ser9 from '../Images/ser9.jpeg'

const Serp = () => {
  return (
    <>
        <div className=''>
            <img className='h-[500px] mx-auto' src={computer} alt="" />
        </div>
        <div className='grid grid-cols-3 gap-14 w-[92%] mx-auto pt-10 pb-10'>
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser1} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Augmented Reality (AR) Waste Sorting</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Users can point their phone's camera at a pile of waste, and AR technology will overlay labels indicating which items are recyclable, compostable, or destined for landfill.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div>
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser4} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Smart Bin Integration</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Partner with municipalities or businesses to install smart bins equipped with sensors that detect when they're full. The app notifies nearby ragpickers to empty the bins, optimizing collection routes and reducing overflow.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div>
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser8} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Predictive Analytics</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Utilize machine learning algorithms to predict future waste generation trends based on historical data. This allows municipalities and recycling companies to allocate resources more efficiently and plan for capacity expansion.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div> 
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser2} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Gamification</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Implement gamified challenges and competitions to encourage users to recycle more effectively. Users can earn points, badges, or rewards for participating in cleanup events, achieving waste reduction goals, or correctly sorting waste.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div> 
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser3} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Voice Recognition</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Allow users to verbally input the type of waste they're disposing of, and the app will provide guidance on proper disposal methods. This feature is especially helpful for users with limited literacy or visual impairments.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div> 
          <div className='border-slate-400 border-2 rounded-lg group w-[88%] mx-auto hover:shadow-2xl duration-700'>
            <div className='pl-8 group-hover:scale-x-125 duration-1000'>
              <img className='w-60 ' src={ser6} alt="" />
            </div>
            <div className='pl-4 pt-5'>
              <h2 className='text-base font-semibold'>Micro-Donations</h2>
            </div>
            <div>
              <p className='text-sm pl-3 pt-3'>Enable users to make micro-donations through the app to support local environmental initiatives or fund training programs for ragpickers. Transparency features show users how their contributions are making a difference.
              </p>
            </div>
            <div className='pt-3 pl-24 pb-5'>
              <button className='bg-green-600 px-3 py-1 text-white rounded hover:bg-green-400 items-center duration-800 text-base '>Read More</button>
            </div>
          </div> 
          
          
        </div>
    </>
  )
}

export default Serp
