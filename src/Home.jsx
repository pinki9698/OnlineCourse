import home from "../src/images/home1.jpg"
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common 
             name="Grow your knowledge with "
             imgsrc={home}
             visit="/service"
             btname="Get Started"
           />
        </>
    );
}

export default Home;