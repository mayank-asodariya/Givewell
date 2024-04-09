import React from 'react'
import '../css/Verify.css';
import {useNavigate,useLocation } from 'react-router-dom';



const Verify =(props)=>{
	// let [time,setTime] = useState(10)
  const navigate = useNavigate() 
let a;
const location = useLocation();
// const startTimer = ()=>{
// 	a =setInterval(()=>{	
// 		console.log(props.otp)
// 		if(!time)
// 		{
// 			clearInterval(a)
// 			navigate("/register");
// 		}
// 		else{
// 		setTime(--time)
// 	}
// 	},1500)
// }
//   startTimer();
// const location = useLocation();

	const matchOtp = async()=>{
		clearInterval(a);
		let b = document.getElementById('number').value;
		if(location.state.otp === b)
		{
			// localStorage.setItem('user',JSON.stringify({
			// 	username:'yuvraj',
			// 	pass:'123',
			// }))
			// console.log(location.state.data)
			const data = {
				username:location.state.data.username,
				email:location.state.data.email,
				pass:location.state.data.pass,
				type:location.state.data.type
			}
			let username = location.state.data.username;
			let email = location.state.data.email;
			let pass = location.state.data.pass;
			// let otp = location.state.otp

			let result =  await fetch("http://localhost:8000/register",{
					method:"post",
					body:JSON.stringify({username,email,pass}),
					headers:{
						'Content-Type':'application/json'
					}
				});
				result = await result.json();
				if(result){
			localStorage.setItem('user',JSON.stringify(data))
				}
			// console.log(JSON.stringify(data))
			navigate("/");
		}
		else
		{
			navigate("/login");
		}
	}
	
    return (
      <div>
        
<main className="main">

	<div className="logincontainer" id="text-login-a">
	
		<section className="wrapper">
			<div className="heading">
				<h1 className="text text-large-v" id='text-large-v'>Verify Email</h1>
				<hr style={{color:'#1194A9'}}/>
				{/* <Link style={{marginLeft:"87%"}} onClick={closepopup} to="/" id="close">x</Link> */}

			</div>
			<div className="lines"> 
			<h2 > Enter the OTP send to your Email ID</h2>

			</div>
			<div className="count" id="count">
			{/* <h1 style={{color:'#1194A9'}}></h1> */}
			<br/>
			<input type="number" name="number" id="number" className="input-field-a" />
			<br/>
			<button onClick={matchOtp}  className="loginn-v" id="openbtnn-v">Verify</button> 

			</div>
			
			
			<div className="method">
				
				
				
			</div>
			
		</section>
	</div>
</main>


      </div>
    )
}

export default Verify;