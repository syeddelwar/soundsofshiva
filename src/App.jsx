import { useEffect } from "react";
import Home from "./pages/Home"
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation will only occur once
      mirror: false, // Animation will not mirror when scrolling back up
    });
  }, []);


  return (
    <>
       <Home></Home>
    </>
  )
}

export default App
