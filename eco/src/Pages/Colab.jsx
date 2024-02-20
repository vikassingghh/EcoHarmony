import React from 'react'
import Map from '../Components/Images/Map.jpeg'

const Colab = () => {
  return (
    <>
        <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000 py-10'>
            <h1 className='underline'>Our Collaborators</h1>
        </div>
        <div className='flex justify-center gap-20 '>
            <div class="max-w-md  flex gap-10 pb-10 items-center">
                <input id="input" type="text" placeholder='Search Loacations' class="mt-1 p-2 block w-full border-2 rounded border-gray-300 rounded-mdring-indigo-500 border-green-500"/>
                <button className="bg-green-600 p-2 text-white rounded hover:bg-green-400 items-center duration-800 ">Search</button>
            </div>
            <div className=" w-64">
                <select className="block  appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Landfills</option>
                    <option>Recycle Industries</option>
                    <option>Municipal Corporation</option>
                </select>
            </div>
        </div>
        <div className='pb-10'>
            <img className='h-[500px] mx-auto' src={Map} alt="" />
        </div>
    </>
  )
}

export default Colab
