import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import AboutEvent from "./components/AboutEvent/AboutEvent";
import Banner from "./components/Banner/Banner";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Counter from "./components/Counter/Count";
import Evemt from "./components/Event/Evemt";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import SchedulePlan from "./components/SchedulePlan/SchedulePlan";
import SpeakerSection from "./components/Speaker/SpeakerSection";
import Sponcers from "./components/Sponcers/Sponcers";
import VedioSection from "./components/VedioSection/VedioSection";
import './Home.css'

const Home = () => {
  return (
    <>
   
      <Banner></Banner>
      <AboutEvent></AboutEvent>
      <FeatureSection></FeatureSection>
      <SpeakerSection></SpeakerSection>
      <Counter></Counter>
      <SchedulePlan></SchedulePlan>
      <PricingPlan></PricingPlan>
      <VedioSection></VedioSection>
      <Evemt></Evemt>
      <Sponcers></Sponcers>
      <Contact></Contact>
      <Blog></Blog>
      
      <Footer></Footer>
    </>
  );
};

export default Home;
