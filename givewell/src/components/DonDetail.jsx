import React, { useEffect, useState } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import "../css/DonDetail.css";
export default function DonDetail(props){
    useEffect(()=>{
        search_donation();
    })
    const closepop = ()=>{
        props.setStyle({ 
            display:"none"
        })
    }
const navigate = useNavigate()
    const deny = async()=>{
        // console.log("deny")
        const id = donation._id
        let result = await fetch('http://localhost:8000/handleDonation',{
            method:"put",
            body:JSON.stringify({id,status:"denied"}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        navigate(-1)
    }

    const accept = async()=>{
        // console.log("accept")
        // console.log(donation._id)
        const id = donation._id
        let result = await fetch('http://localhost:8000/handleDonation',{
            method:"put",
            body:JSON.stringify({id,status:"approved"}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result)
        {
            // const email = data.email;

            const sent = await fetch('http://localhost:8000/sendApproveMail',{
                method:"post",
                body:JSON.stringify({donation,data}),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            if(sent)
            {
                console.log(sent);
            }
        }

        navigate(-1)
    }
   let author = localStorage.getItem('user');
    author = JSON.parse(author)
    const search_donation = async()=>{
        let result = await fetch('http://localhost:8000/getDonById',{
            method:"post",
            body:JSON.stringify({id}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json()
        setData(result)
        data.donation.map((item)=>{
            if(item._id===id)
            {
                setDonation(item)
                // console.log(donation);
            }
        })

    }
    const [donation,setDonation]=useState([]);
    const location = useLocation();
    const [id,setId] = [location.state.id];
    const [data,setData] = useState([])
    return(
        <div className="don-popup" style={{margin: "auto",
            marginLeft: "30vw",position:"absolute", height:"74vh", overflowY:"scroll", marginTop:"3vh"}}>
            <div className="heading">
                <h1 style={{marginLeft:"6vw"}}>Donation Details</h1>
                <button  onClick={closepop} id="close">x</button>
            </div>
            <hr /> 
            {/* {  props.donData[0].username?<> */}
            <div className="don-info1">
                {/* <p>{props.data[0].image}</p> */}
               <img alt="..."  src={require(`../photos/${donation.image?donation.image:'No_Image_Available.jpg'}`)} className="donImg"/>
                <hr />
                <div className="Prof">
                    <img alt="..." src={require(`../photos/${location.user_profile?location.user_profile:'profile.png'}`)} className="profImg" />
                    <div className="profName"><h3>{data.username}</h3></div>
                </div>
            </div>
            <div className="don-info2">
                <ul>
                    <li>NGO name : <span className="info2-ans">{donation.to}</span></li>
                    <li>Contact : <span className="info2-ans">{data.contact},<br/>{data.email}</span></li>
                    <li>Content : <span className="info2-ans">{donation.content} {donation.category}</span></li>
                    <li>Campaign : <span className="info2-ans">{donation.campaign}</span></li>
                    <li>Details : <span className="info2-ans">{donation.details}</span></li>
                </ul>
                <button onClick={()=>deny(donation)} className="no">Deny</button>
                <button onClick={()=>accept(donation)} className="yes">Accept</button>
            </div>
            {/* </>:<></>} */}
        </div>
    );
} 