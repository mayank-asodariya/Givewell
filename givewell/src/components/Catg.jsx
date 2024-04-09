import React,{useState} from "react";
import '../css/Catg.css'


export default function Catg(props){
    // const get_info = ()=>{
    //     console.log(props.data.categories.length);
    // }
    // const [val,chval] = new useState("left");

    // const changeval=()=>{
    //     if(val=="left"){
    //         chval="right";
    //     }
    //     else
    //     chval="left";
    // }
    const loop = ()=>{
        let arr=[]
      const css = {
        marginBottom:"2rem"
      }
      props.data.categories.forEach((item,index) => {
        arr.push(<li  key={index}><p>{item}</p></li>)
    });
       return arr; 
    }
    return(
        <div className="timeline">
            <h1>Categories</h1>
            <ul>
                {props.data.categories?loop():<></>}
            </ul>
            
            {/* {console.log(props.data.categories.length)} */}
        </div>
    );
}