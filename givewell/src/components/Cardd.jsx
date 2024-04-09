import React from "react";
//import web from "C:/Users/helih/heli/src/newimages/donate.jpg";
// import photo from '../photos/ngo1.png';
import '../css/Cardd.css';


function Cardd(props) {
  // props.setData(Array(props.data));
// console.log("This is Cardddd",props.imgsrc)
// const author = localStorage.getItem('user');
  return (
    <> 
    <h5 className="card-title" id="text1"> Our NGOs</h5> 
      <div className="card" id="item1">
     {/* <p>{props.image}</p> */}
     {
       props.image? <img src={require(`../photos/${props.image}`)} className="card-img" id="im" alt="..."  />:<img src={require(`../photos/ngo1.png`)} className="card-img" id="im" alt="..."></img>
     }
        <div className="card-body">
          <p className="card-text">
           {props.title} 
          </p>
        </div>
      </div>
    </>
  );
}
export default Cardd;