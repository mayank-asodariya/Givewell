import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Campaign_details.css';
// import './Registerngo.css';
import { useState } from 'react';

const Campaign_details=(props)=>{
    let author = localStorage.getItem('user')
    author = JSON.parse(author)
    const closepopup=()=>{
        // setpop(false);
        props.setStyle({
            display:"none"
        })
      }
      const [image,setImage] = useState('')
      const [name,setName] = useState('')
      const [target,setTarget] = useState('')
      const [type,setType] = useState('')
      const [errmessage,setErrMessage] = useState('')
      const startCamp = async()=>{
        // console.log(image);
        const data={
            ngoname:author.username,
            name:name,
            target:target,
            type:type,
            img:image
        }
        let result = await fetch('http://localhost:8000/addCamp',{
            method:"put",
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        if(result)
        {
            setErrMessage("Campaign added successfully..!!")
            setTimeout(()=>{setErrMessage('');props.setStyle({
                display:"none"
            })},3000)
        }
      }
    return (
      <div>
        
<main className="main">

    <div className="logincontainer" style={{marginTop:"12vh"}} id="text-loginn">
    
        <section className="wrapper">
            <div className="heading">
			<p id="error" style={{color:"red"}}>{errmessage}</p>
                <h1 className="text text-large" style={{marginLeft:"15vw"}} id='text-large-d'>Campaign Details</h1>
                <hr style={{color:'#1194A9'}}/>
                
                
                <button onClick={closepopup} id="close">x</button>
                
                
                
                
            </div>
            <form name="signin" encType='multipart/form-data' action='http://localhost:8000/addCampImage' method="POST" className="form">
            {/* <p id='login-label-a'>Username:</p> */}
                <div className="input-control">
                    <label htmlFor="file" className="input-label">Image of Campaign:</label>
                    {/* <input type="file" name="email" id="usernamee" className="input-field" /> */}
                    <input onChange={(e)=>{setImage((e.target.value).split("C:\\fakepath\\")[1])}}type="file" name="campImage" className="input-field" placeholder="file" />
                    <br />
                </div>
                
                {/* <p id='login-label1'>Email:</p> */}
                <div className="input-control">
                    <label htmlFor="text" className="input-label">Name:</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="email" id="emaill" className="input-field" />
                    <br/>
                </div>
                <div className="input-control">
                {/* <p id='login-label2'>Password:</p> */}
                    <label htmlFor="text" className="input-label">Target:</label>
                    <input value={target} onChange={(e)=>{setTarget(e.target.value)}} type="text" name="password" id="passwordd" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                {/* <p id='login-label3'>Confirm Password:</p> */}
                    <label htmlFor="text" className="input-label" >Donation Type:</label>
                    <input value={type} onChange={(e)=>{setType(e.target.value)}} type="text" name="password" id="confirm" className="input-field" />
                    <br />
                </div>
                
                
                {/* <div>
                {/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
                
                
                
                
            <button onClick={startCamp} className="loginn" style={{marginLeft:"15vw"}} id="openbtnn-c">Start Campaign</button>
            </form>
            <br/>
                
            
            
            <div className="method">
                
                
                
            </div>
        </section>
    </div>
</main>

      </div>
    );
    
}
export default Campaign_details;