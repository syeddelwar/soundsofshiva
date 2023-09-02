import React from 'react'
import './counter.css'
import {counterData} from './counter.js'
import { BsHeadphones } from 'react-icons/bs'


const Counter = () => {
  return (
    <>

        <div className=" px-5 md:px-10 lg:px-16 counter-bg bg-opacity-5 py-24  -z-10 ">
         <div className="max-w-6xl px-16 mx-auto flex space-y-10 md:space-y-0 z-10 flex-col md:flex-row justify-between items-center">
         {
             counterData.map((item,index)=>{
               return <div key={index} className="flex space-y-3 flex-col items-center">
                    <div className="rotate-vert-center ">
                      <button className={`${
                        item.count==190?"text-7xl text-white p-6 bg-yellow rounded-full" :
                        item.count== 62 ? "text-7xl text-white p-6 bg-cyan-600 rounded-full ":
                        item.count == 54 ? "text-7xl text-white p-6 bg-blue-900 rounded-full":
                         "text-7xl text-white p-6 bg-orange-700 rounded-full"   
                         }`}><BsHeadphones></BsHeadphones></button>
                    </div>
                    <p className='text-7xl text-gray-800 font-semibold'>{item.count}</p>
                    <h2 className={`${
                        item.count==190?"font-bold text-[17px] text-yellow" :
                        item.count== 62 ? "font-bold text-[17px] text-cyan-600 ":
                        item.count == 54 ? "font-bold text-[17px] text-blue-900":
                         "font-bold text-[17px] text-orange-700"   
                         }`}>{item.name}</h2>
               </div>
             })
           }
         </div>
        </div>


        {/* ........   timeline ............ */}

       
    </>
  )
}

export default Counter