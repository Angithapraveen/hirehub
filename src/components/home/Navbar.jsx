import {Link} from "react-router-dom";
import Login from "../../routes/Login";
const Navbar = () =>{



    return(
        <div className="">
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-black">HireHub</h1>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                    
                        <a href="/login" className=" btn btn-secondary rounded-0 py-4 px-lg-5">Login</a>
                        <a href="/register" className="btn btn-dark rounded-0 py-4 px-lg-5">Register</a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
};


export default Navbar;