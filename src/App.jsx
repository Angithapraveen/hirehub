import {Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Search from "./routes/Search";
import MyBooking from "./routes/MyBooking";
import About from "./routes/about";
import Register from "./routes/Register";

function App() {
  

  return (
    <div className="">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/search" element={<Search />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        
    </div>
  )
}

export default App
