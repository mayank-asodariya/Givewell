import React from "react";
import "../css/NgoProfTop.css";
import { useNavigate } from "react-router-dom";
// import ngo_info from "./ngo_info";
export default function Hero3(props){
    // const loop = ()=>{
    //     let arr=[]
    // //   const css = {
    // //     marginBottom:"2rem"
    // //   }
    //   ngo_info[0].categories.forEach((item,index) => {
    //     arr.push(<button  key={index} className="cat">{item}</button>)
    // });
    // return arr
    // }
    let author = localStorage.getItem('user');
    author = JSON.parse(author);

    return(
        <div className="hero">
            <div className="edit-btn">
                <button><img src={require('../photos/edit.png')} /></button>
            </div>
            <div className="ngo-prof">
                <img src={require(`../photos/${props.data.donProf}`)} className="imgP" />
                <div className="bottom-right"><button  className="addP">+</button></div>
            </div>
            <div className="d-info" style={{color: "#008095"}}>
                <h1>{author.username}</h1>
                <h3>{author.email}</h3> 
                {/* <h3>{props.data.phone}</h3> */}
                {/* {loop()} */}
                <button className="dstat" style={{color: "#008095", border: "2px solid #hg7BCDF2"}}>{props.data.donStat}</button>
            </div>
        </div>
    );
}