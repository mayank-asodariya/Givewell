const mongoose = require('mongoose')

const donorSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    donation:[{
        to:{
            type:String,
            // require:true
        },
        content:{  
            type:String,
            // require
        },
        category:{
            type:String
        },
        status:{
            type:String
        },
        details:{
            type:String
        },
        campaign:{
            type:String
        },
        image:{
            type:String
        }
    }],
    contact:{
        type:String
    },
    email:{
        type:String
    }
});

const Donation = mongoose.model('Donation',donorSchema);

module.exports = Donation;