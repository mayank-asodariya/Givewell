import React from "react";
import "../css/Card2.css";
// import "./styles/NgoProfTop.css";
export default function Card4(props){
    
    return(
        <div className="card2">
            {<img src={require(`../photos/${'edit.png'}`)} className="img-card2"/>}
            <div className="info-card2">
                <p className="camp-don-type">Donation to:  <span className="camp-don">{props.ngoName}</span></p>
                <p className="camp-don-type">Content: <span className="camp-don">{props.content} {props.type}</span></p>
                <p id="topo" className="camp-don-type">Category : <span className="camp-don">{props.category}</span></p>
                <button className="status">{props.status}</button>
            </div>
            {/* <button className="don-btn">Donate Now</button> */}
        </div>
    );
}