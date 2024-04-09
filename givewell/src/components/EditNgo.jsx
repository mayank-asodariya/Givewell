import React, { useState } from 'react'
import '../css/EditNgo.css';
// import './Registerngo.css';


const Edit_profile=(props)=>{
    let author = localStorage.getItem('user')
    author = JSON.parse(author)
    let id = author._id;
    const closepopup=()=>{
        // setpop(false);
        props.setEditStyle({
            display:"none"
        })
      }
      const editData = async()=>{
        const data = {
            name : author.username,
            uname:name,
            email:email,
            phone:phone,
            location:location,
            // category:category  
        }
        let result = await fetch('http://localhost:8000/editNgoProf',{
            method:'put',
            body:JSON.stringify({data}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json()
        console.log(result.acknowledged);
        if(result.modifiedCount)
        {
            let data = {
                username:name,
                _id:id,
                type:"ngo",
                email:email
            }
            localStorage.setItem('user',JSON.stringify(data))
            setErr('Updated Successfully')
            setTimeout(()=>{
                setErr('');
                props.setEditStyle({
                    display:"none"
                })
            },3000)
        }
      }

      const [name,setName] = useState('')
      const [email,setEmail] = useState('')
      const [phone,setPhone] = useState('')
      const [location,setLocation] = useState('')
      const [category,setcategory] = useState('')
      const [err,setErr] = useState('')
    return (
      <div>
        
<main className="main">

    <div className="logincontainer" style={{marginTop:"10vh"}} id="text-loginn-e">
    
        <section className="wrapper">
            <div className="heading">
				<p style={{color:"red"}}>{err}</p>
                <h1 className="text text-large" id='text-large-e'>Edit Profile</h1>
                <hr style={{color:'#1194A9'}}/>
                
                
                <button onClick={closepopup} id="close">x</button>
                
                
                
                
            </div>
            <form name="signin" className="form">
            {/* <p id='login-label-a'>Username:</p> */}
                <div className="input-control">
                    <label htmlFor="text" className="input-label">NGO Name:</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder={props.data.name} type="text" name="email" id="usernamee" className="input-field" />
                    <br />
                </div>
                
                {/* <p id='login-label1'>Email:</p> */}
                <div className="input-control">
                    <label htmlFor="email" className="input-label">Email:</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder={props.data.email} type="email" name="email" id="emaill" className="input-field" />
                    <br/>
                </div>
                <div className="input-control">
                {/* <p id='login-label2'>Password:</p> */}
                    <label htmlFor="number" className="input-label">Phone No:</label>
                    <input value={phone} onChange={(e)=>{setPhone(e.target.value)}}placeholder={props.data.phone} type="number" name="password" id="passwordd" className="input-field" />
                    <br />
                </div>
                <div className="input-control">
                {/* <p id='login-label3'>Confirm Password:</p> */}
                    <label htmlFor="text" className="input-label" >Location:</label>
                    <input value={location} onChange={(e)=>{setLocation(e.target.value)}}placeholder={props.data.location} type="text" name="password" id="confirm" className="input-field" />
                    <br />
                </div>

                <div className="input-control">
                {/* <p id='login-label3'>Confirm Password:</p> */}
                    <label htmlFor="text" className="input-label" >Category:</label>
                    <input value={category} onChange={(e)=>{setcategory(e.target.value)}}type="text" placeholder={props.data.categories} name="password" id="confirm" className="input-field" />
                    <br />
                </div>
                
                
                
                {/* <div>
                {/* <input type="submit" name="submit" className="input-submit" id="text1" value="Login" disabled /> */}
                
                
                
                
            </form>
            <br/>
            <button onClick={editData} className="loginn" id="openbtnn-e">Edit</button>
                
            
            
            <div className="method">
                
                
                
            </div>
        </section>
    </div>
</main>

      </div>
    );
    
}
export default Edit_profile;
