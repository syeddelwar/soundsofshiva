import Navbar from "../../../shared/Navbar";
import banner from "../../../assets/banner.jpg";
import TopCounter from "../TopCounter/TopCounter";
import AOS from 'aos';
import 'aos/dist/aos.css';




const Banner = () => {
  
  
  return (
    <>
      <div
        className="h-[130vh] bg-center bg-no-repeat bg-cover w-full relative"  
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute top-5  left-0 right-0 z-40">
          <Navbar></Navbar>
        </div>

        <div className="bg-black/70 z-10 inset-0 absolute w-full h-full"></div>

        <div className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p data-aos="fade-down" className="text-yellow text-4xl text-center font-semibold">2 September , 2023</p>
          <h2 data-aos="fade-down" className="text-white text-7xl text-center mt-8 font-bold">Sounds of Shiva </h2>
          <h2 data-aos="fade-up" className="text-white text-7xl text-center mt-2 font-bold">Event  2023 </h2>
          <div className="flex items-center justify-between mt-12 mb-20">
            <h2 className="font-bold uppercase text-white">50 seats</h2>
            <h2 className="font-bold uppercase text-white">12 Speakers</h2>
            <h2 className="font-bold uppercase text-white">New York</h2>
          </div>
         <div className="text-center mx-auto">
         <a href ="https://www.eventbrite.com/e/711710213407?aff=oddtdtcreator" >  <button className="rounded-xl font-bold text-white bg-yellow px-8 py-3">Book Now</button> </a>
         </div>
        </div>

        <div className="absolute z-50  -bottom-16  left-0 right-0">
          <TopCounter duration={100 * 24 * 60 * 60 * 1000}></TopCounter>
          
        </div>
      </div>
    </>
  );
};

export default Banner;
