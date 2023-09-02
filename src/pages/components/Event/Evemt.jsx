import React from 'react'
import img from '../../../assets/img/event.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import CommonBtn from '../Common-btn/CommonBtn'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Evemt = () => {
  return (
    <>
      <div className=" pt-40 pb-20 bg-gray-50">
         <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-0 flex flex-col lg:flex-row items-center justify-between space-x-10">
            <div  data-aos="fade-right" className="left w-full  lg:w-[50%]">
                <img src={img} alt="" />
            </div>
            <div data-aos="fade-left" className="right w-full  lg:w-[50%]">
            <a href="https://www.eventbrite.com/e/711710213407?aff=oddtdtcreator" > <p className="uppercase tracking-[5px] "> JOIN THE EVENT</p></a>
        
            <h2 className="text-[42px] mt-3 text-black/90 font-semibold tracking-wide">Why Choose Eventrox?</h2>
            <p className="max-w-[560px] my-7 text-gray-500">Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.</p>

            <ul className='space-y-3'>
               <div className="flex items-center space-x-3 text-gray-800">
                <button className='text-secondary'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
               <li>Multiple Announcements during the event.</li>
               </div>
               <div className="flex items-center space-x-3 text-gray-800">
                <button className='text-secondary'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
               <li>Logo & company details on the WordCamp.</li>
               </div>
               <div className="flex items-center space-x-3 text-gray-800">
                <button className='text-secondary'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
               <li>Dedicated blog post thanking each Gold.</li>
               </div>
               <div className="flex items-center space-x-3 text-gray-800">
                <button className='text-secondary'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
               <li>Acknowledgment and opening and closing.</li>
               </div>
            </ul>

            <div className="mt-8">
               <CommonBtn></CommonBtn>
            </div>
            </div>
         </div>
      </div>
    
    </>
  )
}

export default Evemt