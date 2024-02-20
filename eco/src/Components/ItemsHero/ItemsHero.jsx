import React from 'react'
import banner from '../Images/Banner.png';
import p2 from '../Images/p2.jpeg';
import p3 from '../Images/p3.jpeg';
import p4 from '../Images/p4.jpeg';
import p5 from '../Images/IMG-20240217-WA0004.jpg';
import p6 from '../Images/IMG-20240217-WA0005.jpg';
import p7 from '../Images/IMG-20240217-WA0006.jpg';
import p8 from '../Images/IMG-20240217-WA0007.jpg';
import p9 from '../Images/IMG-20240217-WA0014.jpg';
import p10 from '../Images/IMG-20240217-WA0009.jpg';
import p11 from '../Images/IMG-20240217-WA0010.jpg';
import p12 from '../Images/IMG-20240217-WA0011.jpg';
import p13 from '../Images/IMG-20240217-WA0012.jpg';
import p14 from '../Images/IMG-20240217-WA0013.jpg';
import p15 from '../Images/IMG-20240217-WA0015.jpg';
import p16 from '../Images/IMG-20240217-WA0016.jpg';
import b1 from '../Images/b1.jpg';
import b2 from '../Images/b2.jpg';
import b3 from '../Images/b3.jpg';


const ItemsHero = () => {
  return (
    <>
        <div className=''>
            <img className='h-[500px] mx-auto' src={banner} alt="" />
        </div>
        <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000 pt-10'>
          <h1 className='underline'>Products</h1>
        </div>
        <div class="max-w-md mx-auto flex gap-10 pt-10 pb-10">
            <input id="input" type="text" placeholder='Search Products' class="mt-1 p-2 block w-full border-2 rounded border-gray-300 rounded-mdring-indigo-500 border-green-500"/>
            <button className="bg-green-600 p-2 text-white rounded hover:bg-green-400 items-center duration-800 ">Search</button>
        </div>
        <div className='pt-10 pb-10'>
            <div className="grid grid-cols-3 gap-20">
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p2} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Recycled Bag</h1>
                      <p className='pb-3'>Rs. 200</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p3} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Bricks</h1>
                      <p className='pb-3'>Rs. 100 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p4} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Tyre Tabel</h1>
                      <p className='pb-3'>Rs. 300</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p5} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Recycled Bag</h1>
                      <p className='pb-3'>Rs. 500 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p6} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Pencils</h1>
                      <p className='pb-3'>Rs. 5</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p7} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Handbag</h1>
                      <p className='pb-3'>Rs. 200</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p8} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Chair</h1>
                      <p className='pb-3'>Rs. 300</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p9} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Lamps</h1>
                      <p className='pb-3'>Rs. 200 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p10} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Seating Tables</h1>
                      <p className='pb-3'>Rs. 300</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p11} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Lamps</h1>
                      <p className='pb-3'>Rs. 500 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p12} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Tabels</h1>
                      <p className='pb-3'>Rs. 500</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p13} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Mirrors</h1>
                      <p className='pb-3'>Rs.250 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p14} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Tabels</h1>
                      <p className='pb-3'>Rs. 200</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p15} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Lamps</h1>
                      <p className='pb-3'>Rs. 150 </p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={p16} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Chair</h1>
                      <p className='pb-3'>Rs. 300</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
            </div>
            <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000 py-10'>
              <h1 className='underline'>Best Out of Waste</h1>
            </div>
            <div className="grid grid-cols-3 gap-20">
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={b1} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Birds Decor</h1>
                      <p className='pb-3'>Rs. 200</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={b2} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Jar Lamp</h1>
                      <p className='pb-3'>Rs. 50</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 <div className='flex  items-center border-slate-400 border-2 rounded-lg group hover:scale-110 duration-700 h-[250px]'>
                    <div>
                      <img className='w-[200px] h-[200px]' src={b3} alt="" />
                    </div>
                    <div className='pl-5'>
                      <h1 className='text-xl pb-3'>Art Decor</h1>
                      <p className='pb-3'>Rs. 20</p>
                      <button className='bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 '>Buy Now</button>
                    </div> 
                 </div>
                 </div>
                 
        </div>
        
    </>
  )
}

export default ItemsHero
