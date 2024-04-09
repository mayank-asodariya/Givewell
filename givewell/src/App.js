import React, { useState,useEffect } from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import '../src/css/Navbar.css';
import Registerngo from "./components/Registerngo";
import Verify from "./components/Verify";
import '../src/css/Profilecards.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Nprof from "./components/Nprof";
// import PrivateComponent from "./components/PrivateComponent";
import Ngo from "./components/NGO";
import Navbar from "./components/Navbar";
// import Userprofile from "./components/Userprofile";
import Dprof from "./components/Dprof";
import Donation_details_final from "./components/Donation_details";
import ForYou from "./components/ForYou";
import Nprof from "./components/Nprof";
import DonDetail from "./components/DonDetail";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";

  const App=()=>{  
    const [otp,setOtp] = useState("");
    const [data, setData] = useState([""]);
    const [style,setStyle] = useState({
      display:"none"
  });
    useEffect(()=>{
        getData();
    },[]) 

    let author=localStorage.getItem('user')
    author = JSON.parse(author)
    const getData =async ()=>{ 
        let result = await fetch("http://localhost:8000/getNGO");
        result = await result.json();
        setData(result) 
        // data.map((item)=>{console.log(item.name)})
  }; 
    return (
      <>  
      <Router>
        <Navbar style={style} setStyle={setStyle}/>
        {/* <DonDetail data={data}/> */}
     <Routes>  
      <Route path='/dondet' element={<DonDetail/>}/>
      <Route path="nprof" element={<Nprof/>}/>
      <Route path="/foryou" element={<ForYou/>}/>
      <Route path="/userprofile" element={<Dprof/>}/>
      {/* <Route element={<PrivateComponent/>}> */}
       <Route path="/ngo" element={<Ngo/>}/>
      {/* </Route> */}
      <Route path="/donationpopup" element={<Donation_details_final/>}/>
     <Route path="/" element={<Homepage style={style} setStyle={setStyle} data={data} setData={setData}/>}/>
      <Route path="/regngo" element={<Registerngo/>}/>
      <Route path="/register" element={<Register otp={otp} setOtp={setOtp}/>}/>
      <Route path="/verify" element={<Verify otp={otp} setOtp={setOtp}/>}/>
      <Route path="/login" element={<Login style={style} setStyle={setStyle}/>}/>
      </Routes>
      <Contactus/>
      <Aboutus/>
      </Router> 
     
      </>
    )
  }
export default App;