import React, { useEffect, useState } from "react";
import Hero from "./Hero";
// import ngo_info from "./ngo_info";
// import don_info from "./don_info";
import Card1 from "./Card1";
import DonDetail from "./DonDetail";
export default function ForYou(){
    // event.preventDefault();
    const [style,setStyle] = useState({
        display:"none"
    })
    useEffect(()=>{
        getData()
        getAvailableDonations()
    });
    const [data,setData] = useState([""])
    const [donData,setDonData] = useState([])
    const [user,setUser] = useState([])
    let author = localStorage.getItem('user');
    author = JSON.parse(author);
    let id = author._id;
    const getData = async()=>{
        let result = await fetch('http://localhost:8000/FindNGO',{
            method:'post',
			body:JSON.stringify({id:author._id}),
			headers:{
				'Content-Type':'application/json'
			}
        })
        result = await result.json();
        setData(result)
    }
    
    const getAvailableDonations = async()=>{
        let result = await fetch('http://localhost:8000/getAvailableDonations',{
            method:"post",
            body:JSON.stringify({author}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        setDonData(result)
        let res = await fetch('http://localhost:8000/findUser',{
            method:"post",
            body:JSON.stringify({username:result.name,email:""}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        res = await res.json()
        setUser(res)
    }
// getAvailableDonations();
// const [donation,setDonation] = useState([])
    const cards = donData.map((item) => {
        return (
        
            item.donation.map((it)=>{
                return(
                    it.to===author.username&&it.status==='pending'?
                    <Card1 style={style} 
                setStyle={setStyle}
                data = {data}
                name={item.username}
                content = {it.content}
                category={it.category}
                image={it.image}
                _id={it._id}
                user_profile={user.image}
            />:<></>
                    
                )
            })
        
        )
    })
    return(
        <>
        {/* <div style={style}>
        <DonDetail donData={donData} style={style} setStyle={setStyle}/>
            </div> */}
            <Hero data={data}/>
            <h1 className="head">Available Donations:</h1>
            <section className="display-cards">
                {cards}
            </section>
        </>
    );
}