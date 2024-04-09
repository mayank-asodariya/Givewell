const express = require("express");
const app = express();

const cors = require('cors')
require('./connection')

const path = require('path')
const upload_path = path.join(__dirname,"../photos")

const multer = require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,upload_path)
    },
    filename:function(req,file,cb){
        return cb(null,`${file.originalname}`)
    }
})
const upload = multer({storage}); 
// requiring all the collection
const UserInfo = require('./UserSchema');
const NGO = require('./NGOSchema');
const Donation = require('./DonationSchema');

const sendemail = require("./sendMail");
const send_email_to_ngo = require('./mail_to_NGO')
const send_approve_mail = require('./sendApprovedMail')
const mail_user_reg_succ=require('./mail_user_reg_succ')

app.use(express.json())
app.use(cors()) 
// to parse the form data into json and handle in backend server use urlencoded
// app.use(express.urlencoded({extended:false}))

app.post("/register",async(req,res)=>{
    try{ 
    // res.send(req.body);
    const data = {
        username:req.body.username,
        email:req.body.email,  
        pass:req.body.pass,
        image:'profile.png'
    }
    const user = new UserInfo(data)
    const result = await user.save();
    const sent = await mail_user_reg_succ(req.body.email)
    if(result && sent)
{
    res.send(result)
}
    else{ 
        res.send("error")
    }
}catch(err){console.log(err,"has been occured yuvraj")}


})

app.post('/sendMail',async(req,res)=>{
    const email_add = req.body.email;
    console.log(req.body.otp) 
    const sent = await sendemail(email_add,req.body.otp)
    if(sent)
    {
        res.send(sent); 
    }
    else
    {
        res.send("error has been occured..!!")
    }
})
 
// http://localhost:8000/regngo
app.post('/regngo',async(req,res)=>{
    console.log(req.body);
    const data={
        name:req.body.name,
        password:req.body.password, 
        email:req.body.email,
        ngo_res_no:req.body.ngo_res_no,
        location:req.body.location,
        campaign_name:req.body.campaign_name,
        detailes:req.body.detailes,
        camp:{
          
                name:req.body.campaign_name,
                type:req.body.type,
                img:'camp1.png',
                status:"ongoing"
        
        },
        categories:[req.body.category],

    }
    try{ 
        const email_add = req.body.email;
        const sent = await send_email_to_ngo(email_add,req.body.campaign_name);
        if(sent){
    const new_ngo = new NGO(data);
    const result = await new_ngo.save();
    if(result)
    {
        console.log(result)
        res.send(result);
    }
    else
    {
        res.send(null)
    }
}
    else
    {
        res.send("error has been occured..!!");
    }
    }catch(e)
    {
        res.send(e);
    }
})

app.post('/login',async(req,res)=>{
    // res.send("login page")
    try{
        if(req.body.username && req.body.pass)
        {
            const data = {
                username:req.body.username,
                pass:req.body.pass
            }
    const result = await UserInfo.findOne(data).select('-pass');
    if(result)
    {
        console.log(result);
        res.send(result);
    }
    else
    {
        req.body.setErr("No data found..!!")
        console.log("no data found..!!")
    }
}
else
{
    res.send(req.body.setErr("Enter proper values"))
    console.log("no proper credentials")
}
}
catch(e)
{
    res.send(e);
}
})

app.post("/login_ngo",async(req,res)=>{
    try{
        if(req.body.name && req.body.password)
        {
    const result =  await NGO.findOne(req.body);
    if(result)
    {
        res.send(result)
    }
    else{
        console.log('no users found')
    res.send(JSON.stringify(",kjkj"));
    }
}
else
{
    res.send(JSON.stringify("Enter proper Credentials"))
}  
    }
catch(e)
{
    res.send(e);
}
})
 
app.get("/getNGO",async (req,res)=>{
    // res.send("data from ngo");
    try{
    const result = await NGO.find();
    if(result.length>0)
    { 
        res.send(result);
    }
    else
    {
        res.send({result:"no data found..!!"})
    }
}catch(e)
{
    res.send(e);
}
})

app.post("/FindNGO",async(req,res)=>{
    // res.send(req.body.data)
    const result = await NGO.findOne({_id:req.body.id});
    if(result)
    {
        res.send(result);  
    }
    else
    {
        res.send({result:"no data found"})
    }
})

