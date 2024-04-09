import React from "react";
import '../css/Hero.css'
 
export default function Hero(props){
    return(
        <div className="Bg-ngo">
            {props.data.image?
            <img src={require(`../photos/${props.data.image}`)} className="ngo-img" />:<><img src={require('../photos/ngo4.png')}></img></>
}
            <div className="ngo-info">
                <h1>{props.data.name}</h1>
            </div>
        </div>
    );
}