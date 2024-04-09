import React from "react";
import "../css/NgoProfTop.css";
// import ngo_info from "./ngo_info";

export default function NgoProfTop(props){
    // const loop = ()=>{
    //     let arr=[]
    //  props.data.forEach((item,index) => {
    //     arr.push(<button  key={index} className="cat">{item}</button>)
    // });
    // return arr
    // }
    const openEditPop = ()=>{
        // console.log("button clicked");
        props.setEditStyle({
            display:"block"
        })
    }
    return(
        <div className="hero">
                {props.data.name?<>
                <button className="edit-btn" onClick={openEditPop}>
            {/* <div className="edit-btn"> */}
                <img src={require('../photos/edit.png')} alt="..." />
            {/* </div> */}
            </button>
            <div className="ngo-prof">
                <img src={require(`../photos/donate.jpg`)} className="imgP" />
                <div className="bottom-right"><button onClick={openEditPop} className="addP">+</button></div>
            </div>
            <div className="ngo-info" >
                <h1>{props.data.name}</h1>
                <h3>{props.data.email}</h3> 
                <h3>{props.data.phone}</h3>
                {/* {loop()} */}
                <button className="loc">{props.data.location}</button>
            </div></>:<></>
}
        </div>
    );
}