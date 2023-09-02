import React from 'react'
import './speaker.css'
import img from '../../../assets/img/speaker-1.jpg'
import img2 from '../../../assets/img/speaker-5.jpg'
import img3 from '../../../assets/img/speaker-8.jpg'
import img4 from '../../../assets/img/speaker-6.jpg'
import banner from '../../../assets/img/speaker-bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SpeakerSection = () => {
  return (
    <>

       <div className="speaker-bg py-24 relative hidden lg:block" id="speakers">
            <p className="uppercase left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-center absolute z-20 mx-auto text-white tracking-[5px] ">features</p>
            <h2 className="text-[45px] left-1/2 mt-14 right-0 transform -translate-x-1/2 -translate-y-1/2  absolute z-20 mx-auto text-center text-white font-semibold tracking-wide">Todays Performers</h2>
     
         {/* <div className="absolute bg-black/10 inset-0 z-10 "></div> */}

         <div className="z-20 lg:gap-x-7 gap-y-10   mt-40 max-w-6xl left-0  mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

         <div className="relative w-full h-full rounded-full border-[12px] border-white md:w-300px md:h-300px group">
  <div className="overflow-hidden rounded-full w-full h-full">
    <img className="object-cover w-full h-full duration-500 transform scale-100 group-hover:scale-105" src={img2} alt="" />
  </div>
  <div className="absolute inset-0 rounded-full duration-500 bg-secondary/60 w-full h-full group flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
    <h2 className="text-xl font-semibold text-center text-white">Darley Maker</h2>
    <p className="text-white uppercase text-center text-sm">Event manager</p>
  </div>
</div>


            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>
            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img3} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>
            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img4} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>


            <div className="relative w-full h-full rounded-full border-[12px] border-white md:w-300px md:h-300px group">
  <div className="overflow-hidden rounded-full w-full h-full">
    <img className="object-cover w-full h-full duration-500 transform scale-100 group-hover:scale-105" src={img2} alt="" />
  </div>
  <div className="absolute inset-0 rounded-full duration-500 bg-secondary/60 w-full h-full group flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
    <h2 className="text-xl font-semibold text-center text-white">Darley Maker</h2>
    <p className="text-white uppercase text-center text-sm">Event manager</p>
  </div>
</div>


            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>
            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img3} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>
            <div className="relative w-full h-full rounded-full lg:border-[12px] lg:border-white md:w-300px md:h-300px  group ">
                <img className='rounded-full  lg:w-full lg:h-full duration-500 overflow-hidden absolute group-hover:scale-105 ' src={img4} alt="" />
                <div className="absolute inset-0 rounded-full duration-500 hover:bg-secondary/60 w-full h-full group flex flex-col justify-center items-center ">
                    <h2 className='text-xl hidden group-hover:block font-semibold text-center text-white'>Darley Maker</h2>
                    <p className='text-white hidden group-hover:block uppercase text-center  text-sm'>Event manager</p>
                </div>
            </div>

            
         </div>

       </div>






       


     


    </>
  )
}

export default SpeakerSection