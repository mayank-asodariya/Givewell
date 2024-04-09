const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{ 
        type:String,
        required:true,
    },  
    pass:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
})

const UserInfo = new mongoose.model('UserInfo',userSchema);

module.exports = UserInfo;