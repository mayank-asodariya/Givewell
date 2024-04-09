import React, {useEffect,useState} from 'react'
import '../css/login.css';
import { useNavigate,useLocation } from 'react-router-dom';

 const Login =(props)=>  {
	
	const closepopup=()=>{
		// setpop(false);
		props.setStyle({
			display:"none"
		})
	  }
	  const openReg = ()=>{
		props.setStyle({
			display:"none"
		});
		props.setStyleReg({
			display:"block"
		})
	  }
	const [username,setUsername] = useState("");
	const [pass,setPass] = useState("");
	const [err,Seterr] = useState("");
	const navigate = useNavigate();

	useEffect(()=>{
		const author = localStorage.getItem('user');
		if(author)
		navigate('/');
	  },[])
  	const handleSubmit = async()=>{ 
		let result = await fetch("http://localhost:8000/login",{
			method:'post',
			body:JSON.stringify({username,pass,Seterr}),
			headers:{
				'Content-Type':'application/json'
			}
		})
		// to check anything inside the backend property we should use the json i.e. object format
		result = await result.json();
		const data = {
			username:result.username,
			pass:result.pass,
			type:"user",
			email:result.email
		}
		if(result.username)
		{
			// we have to store the data inside localstorage in string format.
			localStorage.setItem('user',JSON.stringify(data))
		closepopup();
			navigate('/');
		}
		else
		{
			let name= username;
			let password = pass;
			let result2 = await fetch("http://localhost:8000/login_ngo",{
				method:'post',
				body:JSON.stringify({name,password}),
				headers:{
					'Content-Type':'application/json'
				}
			})
			result2 = await result2.json();
			console.log(JSON.stringify(result2.username));
			const data = {
				_id:result2._id,
				username:result2.name,
				pass:result2.password,
				email:result2.email,
				type:'ngo'
			}
			if(result2.name)
			{
				localStorage.setItem('user',JSON.stringify(data))
		closepopup();
				navigate('/foryou');
			}
			else{
			Seterr("No users found..!!");
			setTimeout(()=>Seterr(""),3000)
			}
		}
	
	
	}
    return (
      <div>
        
<main className="main">

	<div className="logincontainer" id="text-login">
	
		<section className="wrapper">
			<div className="heading">
				<p style={{color:"red"}}>{err}</p>
				<h1 className="text text-large" id='text-large'>Login</h1>
				<hr style={{color:'#1194A9'}}/>
				<button onClick={closepopup} to="/" id="close">x</button>

			</div>
			{/* <form name="signin" className="form"> */}
			
				<div className="input-control">
					<label htmlFor="text" className="input-label" >Username:</label>
					<input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="email" id="username" className="input-field" />
					<br/>
				</div>
				<div className="input-control">
				
					<label htmlFor="password" className="input-label">Password:</label>
					<input pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"  type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} name="password" id="email" className="input-field" required/>
					<br/>
				</div>
				
				
				{/* <div>
				{/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
				
				
				
				
			{/* </form> */}
			<br/>
			<button onClick={handleSubmit} className="loginn" id="openbtnn">Login</button> 
			<div className="input-control-fgpass-a">
				<span>
					{/* <a href="/" className="text text-links" id="for-pass">Forgot Password?</a>
					<Link to="/register" className="text text-links" id="sign-up">Sign up</Link> */}
					<p href="/" className="text text-linkss" id="for-passs">Forgot Password? <button onClick={openReg} id="here" to="/register">Sign Up</button></p>
				</span>
						
				</div>
			
			
			<div className="method">
				
				
				
			</div>
			
		</section>
	</div>
</main>

      </div>
    )

}

export default Login;