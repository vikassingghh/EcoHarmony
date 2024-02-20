// src/components/Contact.js
import React from 'react';
import con from '../Images/Contact.gif';

const Contact = () => {
  return (
    <div className="pb-10 pt-10">
        <div className='flex justify-center text-[30px] font-bold hover:scale-110 duration-1000'>
            <h1 className='underline'>Connect with us</h1>
        </div>
        <div className='grid grid-cols-2 w-[92%] mx-auto pt-10'>
        <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg">Name</label>
          <input type="text" id="name" className="border rounded-lg p-2" placeholder='vikas singh'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg">Email</label>
          <input type="email" id="email" className="border rounded-lg p-2 pl" placeholder='example@gmail.com' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea id="message" className="border rounded-lg p-2 h-32" placeholder='Become part of this......'></textarea>
        </div>
        <button type="submit" className="bg-green-600 px-4 py-1 text-white rounded hover:bg-green-400 items-center duration-800 ">Submit</button>
      </form>
      <div>
        <img src={con} alt="" />
     </div>
     </div>
     
    </div>
  );
};

export default Contact;
