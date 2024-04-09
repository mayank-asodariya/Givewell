import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import images from '../photos/donateee.jpg';
// import imagess from 'C:/Users/heli hingrajiya/heli/src/newimages/image_2.jpg';
import '../css/Slide.css';
// import './main';
import { useNavigate } from "react-router-dom";
const Slide = () => {
  const navigate = useNavigate()
 const handleClick = ()=>{
  const author = localStorage.getItem('user');
  if(!author){
    navigate('login');
  }
 }
  return (
<>
<Carousel>
      <Carousel.Item id='items'>
        <div className="text1" id="firsttext1">
          <h1 className="H1">Help the<br/>Unfortunate</h1>
                          <button onClick={handleClick} type="button" className="btn btn-info" id='donate_button'>
                                    Donate Now
                           </button>
                        
                         </div>
                         <img
          className="d-block w-90 "
          src={images}
          alt="First slide"
          id="image-1"
        />
        
      </Carousel.Item>
      
      <Carousel.Item id='items'>
        

        
        <div className="text1" id="firsttext1">
          
          <h1 className="H1">Help to<br/>educate India</h1>
            <button onClick={handleClick} type="button" className="btn btn-info" id='donate_button'>
             Donate Now
            </button>      
        </div>
        <img
          className="d-block w-90"
          src={images}
          alt="Second slide"
          id="image-1"
        />
      </Carousel.Item>
      <Carousel.Item id='items'>
        

        <div className="text1" id="firsttext1">
          
        <h1 className="H1">Resuce animals from<br/> life threatening situations</h1>
                        <button onClick={handleClick} type="button" className="btn btn-info" id='donate_button'>
                                  Donate Now
                         </button>
                      
                       </div>
                       <img
          className="d-block w-90"
          src={images}
          alt="Third slide"
          id="image-1"
        />
       
      </Carousel.Item>
    </Carousel>
    
</>
  );
}
export default Slide;