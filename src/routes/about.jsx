




const About = () =>{
    return(
        
        
            <div className="bg-white p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0 text-primary">HireHub</h1>
                </a>
              
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/home" className="nav-item nav-link">Home</a>
                    <a href="/mybooking" className="nav-item nav-link active">MyBooking</a>
                    <a href="https://chatapp-618df.web.app/login" className="nav-item nav-link">Hirehubmessage</a>
                    <a href="/search" className="nav-item nav-link">Search</a>
                    <a href="/home" className="btn btn-primary rounded-0 py-4 px-lg-5">Logout</a>
                    </div>
                
                </div>
                </nav>
            
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


export default About;