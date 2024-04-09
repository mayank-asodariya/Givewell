import React from 'react'
import Profilecardd from './Profilecardd';
import web from "../photos/donate.jpg";
import web1 from "../photos/image_2.jpg";


const Profilecards=()=>{
    const expense =[
        {donation:"Gram Vikas Trust",content:"50 Books",category:"Education",imgsrc:web},
        {donation:"Gram Vikas Trust",content:"20 Pencils",category:"Education",imgsrc:web1},
        {donation:"Gram Vikas Trust",content:"20 Pencils",category:"Education",imgsrc:web},
        {donation:"Gram Vikas Trust",content:"20 Pencils",category:"Education",imgsrc:web1},
    ]
    return (
        <>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row-1" id="aa-1">
                <div className="col-md">
                    <Profilecardd donation={expense[0].donation} content={expense[0].content} category={expense[0].category} imgsrc={expense[0].imgsrc}></Profilecardd>
                </div>
                <div className="col-md">
                <Profilecardd donation={expense[1].donation} content={expense[1].content} category={expense[1].category} imgsrc={expense[1].imgsrc}></Profilecardd>
               
                {/* <Profilecardd expense={expense}></Profilecardd> */}

                    
                </div>
                <div className="col-md">
                <Profilecardd donation={expense[2].donation} content={expense[2].content} category={expense[2].category} imgsrc={expense[2].imgsrc}></Profilecardd>
               
                </div>
                <div className="col-md">
                <Profilecardd donation={expense[3].donation} content={expense[3].content} category={expense[3].category} imgsrc={expense[3].imgsrc}></Profilecardd>
               
                </div>
                
            </div>
        </div>
      </>
    )
  }
  
export default Profilecards;