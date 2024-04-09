import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Cards from "./Cards";
import Login from "./Login";
// import Navbar from "./Navbar";
import Register from "./Register";
import Registerngo from "./Registerngo";
import Contactus from "./Contactus";
// import { useNavigate } from "react-router-dom";
// import Verify from "./Verify";
// import { useNavigate } from "react-router-dom";
const Homepage = (props) => {
    // const navigate = useNavigate()
    // // const [data, setData] = useState(props.data);
    // let author = localStorage.getItem('user');
    // author = JSON.parse(author)
    // useEffect(()=>{
    //     if(author.type==='ngo')
    //     {
    //         navigate('/ngo')
    //     }
    //     else
    //     {
    //         navigate('/')
    //     }
    // },[]) 
    // const navigate = useNavigate()
    const [styleReg,setStyleReg] = useState({
        display:"none"
    });
    const [styleRegNgo,setStyleRegNgo] = useState({
        display:"none"
    })
    
//     const getData =async ()=>{ 
//         let result = await fetch("http://localhost:8000/getNGO");
//         result = await result.json();
//         setData(result)     
//         data.map((item)=>{console.log(item.name)})
//   };
// console.log(props.data)     
    // const NGOdata = async () => {
    //     let result = await fetch("http://localhost:8000/getNGO");
    //     result = await result.json();
    //     setData(result)
        // console.log(data);
    //     data.map((item)=>{console.log(item.name)})  
    //     // if (result) {
    //     //     // console.log(result.email)
    //     //     result = JSON.stringify(result);
    //     //     result = Array(result)
    //     //     console.log(data)
    //     // }
    //     // else { 
    //     //     console.log("no data are there..!!")
    //     // }
    // }
    return (
        <>
        {/* <Navbar/> */}
            {/* <button >get NGO data</button> */}
            <div style={props.style}>
                <Login styleReg={styleReg} setStyleReg={setStyleReg} style={props.style} setStyle={props.setStyle}/>
            </div>
            <div style={styleReg}>
                <Register styleRegNgo={styleRegNgo} setStyleRegNgo={setStyleRegNgo} styleReg={styleReg} setStyleReg={setStyleReg}/>
            </div>
            <div style={styleRegNgo}>
                <Registerngo styleRegNgo={styleRegNgo} setStyleRegNgo={setStyleRegNgo}/>
            </div>
            <Slide />
            <Cards data={props.data} setData={props.setData} />
            {/* <Contactus /> */}
        </>
    );
}

export default Homepage;