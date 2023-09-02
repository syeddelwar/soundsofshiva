import React from 'react'
import {featureData} from './feature.js'
import { SlDiamond } from 'react-icons/sl'
import '../../Home.css'
import './feature.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeatureSection = () => {
  return (
    <> 
    <div className="">
        <div className="max-w-6xl px-5 md:px-10 lg:px-5 xl:px-0 mx-auto my-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-10">
                <div className="flex flex-col justify-center  ">
                <p className="uppercase tracking-[5px] ">features</p>
            <h2 className="text-[45px]  text-black/90 font-semibold tracking-wide">Our Feature</h2>
                </div>
                {
              featureData.map((item,index) =>{
                return <div data-aos="fade-down" key={index} className="">
                    <div className="flex space-x-5 px-6 py-10 duration-500 border shadow-xl hover:shadow-none w-full h-full items-center">
                        <div className="left">
                            <button className='text-4xl  text-secondary '><SlDiamond className='hover:rotate-center'></SlDiamond></button>
                        </div>
                        <div className="right space-y-3">
                            <h2 className='text-xl font-semibold'>{item.name}</h2>
                            <p className='text-gray-500'>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</p>
                        </div>
                    </div>
                </div>
              })
           }
            </div>
           
        </div>
    </div>

    </>
  )
}

export default FeatureSection