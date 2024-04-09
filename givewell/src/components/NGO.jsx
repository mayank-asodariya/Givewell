import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Catg from './Catg';
import Camp from "./Camp";
import "../css/Catg.css"
import { useLocation,useNavigate } from 'react-router-dom';
import Donation_details_final from './Donation_details';
export default function Ngo(){
    const location = useLocation();
    const [data,setData] = useState(location.state.data);
    const [camp,setCamp] = useState("")
    const auth = localStorage.getItem('user');
    const [styleDonDet,setStyleDonDet] = useState({
        display:"none"
    })
    useEffect(()=>{
        if(auth){ 
        setData(location.state.data)
        console.log(location.state.data)
        }    

    },[])

    return( 
        <>
        <div style={styleDonDet}>
            {auth ? <Donation_details_final camp={camp} setCamp={setCamp} name={data.name} styleDonDet={styleDonDet} setStyleDonDet={setStyleDonDet}/>:<></>}
        </div>
            <Hero data={data}/>
            <Catg data={data}/>
            <h1 className="loca">Operating location : <span className="locaVal">{data.location}</span></h1>
           {/* {auth ?  <p className="loca">{data.name}</p> : <></>} */}
            <Camp setCamp={setCamp} styleDonDet={styleDonDet} setStyleDonDet={setStyleDonDet} data={data}/>
        </>
    );
} 