app.post('/donationdet',upload.single("donationImage"),async(req,res)=>{
    // res.send("donation detailes");
    // res.send(req.body)  
    console.log(req.body.data)
    const data={
        username:req.body.data.username,
        email:req.body.data.email,
        donation:[{
        to:req.body.data.to,
        content:req.body.data.content,
        category:req.body.data.category,
        details:req.body.data.details,
        image:req.body.data.image,
        campaign:req.body.data.campaign,
        status:"pending"}],
        contact:req.body.data.contact
    }
    const don = await new Donation(data)
    const result = await don.save()
    if(result)
    {
        res.send(result);
    }
    else
    res.send({message:'error occured..!!'})
})

app.get("/redirect",(req,res)=>{
    res.redirect(req.get('referer'))
})
app.post('/update',upload.single("donationImage"),(req,res)=>{
    console.log(req.file)
    // res.redirect(req.get('referer'))
    res.redirect("/redirect")
    
})

app.put("/update",upload.single("donationImage"),async(req,res)=>{
    const result = await Donation.updateOne({username:req.body.data.username},{"$push":{donation:{
        to:req.body.data.to,
        content:req.body.data.content,
        category:req.body.data.category,
        status:"pending",
        details:req.body.data.details,
        image:req.body.data.image,
        campaign:req.body.data.campaign
    }}});
    if(result)
    {
        res.send(result);
    }
    else
    {
        res.send({result:"error has been occured..!!"})
    }
})

// app.post('/adddonation',async(req,res)=>{
//     res.send("add donation")
//     // const result =await new


// })

app.post('/findUserDonation',async(req,res)=>{
    // res.send("findiing user")
    const result = await Donation.findOne({username:req.body.username});
    // console.log(result)
    if(result)
    {
        res.send(result)
    }
    else
    {
        res.send({result:"no data found"})
    }
})

app.post('/getAvailableDonations',async(req,res)=>{
    // res.send("helo")
    const result = await Donation.find({
        donation:{
            $elemMatch:{
                to:req.body.author.username
            }
        }
    })  
    if(result)
    {
        res.send(result);
    }
    else
    {
        res.send({result:"no data is there..!!"})
    }
})

app.post('/getDonById',async(req,res)=>{
    const result = await Donation.findOne({
        donation:{
            $elemMatch:{
                _id:req.body.id
            }
        }
    })
    if(result)
    {
        res.send(result);
    }
    else
    {
        res.send({result:"no data found"})
    }
})

app.put('/handleDonation',async(req,res)=>{
    // res.send("handle donation");
    const result = await Donation.updateOne({donation:{$elemMatch:{_id:req.body.id}}},{$set:{"donation.$.status":req.body.status}}) 
    console.log(result)
    if(result)  
    {
        res.send(result)   
    }
    else
    {
        res.send({result:"No update"})    
    }  
})

app.post('/getNgoByName',async(req,res)=>{
    const result = await NGO.findOne({name:req.body.name});
    if(result)
    {
        const data = {
            email:result.email,
            location:result.location
        }
        res.send(data)
    }
})

app.post('/sendApproveMail',async(req,res)=>{
    // const donation = JSON.parse(req.body.donation)  
    // console.log(req.body.donation)
    const result = await send_approve_mail(req.body.donation,req.body.data);
    if(result)
    {
        res.send(result)
    }
})

app.post('/findUser',async(req,res)=>{
    const result = await UserInfo.findOne({"$or":[
        {
            username:req.body.username
        },
        {
            email:req.body.email
        }
    ]})
    if(result)
    {
        res.send({result:result});
    }
    else  
    {
        res.send({result:"no users found..!!"})
    }
})

app.post('/NGOexist',async(req,res)=>{
    const result = await NGO.findOne({"$or":[
        {
            name:req.body.name
        },
        {
            email:req.body.email
        },
        {
            ngo_res_no:req.body.ngo_res_no
        }
    ]})
    if(result)
    {
        res.send({result:result})
    }
    else{
        res.send({result:"not"})
    }
})

app.put('/addCamp',async(req,res)=>{
    const result = await NGO.updateOne({name:req.body.data.ngoname},{"$push":{camp:{
        name:req.body.data.name,
        type:req.body.data.type,
        img:req.body.data.img,
        target:req.body.data.target,
        status:"ongoing"
    }}});
    if(result){
        res.send(result)
    }
})
 
app.post('/addCampImage',upload.single("campImage"),async(req,res)=>{
    console.log(req.file)
})

app.put('/editNgoProf',async(req,res)=>{
    const result = await NGO.updateOne({name:req.body.data.name},{
        name:req.body.data.uname,
        email:req.body.data.email, 
        phone:req.body.data.phone,
        location:req.body.data.location,
    })
    if(result) 
    {
        res.send(result)  
    }
})

app.get("/",(req,res)=>{
    // res.redirect('back');
    res.send("Home page..!!");
})

app.listen(8000,()=>{
    console.log("Server is running at port number 8000")
})