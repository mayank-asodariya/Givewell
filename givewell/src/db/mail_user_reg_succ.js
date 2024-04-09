const nodemailer = require("nodemailer");


const sendEmail = (email)=>{
    return new Promise((resolve , reject)=>{
        let transporter = nodemailer.createTransport(
            {
                service:"gmail",
                auth:{
                    user:"yuvrajsinhbodana@gmail.com",
                    pass:"ltmzxhaobcsaalgm"
                }  
            }
        )
 
        // let OTP = require("./math");  
        const email_conf = {
            from:"yuvrajsinhbodana@gmail.com",
            to:`${email}`,
            subject:"User Registration Succesfull",
            html:`<div style="padding: 1vh; background:linear-gradient(270deg, #7BCDF2 0%, rgba(255, 255, 255, 0.9) 100%); height: 70vh; font-family: Roboto;  font-size: 1.2rem;">
            <p style="margin-left: 1vw; color: #1194A9;"><span style="color: #008095;font-size: 1.5rem;">Greetings from Givewell,</span><br><br> You have successfully registered under our system. You can now make your desired donation.</p>
            <h1 style=" color: #008095; position: relative; bottom: 30vh; top: 50vh;"><center>Givewell</center></h1>
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