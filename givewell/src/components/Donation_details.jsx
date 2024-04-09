import React, { useEffect, useState } from 'react'
import '../css/Donation_details_final.css';
import { eventNames, events } from '../db/NGOSchema';


const Donation_details_final=(props)=>{
    useEffect(()=>{
        // username = localStorage.getItem('user');
    })
    let username = localStorage.getItem('user');
    const closepopup=()=>{
        // setpop(false);
        props.setStyleDonDet({
            display:"none"
        })
      }
      const [content,setContent] = useState('');
      const [type,setType] = useState('');
      const [number,setNumber] = useState('');
      const [details,setDetailes] = useState('');
      const [image,setImage] = useState('')
      const [err,setErr] = useState('')
console.log("selected:-  ",props.camp);
      const data = {
        username:JSON.parse(username).username,
        email:JSON.parse(username).email,
        to:props.name,
        content:content,
        category:type,
        details:details,
        contact:number,
        campaign:props.camp,
        image:image
      }
      const handleClick =async ()=>{
    //   console.log(data);
        let user_exist = await fetch('http://localhost:8000/findUserDonation',{
            method:'post',
            body:JSON.stringify({username:data.username}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        user_exist = await user_exist.json();
        console.log(user_exist.result==="no data found")
        if(!(user_exist.result==="no data found")){
        let result = await fetch('http://localhost:8000/update',{
            method:"put",
            body:JSON.stringify(
                {data}
            ),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result)
        {
            setErr("Donation request has been sent")
            // console.log("new user donation added..!!")
            setTimeout(()=>{
                setErr('');
                props.setStyleDonDet({
                    display:"none"
                })
            },5000)
            // console.log("data inserted successfully..!!");
        }
        else
        {
            console.log("error occured..!!");
        }
    }
    else
    {
        let result = await fetch('http://localhost:8000/donationdet',{
            method:"post",
            body:JSON.stringify(
                {data}
            ),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json()
        if(result)
        {
            setErr("Donation request has been sent")
            // console.log("new user donation added..!!")
            setTimeout(()=>{
                setErr('');
                props.setStyleDonDet({
                    display:"none"
                })
            })
        }
        else
        {
            console.log("error has been occured..!!");
        }
    }
      }

    return (
      <div>
        
<main className="main">

    <div className="logincontainer" style={{marginTop:"3vh"}} id="text-loginn-d">
        <section className="wrapper">
            <div className="heading">
                <p style={{color:"red"}}>{err}</p>
                <h1 style={{width:"10em",left:"17%"}} className="text text-large" id='text-large'>Donation Details</h1>
                <hr style={{color:'#1194A9'}}/>
                <button style={{marginLeft:"87%"}} onClick={closepopup} id="close">x</button>
            </div>
            <form name="signin" encType='multipart/form-data' action='http://localhost:8000/update' method="POST" className="form">
            <div className="input-control">
                    <label htmlFor="file" className="input-label">Image of Donation:</label>
                    <input onChange={(e)=>{setImage((e.target.value).split("C:\\fakepath\\")[1])}}type="file" name="donationImage" className="input-field" placeholder="file"  
                     />
                    <br />
                </div>
                
                {/* <div className="input-control">
                    <label htmlFor="email" className="input-label">Email:</label>
                    <input type="email" name="email" id="emaill" className="input-field" />
                    <br/>
                </div> */}
                <div className="input-control">
                    <label htmlFor="text" className="input-label">Content:</label>
                    <input value={content} onChange={(event)=>{setContent(event.target.value)}} type="text" name="password" id="passwordd" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                    <label htmlFor="text" className="input-label" >Type:</label>
                    <input value={type} onChange={(event)=>{setType(event.target.value)}} type="text" name="password" id="confirm" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                    <label htmlFor="number" className="input-label">Contact Number:</label>
                    <input value={number} onChange={(event)=>{setNumber(event.target.value)}} type="number" name="password" id="passwordd" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                    <label htmlFor="text" className="input-label" >Details of Donation:</label>
                    <input value={details} onChange={(event)=>{setDetailes(event.target.value)}} type="text" name="password" id="confirm" className="input-field" />
                    <br />
                </div>
            <br/>
            <button  onClick={handleClick} className="loginn" id="openbtnn">Donate</button>
            </form>
            <div className="method">
            </div>
        </section>
    </div>
</main>
      </div>
    );
}
export default Donation_details_final;