import React from "react";

import { NavLink,useNavigate } from "react-router-dom";
import "./Common.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Common({ name, imgsrc, visit, btname }) {

const navigate = useNavigate();

const m=()=> {
  navigate('/Contacts')
}

const n=()=> {
  navigate('/Services')
}

  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);

  return (
     <div className="asf">
       
      <div  data-aos="fade-down" className="leftt">
        <h1>Digital Assets & 
         <br/>Transforming Solutions<span className="ee" style={{color:"darkblue", textAlign:"center"}}>
         </span>
         
        </h1>
        <h4>We at DATS Provide Website Development,Mobile<br/> App Development to all the company who want to be<br/> Successful.</h4>
        
          <button onClick={n}>Our Services</button>

          <button onClick={m}>Contact Us</button>
      </div>
      

      <div data-aos="fade-up" className="rightt">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cBG9xyNqa2w3Gz_5x_7EYpywsWTmGfMmHw&usqp=CAU"/>




      </div>

     </div>
     
  );
}

export default Common;
