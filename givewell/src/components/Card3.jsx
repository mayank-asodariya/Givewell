import React from "react";
import "../css/Card2.css"
import Progressbar from "./ProgressBar";
export default function Card3(props){
    
    return(
        <div className="card2">
            {props.name?<>
            <img src={require(`../photos/${props.image}`)} className="img-card2"/>
            <div className="info-card2">
                <h2 className="camp-name">{props.name}</h2>
                <p id="topo" className="camp-don-type">Donation Type : <span className="camp-don">{props.type}</span></p>
                <p id="topo" className="camp-don-type">Target : <span className="camp-don">{props.target}</span></p>
                <Progressbar progress={props.progress}/>
            </div></>:<></>}
            {/* <button className="don-btn">Donate Now</button> */}
        </div>
    );
} 