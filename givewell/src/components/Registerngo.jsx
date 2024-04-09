import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Registerngo.css';

const Registerngo =(props)=> {
	const [name,setName] = useState("");
	const [password,setPassword] = useState("");
	const [email,setEmail] = useState("");
	const [ngo_res_no,setRes] = useState("");
	const [location,setLoc] = useState("");
	const [campaign_name,setCamp] = useState("");
	const [target,setTarget] = useState("");
	const [type,setType] = useState("");
	const [category,setCat] = useState("");
	const [image,setImage] = useState("")

	const navigate = useNavigate();
	const closepopup=()=>{
		// setpop(false);
		props.setStyleRegNgo({
			display:"none"
		})
	  }
	const collectData = async()=>{

		let res = await fetch('http://localhost:8000/NGOexist',{
			method:"post",
			body:JSON.stringify({name,email,ngo_res_no}),
			headers:{
				'Content-Type':'application/json'
			}
		})
		res = await res.json()
		console.log(res.result)
		if(res.result==='no'){
		let result = await fetch('http://localhost:8000/regngo',{
			method:"post",
			body:JSON.stringify({name,password,email,ngo_res_no,location,campaign_name,target,type,category}),
			headers:{
				'Content-Type':'application/json'
			}

		});
		result = await result.json();
		if(result)
		{
			const data = {
				username:name,
				pass:password,
				email:email,
				type:'ngo',
				_id:result._id
			}
			localStorage.setItem('user',JSON.stringify(data));
			closepopup();
			navigate("/foryou")
		}
		else
		{
			navigate("/login");
		}
	}
	else{
		setErrMessage("NGO already exists...Please check your name,email or ngo registration number")
		setTimeout(()=>setErrMessage(''),7000)
	}

	}
const[errmessage,setErrMessage] = useState('')
    return (
      <div>
        
		<main className="main">
	<div className="logincontainer" style={{height:"80vh", overflowY:"scroll", marginTop:"2vh", scrollbarWidth:"thin", scrollbarColor: "inherit"}} id="text-loginn-r">
		<section className="wrapper">
			<div className="heading">
			<p id="error" style={{color:"red"}}>{errmessage}</p>
				<h1 className="text text-large" id='text-large'>Register</h1>
				<hr style={{color:'#1194A9'}}/>
				<button onClick={closepopup} to="/"id="close">x</button>
			</div>
			<form name="signin" className="form">
				<div className="input-control">
					<label htmlFor="email" className="input-label" >NGO name:</label>
					<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" id="ngo_name" className="input-field" />
					<br/>
				</div>
				
				<div className="input-control">
					<label htmlFor="password" className="input-label" >Password:</label>
					<input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id="pass_ngo" className="input-field" />
					<br/>
				</div>
                <div className="input-control">
					<label htmlFor="password" className="input-label" >Email Adress:</label>
					<input type="text" name="contact" value={email} onChange={(e)=>{setEmail(e.target.value)}}id="contact_info" className="input-field" />
					<br/>
				</div>
                <div className="input-control">
					<label htmlFor="password" className="input-label" >NGO Registration no:</label>
					<input type="text" name="ngo_res_no" value={ngo_res_no} onChange={(e)=>{setRes(e.target.value)}} id="reg_no" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
					<label htmlFor="password" className="input-label">Location:</label>
					<input type="text" name="location" value={location} onChange={(e)=>{setLoc(e.target.value)}} id="loc" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
					<label htmlFor="password" className="input-label">First Campaign name:</label>
					<input type="text" name="campaign_name" value={campaign_name} onChange={(e)=>{setCamp(e.target.value)}} id="first_camp" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
                    <label htmlFor="file" className="input-label">Image of Campaign:</label>
                    <input onChange={(e)=>{setImage((e.target.value).split("C:\\fakepath\\")[1])}}type="file" name="donationImage" className="input-field" placeholder="file"  
                     />
                    <br />
                </div>
				<div className="input-control">
					<label htmlFor="password" className="input-label" >Target:</label>
					<input type="text" name="detailes" value={target} onChange={(e)=>{setTarget(e.target.value)}} id="first_camp_details" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
					<label htmlFor="password" className="input-label" >Donation Type:</label>
					<input type="text" name="detailes" value={type} onChange={(e)=>{setType(e.target.value)}} id="first_camp_details" className="input-field" />
					<br/>
				</div><div className="input-control">
					<label htmlFor="password" className="input-label" >Category:</label>
					<input type="text" name="detailes" value={category} onChange={(e)=>{setCat(e.target.value)}} id="first_camp_details" className="input-field" />
					<br/>
				</div>
			</form>
			<br/>
			<button className="loginn" onClick={collectData} id="openbtnn">Register</button>
			<div className="method">
			</div>
		</section>
	</div>
</main>

      </div>
    )
}

export default Registerngo;