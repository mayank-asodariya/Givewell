import React from "react";
//import web from "C:/Users/helih/heli/src/newimages/donate.jpg";


import '../css/Profilecardd.css';


function Profilecardd(props) {
  return (
    <> 
   
    {/* <h5 className="card-title-p" id="text1-p"></h5> */}
      <div className="card-p" id="item1-p">
        <img src={props.imgsrc} className="card-img" id="im-1" alt="..."  />
        <div className="card-body-p">
          <div className="card-text-p">
            Donation to:
           {props.donation}
           </div>
           <div className="card-text-p">
           Content:
           {props.content}
           </div>
           <div className="card-text-p">
           
           Category:
           {props.category}
           </div>
           <a href="/" className="status" id="openbtnn-u">Status</a>
        </div>
      </div>
       
    </>
  );
}
export default Profilecardd;