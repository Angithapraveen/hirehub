




const Search = () =>{




    return(
        <div className="">
            <div className="">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="/home" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-dark">HireHub</h1>
                </a>
                <button type="button" className="navbar-toggler me-4 " data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/about" className="nav-item nav-link">Home</a>
                        <a href="/mybooking" className="nav-item nav-link">MyBooking</a>
                        <a href="https://chatapp-618df.web.app/login" className="nav-item nav-link">Hirehubmessage</a>
                        <a href="/search" className="nav-item nav-link active">Search</a>
                        <a href="/home" className="btn btn-dark rounded-0 py-4 px-lg-5">Logout</a>
                    </div>
                    
                </div>
            </nav>

            <div className="container-fluid bg-dark mb-5 wow5 fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected>Category</option>
                                        <option value="1">Plumber</option>
                                        <option value="2">Electrician</option>
                                        <option value="3">Carpentry</option>
                                    
                                    
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0">
                                        <option selected>Location</option>
                                        <option value="1">Location 1</option>
                                        <option value="2">Location 2</option>
                                        <option value="3">Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <a href="/mybooking" className="btn btn-secondary px-lg-5 animated fadeIn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <a className="cat-item rounded p-4 text-decoration-none" href="">
                                <i className="fa fa-3x fa-wrench text-primary mb-4"></i>
                                <h6 className="mb-3 text-black">PLUMBER</h6>
                                
                            </a>
                        </div>
                        <div className="col-lg-3 ">
                            <a className="cat-item rounded p-4 text-decoration-none" href="">
                                <i className="fa fa-3x fa-plug text-primary mb-4"></i>
                                <h6 className="mb-3 text-black ">ELECTRICAL WORK</h6>
                            
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <a className="cat-item rounded p-4 text-decoration-none" href="">
                                <i className="fa fa-3x fa-wrench text-primary mb-4"></i>
                                <h6 className="mb-3 text-black">Carpentry</h6>
                                
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};


export default Search;