const nodemailer = require("nodemailer");


const sendEmail = (donation,data)=>{
    return new Promise(async(resolve , reject)=>{
        let transporter = nodemailer.createTransport(
            {
                service:"gmail",
                auth:{
                    user:"yuvrajsinhbodana@gmail.com",
                    pass:"ltmzxhaobcsaalgm"
                }  
            }
        )
        let result = await fetch('http://localhost:8000/getNgoByName',{
            method:"post",
            body:JSON.stringify({name:donation.to}),
            headers:{
                "Content-Type":"application/json"
            } 
        })
        result = await result.json()
         const email_conf = {
            from:"yuvrajsinhbodana@gmail.com",
            to:`${data.email}`,
            subject:"Congratulation on The Donation!",
            text:`Congratulations dear ${data.username}! \n${donation.to} has approved your donation of ${donation.content} ${donation.category} you can now contact them on ${result.email} or get in touch with them in person in ${result.location} today..!! `,
            html:`<div style="padding: 1vh;background:linear-gradient(270deg, #7BCDF2 0%, rgba(255, 255, 255, 0.9) 100%); height: 60vh; color: #1194A9; font-size: 1.2rem; font-family: Roboto;">
            <p style="margin-left: 1vw;"><span style="color: #008095;font-size: 1.5rem;">Congratulations ${data.username},</span><br><br> ${donation.to} has approved your donation of <span style="color: #008095;">${donation.content} ${donation.category}</span>. You can now contact them at  <span style="color: #008095;">${result.email}</span> or get in touch with them in person at  <span style="color: #008095;">${result.location}</span> today.</p>
            <h1 style=" color: #008095; position: relative; bottom: 30vh; top: 40vh;"><center>Givewell</center></h1>
        </div>`
        }

        transporter.sendMail(email_conf,(err,info)=>{ 
                if(err)
                {
                    console.log("Error has been occured..!!");
                    return reject({message:`an error has been occured..!!`});
                }
                return resolve({message:`email has been sent successfully..!!`});
        })
    }) 
} 
 
module.exports = sendEmail; 