import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import '../css/Contactus.css';
const Contactus=()=>{
    const contactUs = async()=>{

    }
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [reason,setReason] = useState('')

    return (
        <div className="contact"style={{width:"80vw", margin:"auto", border:"2px solid #1194A9",padding:"2vw", borderRadius:"20px",marginTop:"80vh",marginBottom:"10vh", height:"55vh"}} id="contact">
        
        <h2 className="card-title" id="text1" style={{marginLeft:"40vw", fontSize:"3.2vw", color:"#008095"}}> Contact Us</h2>
        <br/>
        <br/>
        <br/>
        <div className="input-control" >
                    <label htmlFor="text" className="input-label" id="contact">Name:</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" name="email" id="usernamee" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                    <label htmlFor="email" className="input-label">Email:</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="usernamee" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                    <label htmlFor="text" className="input-label">Reason for contacting us :</label>
                    <input value={reason} onChange={(e)=>{setReason(e.target.value)}} type="text" name="email" id="usernamee" className="input-field" style={{height:"12vh", overflowY:"scroll", scrollbarWidth:"thin"}}/>
                    <br />
                </div>
			<button href="/" onClick={contactUs} style={{display:"block",marginTop:"13vh",marginLeft:"32vw"}}className="loginn" id="openbtnn">Contact</button>

</div>
    );
}
export default Contactus;