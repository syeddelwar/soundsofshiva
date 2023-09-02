import { AiOutlineCheckCircle } from 'react-icons/ai'
import RegisterBtn from '../Common-btn/RegisterBtn'
import CommonBtn from '../Common-btn/CommonBtn'
import './about.css'
import aboutImg from '../../../assets/img/about-img-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutEvent = () => {
  return (
    <>
    <div className="max-w-6xl px-5 md:px-10 lg:px-0 flex lg:flex-row flex-col justify-between  items-center  mx-auto  mt-36" id="about">
         <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="left w-full lg:w-[50%] ">
            <p className="uppercase tracking-[5px] ">about event</p>
            <h2 className="text-[42px] mt-3 text-black/90 font-semibold tracking-wide">Welcome to Sounds of Shiva</h2>
          
            <p className="max-w-[560px] my-5 text-gray-500">
               
                  

 A collective that melds the artistic expression of Psychedelic Trance, crafting unique gatherings that take place anywhere at any time, from an open field to a mountain valley or urban habit to be found. Mindful of our environment, we focus on experiences that honor both natural landscapes and man made spaces.

We invite every soul, of any age, race, gender, creed or belief system to join us on this journey to find our way home - a world for for all, a sanctuary where acceptance & tolerance reigns supreme, and love flourishes.

Emphasizing active participation, we cultivate a culture that empowers all to connect, explore, and enrich our collective journey. Here, love, peace, and understanding are not mere words; they form our guiding principles, celebrating differences and embracing individuality.

Embark with us on this incredibly amazing adventure we're about to undertake, where every beat calls to exploration, every dance is a shared delight, and each moment is a step toward a more compassionate world.

You are our inspiration; your presence is our joy.
.</p>

            {/* <ul className='space-y-3'>
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
            </ul> */}

            <div className="mt-8">
               <CommonBtn></CommonBtn>
            </div>
         </div>



         <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="right w-full lg:w-[50%] pt-10 lg:pt-28">
            <div className="about-bg w-full h-full bg-cover bg-center bg-no-repeat">
               <div className="mx-auto flex justify-center">
                <img className='border-white shadow-xl w-[70%] h-[70%] border-[15px] rounded-full md:w-[480px] md:h-[480px]' src={aboutImg} alt="" />
               </div>
            </div>
         </div>
    </div>

    {/* <div className="flex justify-center">
      <img className='spin' src={circle} alt="" />
    </div> */}

    </>
  )
}

export default AboutEvent