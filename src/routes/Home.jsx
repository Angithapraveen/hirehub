import Navbar from "../components/home/Navbar.jsx";
import Banner from "../components/home/Banner.jsx";
import Register from "./Register.jsx";

const Home = () =>{




    return(
        <div className="bg-white p-0">
            <div className="">
                <Navbar />
            </div>
            <div className="">
                <Banner />
            </div>
          
        </div>
    )
};


export default Home;