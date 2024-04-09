import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import '../css/Register.css';
// import './Registerngo.css';


const Register =(props)=> {
	const navigate = useNavigate();
	const [username,setUsername] = useState("");
	const [email,setEmail] = useState("");
	const [pass,setPass] = useState("");
	const [cpass,setCpass] = useState("")
	const [errmessage,setErr] = useState("")
	const num = Math.floor(Math.random()*1000000);
	const otp=num.toString(); 
	const closepopup=()=>{ 
		// setpop(false);
		props.setStyleReg({
			display:"none"
		})
	}
	const openRegNgo = ()=>{
		props.setStyleReg({
			display:"none"
		})
		props.setStyleRegNgo({
			display:"block"
		})
	}

	// const chekUser = (name)=>{
	// 	setUsername(name);
	// }

	const collectData = async()=>{
		if(pass===cpass)
		{
				// props.setOtp(otp);
				// setErr("") 
				let chek_user = await fetch('http://localhost:8000/findUser',{
					method:"post",
					body:JSON.stringify({username,email}),
					headers:{
						'Content-Type':'application/json'
					}
				})
				chek_user = await chek_user.json()
				if(chek_user.result!=='no users found..!!')
				{
					// console.log(chek_user.result);
					setErr('Username Or email already exists..!!Please enter another username or email to continue')
					setTimeout(()=>{setErr('')},5000)
				}
				else{
				setErr("please check your email\nRedirecting to verify email page...")
				console.log(username,email)
				let result =  await fetch("http://localhost:8000/sendMail",{
					method:"post",
					body:JSON.stringify({email,otp}),
					headers:{
						'Content-Type':'application/json'
					}
				});
				result = await result.json();
				const data = {
					username:username,
					pass:pass,
					email:email,
					type:'user'
				}	
				if(result){
					navigate("/verify",{state:{data:data,otp:otp}});
				}
				else
				{
					navigate("/login");
				}

			}
		}
			else
			{
				setErr("Passwords are not matching..!!")
				setTimeout(()=>{setErr('')},2000)
			}
	}
    return (

      <div>
		<main className="main">
		<div className="logincontainer" style={{marginTop:"10vh"}} id="text-loginn">
		<section className="wrapper">
			<div className="heading">
				<p id="error" style={{color:"red"}}>{errmessage}</p>
				<h1  className="text text-large" id='text-large'>Register</h1>
				<hr style={{color:'#1194A9'}}/>
				<button onClick={closepopup} id="close">x</button>
			</div>
			<div name="signin" className="form">
			{/* <p id='login-label-a'>Username:</p> */}
				<div className="input-control">
					<label htmlFor="email" className="input-label">Username:</label>
					<input type="name" value={username} onChange={(e)=>{setUsername(e.target.value)} }name="user" id="usernamee" className="input-field" required/>
					<br/>
				</div>
				<div className="input-control">
					<label htmlFor="email" className="input-label">Email:</label>
					<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="emaill" className="input-field" required/>
					<br/>
				</div>
                <div className="input-control">
				{/* <p id='login-label2'>Password:</p> */}
					<label htmlFor="password" className="input-label">Password:</label>
					<input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" id="passwordd" className="input-field" required/>
					<br />
				</div>
                <div className="input-control">
				{/* <p id='login-label3'>Confirm Password:</p> */}
					<label htmlFor="password" className="input-label" >Confirm Password:</label>
					<input  type="password" value={cpass} onChange={(e)=>{setCpass(e.target.value)}} name="cpassword" id="confirm" className="input-field" required/>
					<br />
				</div>
			<button href="/" onClick={collectData} className="loginn" id="openbtnn">Register</button>
			</div>
			<br/>
			<div className="input-control-fgpass-a">
					<p href="/" className="text text-linkss" id="for-passs">For NGOs register <button id="here" onClick={openRegNgo}>here</button></p>
				</div>
			<div className="method">
			</div>
		</section>
	</div>
</main>
      </div>
    )
}

export default Register;