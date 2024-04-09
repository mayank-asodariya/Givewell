import React from "react";
import '../css/Userprofile.css';
import pic from '../photos/profile.png';
const Userprofile=()=>{
    let author = localStorage.getItem('user');
    author = JSON.parse(author)
    // if we want to display the name from author then :-
    // the data which we get inside the author is in string format and we have to convert it to json format and then we will be able to access any data inside that object.
    // so we will use JSON.parse() method
    return(
        <>
        {author?
            <div className="profile">
            <a href="/" className="loginn" id="openbtnn-p1">Edit</a>

                <h2 className="text1" id="text1">{author.username}uhbuhb</h2>
                <h3 className="text2" id="text2">{author.email}</h3>
			<a href="/" className="loginn" id="openbtnn-p">Status</a>
            

                <img
          className="d-block"
          src={pic}
          alt="..."
          id="pic"
        />
        

            </div>:<></>
}
        </>
    )

}
export default Userprofile;