import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import the CSS for animations

function Aos({ children, ...props }) {
  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease',
        delay: 200,
        once: false
    });
  }, []);
  return null
}

export default Aos;
