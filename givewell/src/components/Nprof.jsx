import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "../css/Nprof.css";
// import NgoProfTop from "./NgoProfTop";
import NgoProfTop from "./NgoProfTop";
// import ngo_info from "./ngo_info";
import Card3 from "./Card3";
import Campaign_details from "./Campaign_details";
import Edit_profile from "./EditNgo";
const Nprof=()=>{
    useEffect(()=>{
        getData();
        setId(author._id);
        // console.log(id)
    },[])

    let author = localStorage.getItem('user');
    let result;
    author = JSON.parse(author);
    const [data,setData] = useState([]);
    const [dataDet,setDataDet] = useState([]);
    // const [dataOn,setDataOn] = useState([]);
    // const [dataCom,setDataCom] = useState([]);

    const[id,setId] = useState(author._id)
    const getData = async()=>{
         result = await fetch('http://localhost:8000/FindNGO',{
            method:'post',
			body:JSON.stringify({id:id}),
			headers:{
                'Content-Type':'application/json'
			}
        })
        result = await result.json();
        setData(result.camp);
        setDataDet(result)
        // setDataOn(result.camp.ongoing);
        // setDataCom(result.camp.complete);
        console.log(data);
        // console.log(result.camp.ongoing)
    }
        const cards1 = data.map((item,index) => {
            return (
                
                    item.status==='ongoing'?
                <div key={index}>
                <Card3
                    image = {item.img}
                    name = {item.name}
                    type={item.type}
                    target={item.target}
                progress="35"

                />
                </div> :<div key={index}></div>
            
            ) 
        })      
    const cards2 = data.map((item,index) => {
        return (
            item.status==='completed'?
            <div key={index}>
            <Card3
               image={item.img}
               name = {item.name}
               type={item.type}
               target={item.target}
                progress="100"
            />
                </div> :<div key={index}></div>

        )
    })
    const [style,setStyle] = useState({display:"none"});
    const [editStyle,setEditStyle] = useState({display:"none"})
    const openbox = ()=>{
        setStyle({
            display:"block"
        })
    }
    
    return(
        <>
        {/* {console.log(<NgoProfTop data={dataDet}/>)} */}
        <div id="editPop" style={editStyle}>
            <Edit_profile data={dataDet} setEditStyle={setEditStyle}/>
        </div>
        <div id="pop" style={style}>
            <Campaign_details  style={style} setStyle={setStyle}/>
        </div>
        
            <NgoProfTop data={dataDet} setEditStyle={setEditStyle}/> 
            <h2 className="camp">Our Campaigns<button onClick={openbox} className="add">+</button></h2>
            <h3 className="camp-stat">Ongoing Campaigns</h3>
            <section className="card3">
                {cards1}
            </section>
            <h3 className="camp-stat">Completed Campaigns</h3>
            <section className="card3">
                {cards2}
            </section>
        </>
    );
}

export default Nprof;