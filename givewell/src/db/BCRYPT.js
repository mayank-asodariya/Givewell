// console.log("hello");
const bcrypt = require('bcrypt')

const genSecurePass = async()=>{
    console.log("hello");
    const pass = "Adhive04@amd"
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(pass,salt);
    console.log(securePass);
    const date = Date.parse("18-05-2019")
    // Date.parse()
    console.log(Date.parse("01-01-2023")/(1000*60*60*24*365));
}
genSecurePass();