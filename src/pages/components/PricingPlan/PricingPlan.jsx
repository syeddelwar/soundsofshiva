import React from 'react'
import {SlDiamond} from 'react-icons/sl'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {PiWarningCircleThin} from 'react-icons/pi'

const PricingPlan = () => {
  return (
    <>

    <div className="my-28">
    <div className="flex flex-col justify-center  ">
                <p className="uppercase tracking-[5px] text-center ">GET TICKET</p>
            <h2 className="text-[45px]  text-black/90 font-semibold tracking-wide text-center">Choose a Ticket</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-14 max-w-6xl px-14 mx-auto mt-20">

                    <div className="group pricing border-b-[22px] border-cyan-600 shadow-md bg-white">
                       <div className=" h-[130px] bg-cyan-500"></div>
                       <div className="mx-auto flex justify-center -mt-14">
                        <button className='p-4 group-hover:animate-spin border-cyan-600 border-[6px] ring-[12px] rounded-full text-6xl bg-white  ring-white text-cyan-600'><SlDiamond></SlDiamond></button>
                       </div>
                       <div className=" bg-white h-10 w-full -mt-16 rounded-[100%]">
                       
                       </div>
                       <div className="">
                       <p className='pt-12 text-2xl text-gray-800 font-semibold text-center'>Day Pass</p>
                        <p className='text-center font-bold text-2xl text-cyan-500 mt-1'>$35.99</p>
                       </div>

                       <div className="flex justify-center items-center space-x-2 mt-7">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Conference Tickets</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Lunch And Coffee</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Certificate</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-secondary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Easy Access</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-secondary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Contacts</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="my-8 flex justify-center overflow-hidden">
                        <button className='px-6 group-hover:bg-white duration-500 group-hover:border-b-4 group-hover:border-cyan-400 group-hover:border-t-4  group-hover:text-black  py-2 rounded bg-cyan-600 font-bold text-white'>Buy Ticket</button>
                       </div>
                    </div>

                    <div className="group border-b-[22px] border-secondary shadow-md bg-white">
                       <div className=" h-[130px] bg-secondary"></div>
                       <div className="mx-auto flex justify-center -mt-14">
                        <button className='p-4 group-hover:animate-spin border-sebg-secondary border-[6px] ring-[12px] rounded-full text-6xl bg-white group-hover:rotate-[360] ring-white text-secondary'><SlDiamond></SlDiamond></button>
                       </div>
                       <div className=" bg-white h-10 w-full -mt-16 rounded-[100%]">
                       
                       </div>
                       <div className="">
                       <p className='pt-12 text-2xl text-gray-800 font-semibold text-center'>Day Pass</p>
                        <p className='text-center font-bold text-2xl text-secondary mt-1'>$35.99</p>
                       </div>

                       <div className="flex justify-center items-center space-x-2 mt-7">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Conference Tickets</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Lunch And Coffee</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Certificate</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-secondary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Easy Access</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-secondary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Contacts</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="my-8 flex justify-center overflow-hidden">
                        <button className='px-6 group-hover:bg-white duration-500 group-hover:border-b-4 group-hover:border-sebg-secondary group-hover:border-t-4  group-hover:text-black  py-2 rounded bg-secondary font-bold text-white'>Buy Ticket</button>
                       </div>
                    </div>

                    <div className="group border-b-[22px] border-primary shadow-md bg-white">
                       <div className=" h-[130px] bg-primary"></div>
                       <div className="mx-auto flex justify-center -mt-14">
                        <button className='p-4 group-hover:animate-spin border-sebg-secondary border-[6px] ring-[12px] rounded-full text-6xl bg-white group-hover:rotate-[360] ring-white text-primary'><SlDiamond></SlDiamond></button>
                       </div>
                       <div className=" bg-white h-10 w-full -mt-16 rounded-[100%]">
                       
                       </div>
                       <div className="">
                       <p className='pt-12 text-2xl text-gray-800 font-semibold text-center'>Day Pass</p>
                        <p className='text-center font-bold text-2xl text-primary mt-1'>$35.99</p>
                       </div>

                       <div className="flex justify-center items-center space-x-2 mt-7">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Conference Tickets</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Lunch And Coffee</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-green-500'><AiOutlineCheckCircle></AiOutlineCheckCircle></button>
                            <p className='text-sm text-gray-400 font-medium'>Certificate</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-secondary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Easy Access</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="flex justify-center items-center space-x-2">
                            <button className='text-primary'><PiWarningCircleThin></PiWarningCircleThin></button>
                            <p className='text-sm text-gray-400 font-medium'>Free Contacts</p>
                       </div>
                       <div className="border border-dashed w-60 my-2 mx-auto "></div>
                       <div className="my-8 flex justify-center overflow-hidden">
                        <button className='px-6 group-hover:bg-white duration-500 group-hover:border-b-4 group-hover:border-sebg-secondary group-hover:border-t-4  group-hover:text-black  py-2 rounded bg-primary font-bold text-white'>Buy Ticket</button>
                       </div>
                    </div>


                    

                </div>
    </div>
    
    </>
  )
}

export default PricingPlan