import React from 'react'
import ideas from '../Images/Ideas.jpeg';
import land from '../Images/lanfills1.jpeg';
import land2 from '../Images/lanfills2.jpeg';
import land3 from '../Images/landfills3.jpeg'

const AvilableP = () => {
  return (
    <>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className='justify-center item-center m-auto  pt-14'>
            <h1 className='text-5xl font-medium hover:scale-110 duration-500'><span className='font-black text-green-600'>Find Different Materials</span></h1>
            <h1 className='text-5xl font-medium pt-4 '>Form Landfills</h1>
            <div className='pt-3 pl-8'>
            </div>  
        </div>
        <div>
            <img className='w-fit' src={ideas} alt="" />
        </div>
      </div>
      <div className='py-10 bg-gradient-to-r from-green-300 from-10% via-green-200 via-30% to-green-100 to-90%'>
        <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000'>
          <h1 className='underline'>Search Here</h1>
        </div>
        <div class="max-w-md mx-auto flex gap-10 pt-10 pb-10">
            <input id="input" type="text" placeholder='Search Landfills or Materials' class="mt-1 p-2 block w-full border-2 rounded border-gray-300 rounded-mdring-indigo-500 border-green-500"/>
            <button className="bg-green-600 p-2 text-white rounded hover:bg-green-400 items-center duration-800 ">Search</button>
        </div>
        <div className='grid gird-cols-1 w-[92%] mx-auto'>
          <div className='grid grid-cols-2 pt-10'>
            <div className='w-96'>
              <img src={land} alt="" />
            </div>
            <div className=''>
              <h1 className='text-2xl font-semibold'>Delhi Landfills</h1>
              <div className='pt-10 flex'>
                <ul>
                  <li>Tires</li>
                  <li>lead-acid batteries</li>
                  <li>Plastic </li>
                  <li>iron</li>
                </ul>
                <ul className='pl-10'>
                  <li>75 kg</li>
                  <li>90 kg</li>
                  <li>110 kg</li>
                  <li>200 kg</li>
                </ul>
              </div>
              <div className='pt-5'>
                <button className="bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800">Contact</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 pt-10'>
            <div className='w-96'>
              <img src={land2} alt="" />
            </div>
            <div className=''>
              <h1 className='text-2xl font-semibold'>Mumbai Landfills</h1>
              <div className='pt-10 flex'>
                <ul>
                  <li>News Paper</li>
                  <li>Aluminum Cans</li>
                  <li>Packing Foam</li>
                  <li>Plastic Bags</li>
                </ul>
                <ul className='pl-10'>
                  <li>75 kg</li>
                  <li>90 kg</li>
                  <li>110 kg</li>
                  <li>200 kg</li>
                </ul>
              </div>
              <div className='pt-5'>
                <button className="bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800">Contact</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 pt-10'>
            <div className='w-96'>
              <img src={land3} alt="" />
            </div>
            <div className=''>
              <h1 className='text-2xl font-semibold'>Kolkata Landfills</h1>
              <div className='pt-10 flex'>
                <ul>
                  <li>Copper</li>
                  <li>Disposal Cups</li>
                  <li>Steel waste</li>
                  <li>Containers</li>
                </ul>
                <ul className='pl-10'>
                  <li>75 kg</li>
                  <li>90 kg</li>
                  <li>110 kg</li>
                  <li>200 kg</li>
                </ul>
              </div>
              <div className='pt-5'>
                <button className="bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800">Contact</button>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>

    </>
  )
}

export default AvilableP
