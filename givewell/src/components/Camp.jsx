import React from "react";
import Card2 from "./Card2";
import "../css/Card2.css"

export default function Camp(props){
    const cards1 = props.data.camp.map(item => {
        return (
            item.status==='ongoing'?<Card2 styleDonDet={props.styleDonDet}
            setStyleDonDet = {props.setStyleDonDet}
                key={item._id}
                img={item.img}
                name={item.name}
                type={item.type} 
                status={item.status}
                setCamp={props.setCamp}
            />:<></>
        )
    })  
    
    const cards2 = props.data.camp.map(item => {
        return (
            item.status==='completed'?<Card2 styleDonDet={props.styleDonDet}
            setStyleDonDet = {props.setStyleDonDet}
                key={item._id}
                img={item.img}
                name={item.name}
                type={item.type}
                status={item.status}
            />:<></>
        )
    }) 
    // console.log(props.data.camp.status); 
    return(
        <div>
            <h1 className="camp-type">Ongoing Campaigns</h1>
            <section>
                {props.data.camp[0].name?cards1:<><p className="camp-type">No Ongoing Campaigns Available at the moment..!!</p></>}
            </section>
            <h1 className="camp-type">Completed Campaigns</h1>
            <section>
                {props.data.camp[0].name?cards2:<><p className="camp-type">No Ongoing Campaigns Available at the moment..!!</p></>}
            </section>
        </div>
    );
}