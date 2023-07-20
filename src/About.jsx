import Common from "./Common";
import hero from "../src/images/hero-img.png";
const About=()=>{
    return(
        <>
           <Common 
             name="Welcome to About page"
             imgsrc={hero}
             visit="/contact"
             btname="Contact now"
           />
        </>
    );
}

export default About;