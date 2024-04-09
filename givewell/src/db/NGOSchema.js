const mongoose = require('mongoose');

const ngoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{ 
        type:String,
        required:false,
    },
    profile:{
        type:String,
        required:false,
    },
    phone:{
        type:String,
        required:false,
    },
    categories:{
        type:[String] 
    },
    camp:[{
        name: {type:String},
        type: {type:String},
        img: {type:String},
        target:{type:String},
        status:{type:String}
}],
    password:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    ngo_res_no:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true
    },
})

const NGO = mongoose.model('NGO',ngoSchema);

module.exports = NGO; 