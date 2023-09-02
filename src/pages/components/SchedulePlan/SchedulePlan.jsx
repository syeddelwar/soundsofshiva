import React from 'react'
import {data} from './ScheduleData.js'
import Timeline from '../Timeline/Timeline.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SchedulePlan = () => {
  return (
    <>

      <div className="bg-gray-50 py-24" id="schedule">
      <div className="flex flex-col justify-center text-center ">
                <p className="uppercase tracking-[5px] ">ABOUT CONFERENCE</p>
            <h2 className="text-[45px]  text-black/90 font-semibold tracking-wide">Schedule Plan</h2>
                </div>


                <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 px-10 md:px-5 justify-between items-center mx-auto max-w-3xl mt-8">
                   {
                     data.map((item,index)=>{
                        return <div data-aos="flip-left" key={index}  
                        className={`${
                            item.id==1?"border border-yellow rounded-2xl pr-10 py-6" :
                            item.id==2 ? "border border-cyan-700 rounded-2xl pr-10 py-6 ":
                            item.id ==3 ? "border border-blue-800 rounded-2xl pr-10 py-6":
                             "border border-orange-900 rounded-2xl pr-10 py-6"   
                             }`}
                        
                        >
                          <div
                            className={`${
                                item.id==1?"bg-yellow rounded-r-full" :
                                item.id==2 ? "bg-cyan-700 rounded-r-full ":
                                item.id ==3 ? "bg-blue-700 rounded-r-full":
                                 "bg-orange-700 rounded-r-full"   
                                 }`}
                          
                          >
                          <p className='font-bold text-white py-1 px-5'>Day 0{item.id}</p>
                          </div>
                          <div className="flex justify-between items-center mt-2 pl-5 ">
                            <p 
                            
                            className={`${
                                item.id==1?"text-4xl font-bold text-yellow" :
                                item.id==2 ? "text-4xl font-bold text-cyan-900 ":
                                item.id ==3 ? "text-4xl font-bold text-blue-800":
                                 "text-4xl font-bold text-orange-800"   
                                 }`}
                            >0{item.id}</p>
                            <div className="flex ml-3 flex-col items-center justify-center">
                                <p
                                  className={`${
                                    item.id==1?"font-semibold text-xl text-yellow" :
                                    item.id==2 ? "font-semibold text-xl text-cyan-900 ":
                                    item.id ==3 ? "font-semibold text-xl text-blue-900":
                                     "font-semibold text-xl text-orange-800"   
                                     }`}
                                
                                >JAN</p>
                                <p className='font-semibold mt-0'>2023</p>
                            </div>
                          </div>
                        </div>
                     })
                   }
                </div>
      </div>



      <Timeline></Timeline>


     
    
    </>
  )
}

export default SchedulePlan