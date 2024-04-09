import React, { useEffect, useState } from "react";
import "../css/Card1.css";
import DonDetail from "./DonDetail";
import { Link, useNavigate } from "react-router-dom";
export default function Card1(props){
    // useEffect(()=>{
          
    // },[])
    let author = localStorage.getItem('user');
    author =  JSON.parse(author)
    // const [data,setData] = useState([])
    const navigate = useNavigate()
    const p = (id,user_profile)=>{
        // const a = document.getElementById('topo');
        // console.log(a.textContent)
        // props.setStyle({
        //     display:"block"
        // });
        navigate('/dondet',{state:{id:id,user_profile:user_profile}});
    }
    return( 
        <>
        {/* <div style={props.style}>
        <DonDetail data={props.data} style={props.style} setStyle={props.setStyle}/>
        </div> */}
  {/* {console.log(props.content.map((item)=>console.log(item.to===author.username)))} */}
  {/* {console.log(props.content)} */}
        <div className="Card1">
           { props.name?<>
            <img src={require(`../photos/${props.image?props.image:'No_Image_Available.jpg'}`)} className="img-card1"/>
            <hr/>
            <div className="prof">
                <img src={require(`../photos/${props.user_profile?props.user_profile:'profile.png'}`)} className="prof-img" />
                <div className="prof-name"><h3>{props.name}</h3></div>
            </div>
            <p id="topo" className="content">Content : <span>{props.content} {props.category}</span></p>
            <button onClick={()=>p(props._id,props.user_profile)} ><i className="arrow-down" ></i></button> {/* either link popup for details or chat window*/}</>:<></>
           }
        </div>
        </>

    );
}