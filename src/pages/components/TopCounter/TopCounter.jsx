import { useEffect, useState } from "react"


// eslint-disable-next-line react/prop-types
const TopCounter = ({duration}) => {

  const [time,setTime] = useState(duration);
  useEffect(()=>{
    setTimeout(()=>{
        setTime(time-1000)
    },1000)
  },[time])

  const getFormatedTime =(mileSeconds)=>{
    let seconds = parseInt(Math.floor(mileSeconds/1000))
    let minutes = parseInt(Math.floor(seconds/60))
    let hours = parseInt(Math.floor(minutes/60))
    let days = parseInt(Math.floor(hours/60))

    let second = parseInt(seconds % 60)
    let minute = parseInt(minutes % 60)
    let hour = parseInt(hours % 24)

    return  <div className="py-6 max-w-6xl mx-auto shadow-['0 0 30px rgba(0,0,0,0.30)']  bg-gradient-to-r from-primary to-secondary px-5">

        

    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 space-x-10 lg:space-y-0">
       <div className="flex items-center">
       <div className="text-center ">
           <h2 className="text-5xl font-bold text-white">{days}</h2>
           <h2 className="text-xl font-medium mt-1 text-white">Days</h2>
        </div>
        <div className=" text-white text-5xl hidden md:block">
            <p>:</p>
         
        </div>
       </div>
        <div className="text-center">
           <h2 className="text-5xl font-bold text-white">{hour}</h2>
           <h2 className="text-xl font-medium text-white">hours</h2>
        </div>
        <div className=" text-white text-5xl hidden md:block">
            <p>:</p>
         
        </div>
        <div className="text-center">
           <h2 className="text-5xl font-bold text-white">{minute}</h2>
           <h2 className="text-xl font-medium mt-1 text-white">Minute</h2>
        </div>
        <div className=" text-white text-5xl hidden md:block">
            <p>:</p>
         
        </div>
        <div className="text-center">
           <h2 className="text-5xl font-bold text-white">{second}</h2>
           <h2 className="text-xl font-medium mt-1 text-white">Second</h2>
        </div>
       
    </div>

</div>
  
  }
    
  return (

    <div>{getFormatedTime(time)}</div>
   
  )
}

export default TopCounter