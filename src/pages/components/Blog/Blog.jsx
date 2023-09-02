import React from 'react'
import {data} from './blogData.js'
import {BiUser} from 'react-icons/bi'
import {FaRegComments} from 'react-icons/fa'

const Blog = () => {
  return (
    <>

      <div className="my-28 px-5 md:px-10 lg:px-5 xl:px-0" id="blog">
         <div className="flex flex-col justify-center  ">
                <p className="uppercase tracking-[5px] text-center ">BLOGS</p>
            <h2 className="text-[45px]  text-black/90 font-semibold tracking-wide text-center">Latest News</h2>
                </div>

                <div className="grid gap-5 mt-8 mx-auto max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {
                    data.map((item,index)=>{
                        return <div key={index} className="shadow-md pb-4">
                            <img className='w-full' src={item.img} alt="" />
                            <div className="py-5 px-6">
                                <div className="flex items-center space-x-6">
                                    <div className="flex space-x-3 items-center">
                                        <button className='text-cyan-500'><BiUser></BiUser></button>
                                        <p className='font-thin text-sm text-gray-500'>Admin</p>
                                    </div>
                                    <div className="flex space-x-3 items-center">
                                        <button className='text-cyan-500'><FaRegComments></FaRegComments></button>
                                        <p className='font-thin text-sm text-gray-500'>Comments</p>
                                    </div>
                                   
                                </div>
                                <h2 className='text-[22px] text-gray-800 hover:text-secondary py-4 font-semibold max-w-3xl'>International Conference and Art Business</h2>
                                <button className='px-5 py-2 bg-cyan-600 rounded-md font-semibold text-white'>Read More</button>
                            </div>
                        </div>
                    })
                  }
                </div>

    </div>

    </>
  )
}

export default Blog