import React, { useEffect,useState } from 'react'
import Cardd from './Cardd';
import web from "../photos/donate.jpg";
import web1 from "../photos/image_2.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Cards=(props)=>{
  useEffect(()=>{
    // getData()
  },[])   

  const [data, setData] = useState([]);
  // const getData =async ()=>{   
  //       let result = await fetch("http://localhost:8000/getNGO");
  //       result = await result.json();
  //       setData(result)  
  //       data.map((item)=>{console.log(item.name)}) 
  // };  
    const expense =[
        {title:"Support.do",imgsrc:web},
        {title:"Give.do",imgsrc:web1},
        {title:"Help.do",imgsrc:web},
        {title:"Donate.do",imgsrc:web1},
    ] 
    // console.log("this is card ",props.data)
    const navigate = useNavigate();
    // const open = ()=>{
    //   const author = localStorage.getItem('user');
    //   if(author){
    //     navigate('/ngo',{state:{myprop:"hello sent by navigation"}});
    //   }
    //   else
    //   {
    //     navigate('/login');
    //   }

    // }
    const handleClick = async(id)=>{
      // console.log(props.data);
        let result = await fetch('http://localhost:8000/FindNGO',{
            method:"post",
            body:JSON.stringify({id}),
            headers:{
				'Content-Type':'application/json'
			}
        })
        result = await result.json();
        setData(result);
        if(result)
        {
          console.log(result)
          navigate('/ngo',{state:{data:result}});
        }
    

    }

    const ngo = props.data.map((item,index)=>{
      // const inc = ()=>{
      //   props.setData(index+1);
      //   a = props.data;
      //   // return props.data 
      // }
      return(
        <div key={index} className="container-fluid d-flex justify-content-center">
        <div className="row" id="aa">
        <div  className="col-md-3">
          <button style={{border:'none',background:'none'}} onClick={()=>handleClick(item._id)} key={index} to="/ngo">
        <Cardd title={item.name} image={item.image}/>
        </button>
        </div>
        </div>
        </div>
      )
    })

    return (
      <>
        <div className="container-fluid d-flex justify-content-center">
            {ngo}
        </div>
      </>
    )
  }
  
export default Cards;