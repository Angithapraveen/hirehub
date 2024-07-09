


import Login from "../../routes/Login";
const Banner = () =>{




    return(
        <div className="">
            <div className="container-fluid p-0">
            <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="./carousel-3.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"#01263880"}}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">Welcome to HireHub</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">An Online Service Provider Platform</p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="./carousel-4.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background:"#01263880"}}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-3 text-white animated slideInDown mb-4">Find a Best for You</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Introducing a revolutionary home service application 'Hire Hub' that offers convenient access to reliable services like plumbing, electrical repairs, and etc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Banner;