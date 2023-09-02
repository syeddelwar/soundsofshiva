import React from 'react'
import './contact.css'
import {FaUserAlt} from 'react-icons/fa'
import {GoRocket} from 'react-icons/go'

const Contact = () => {
  return (
    <> 
      <div className="bg-gray-100 py-40" id="contact">
        <div className="max-w-6xl mx-auto px-5 xl:px-0 flex flex-col md:flex-row bg-white">

           <div className="contact-img group w-full md:w-[35%]">
               <div className=" h-full flex flex-col items-center justify-center w-full">
               <div className=" text-center my-14 md:my-0">
                <div className="mb-6">
                    <button className='p-10 group-hover:animate-sping text-6xl bg-white rounded-full'><GoRocket></GoRocket></button>
                </div>
               <h2 className='text-white text-2xl uppercase font-bold'>REGISTER NOW</h2>
                <p className='text-center text-sm font-medium text-white mt-5 px-5 lg:px-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmtempor incididunt labore et dolore magna.</p>
               </div>
               </div>
               
           </div>

           <div className="w-full md:w-[65%] py-12 px-5">
                <div className="flex mb-5 items-center space-x-2 px-5 py-[12px] bg-white border hover:border-secondary">
                    <button className='text-gray-500'><FaUserAlt></FaUserAlt></button>
                    <input className='placeholder-slate-400 outline-none border-0' type="text" placeholder='Name' />
                </div>
                <div className="flex mb-5 items-center space-x-2 px-5 py-[12px] bg-white border hover:border-secondary">
                    <button className='text-gray-500'><FaUserAlt></FaUserAlt></button>
                    <input className='placeholder-slate-400 outline-none border-0' type="text" placeholder='Email' />
                </div>
                <div className="flex mb-5 items-center space-x-2 px-5 py-[12px] bg-white border hover:border-secondary">
                    <button className='text-gray-500'><FaUserAlt></FaUserAlt></button>
                    <input className='placeholder-slate-400 outline-none border-0' type="text" placeholder='Phone' />
                </div>
                <div className="flex mb-5 items-center space-x-2 px-5 py-[12px] bg-white border hover:border-secondary">
               
                    <textarea cols="25" rows="10" className='placeholder-slate-400 outline-none border-0' type="text" placeholder='Message' />
                   
                </div>

                <div className="mt-5 flex justify-end mb-5">
                    <button className='font-semibold px-8 py-[12px] rounded-xl bg-zinc-900 text-gray-200'>Register Now</button>
                </div>
              
               </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Contact