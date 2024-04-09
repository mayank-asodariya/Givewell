import React, { useEffect, useState } from "react";
import "../css/Nprof.css";
import Hero3 from "./Hero3";
import don_info from "./don_info";
import Card4 from "./Card4";
import { useNavigate } from "react-router-dom";
export default function Dprof(){
    useEffect(()=>{
        getDonations();
    },[])
    let author = localStorage.getItem('user');
    author = JSON.parse(author)
    const [data,setData] = useState([]);  

    const cards1 = data?data.map(item => {
        return (
            item.status==='pending'||item.status==='denied'?<Card4
                key={item._id}
                img={item.to}
                ngoName={item.to}
                content={item.content}
                type={item.category}
                category={item.category}
                status={item.status}
            />:<></>
        )
    }):<></>  

    const cards2 = data?data.map(item => {
        return (
            item.status==='approved'?<Card4
                key={item._id}
                img={item.to}
                ngoName={item.to}
                content={item.content}
                type={item.category}
                category={item.category}
                status={item.status}
            />:<></>
        )
    }) :<></>   
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/');
    }
    const getDonations = async()=>{
        let result = await fetch('http://localhost:8000/findUserDonation',{
            method:"post",
            body:JSON.stringify({username:author.username}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        console.log(result);
        setData(result.donation);
    }
    return(
        <>
            <Hero3 data={don_info[0]}/>
            <h2 className="camp">My Donations<button onClick={handleClick} className="add">+</button></h2>
            <h3 className="camp-stat">In progress/Not approved</h3>
            {data?<>
            <section className="card3">
                {cards1}
            </section>
            <h3 className="camp-stat">Completed</h3>
            <section className="card3">
                {cards2}
            </section></>:<h2 style={{marginLeft:"21vw"}} className="camp-stat">No Donations at the moment</h2>}
        </>
    );
}