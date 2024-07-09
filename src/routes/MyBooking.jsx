import {useState,useEffect} from "react";
import {auth, firestore} from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { collection,onSnapshot} from "firebase/firestore";



const MyBooking = () =>{

    const [uid, setUid] = useState('');
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() =>{
        onAuthStateChanged(auth,async(user) =>{
            if(user){
                setUid(user.uid);
                const collectionRef = await collection(firestore,user.uid);
                await onSnapshot(collectionRef,(docs)=>{
                   docs.forEach((doc) =>{
                    data.push(doc.data())
                   })
                })


            }else{
                navigate("/login");
            }
        })
        console.log(data)

    },[]);

    



    return(
        <div className="">
            <div className="bg-white p-0">
           <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0 text-primary">HireHub</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="/about" className="nav-item nav-link">Home</a>
                    <a href="/mybooking" className="nav-item nav-link active">MyBooking</a>
                    <a href="https://chatapp-618df.web.app/login" className="nav-item nav-link">Hirehubmessage</a>
                    <a href="/search" className="nav-item nav-link">Search</a>
                    <a href="/home" className="btn btn-primary rounded-0 py-4 px-lg-5">Logout</a>
                </div>
                
            </div>
        </nav>
        <div className="py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
                <h1 className="display-3 text-white mb-3 animated slideInDown">MyBookings</h1>
            </div>
        </div>
         <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <table style={{width:"100%"}}>
                        <tr>
                        <th>s.no</th>
                        <th>BOOKING DETAILs</th>
                        <th>STATUS</th>
                        </tr>
                        
                        <tr>
                        <td>01</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
  
                </div>
            </div>
        </div>
        </div>
        </div>
    )
};



export default MyBooking;