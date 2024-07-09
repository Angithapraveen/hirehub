import {useState} from "react";


const Register = () =>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conPassword, setConPassword] = useState();

    return(
        <div className="">
            <div className="">
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="/home" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-black">HireHub</h1>
                </a> 
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/home" className="nav-item nav-link">Home</a>
                        <a href="/login" className=" btn btn-secondary rounded-0 py-4 px-lg-5">Login</a>
                        <a href="/register" className="btn btn-dark rounded-0 py-4 px-lg-5">Register</a>
                    </div>
                </div>
            </nav>
           {/* LOGIN CONTAINER */}
            <div className="">
            <div className="container-xxl bg-dark mb-5 " style={{padding: "70px"}}>
                        <br></br>
                        <form>
                        <div className="container">
                            <div className="col g-2">
                                <div className="row-md-2">
                                    <div className="col g-2">
                                        <div className="row-md-2">
                                            <h4 className="text-white" >email</h4>
                                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control border-0" required/>
                                        </div>
                                        <div className="row-md-2">
                                            <h4 className="text-white" data-wow-delay="0.1s">Password</h4>
                                            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control border-0" required/>
                                        </div>
                                        <div className="row-md-2">
                                            <h4 className="text-white" data-wow-delay="0.1s">Comform Password</h4>
                                            <input value={conPassword} onChange={(event) => setConPassword(event.target.value)} type="password" className="form-control border-0" required/>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <br></br>
                        <div className="text-center">
                            <button onClick={(event) =>loginUser(event)} id="btn_signIn">
                                Register
                            </button>
                        </div>
                        </form>
                        <br></br>
                        <div className="text-center">
                            <span className="text-white ">Already have an account </span>
                            <a href="/register" className="text-white">Login</a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
};


export default Register;