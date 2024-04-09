import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Card2.css"
import Progressbar from "./ProgressBar";
export default function Card2(props){
    const navigate = useNavigate()
    const handleClick = (name)=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            // navigate("/donationpopup");
            console.log("hello",name)
            props.setStyleDonDet({
                display:"block"
            })
            props.setCamp(name)
        }
        else
        {
            navigate("/");
        }
    }
    return(
        <div className="card2">
            <img src={require(`../photos/${props.img}`)} className="img-card2"/>
            <div className="info-card2">
                {(props.name)?<>
                <h2 className="camp-name">{props.name}</h2>
                <p id="topo" className="camp-don-type">Donation Type : <span className="camp-don">{props.type}</span></p></>:<></>
}
                <Progressbar progress="10"/>
            </div>
            {props.status==='ongoing'?<button onClick={()=>handleClick(props.name)} className="don-btn">Donate Now</button>:<></>}
        </div>
    );
}