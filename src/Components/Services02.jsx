import React from 'react';
import  "./Services02.css";

import { NavLink,useNavigate } from "react-router-dom";

const Services02 = () => {

    const navigate = useNavigate();
    const n=()=> {
        navigate('/Services')
      }

  return (
    <>
      
    <h1 className="text-center font-bold" style={{marginLeft:"15px",color:"#131E3A"}}>Our Services</h1>
    <h5 className="mit text-center font-bold" style={{marginLeft:"0px",color:"gray"}} >Lorem ipsum dolor, consectetur adipisicing elit. Recusais!<br/> repellendus tenetur. Aspernatur, doloribus ducimu</h5>
    
    <div className='m'>
    
    <div className='left01'>
        <div  className='l01'>
            
            <h3>Satyanarayan Puja</h3>
            
            <p>Experience divine blessings and prosperity <br/>with our Satyanarayan Puja services.<br/> Join us in celebrating the auspicious<br/> moments of life with devotion<br/> and joy. Book now for a spiritually <br/>enriching experience!</p>
            <button onClick={n}>Read More</button>
        </div>
        <br/>
        <hr/>
        <div className='l02'>
            
            <h3>Mundan Puja</h3>
            <p>Mark the joyous occasion of your <br/> child's Mundan ceremony with our sacred <br/>puja services. Create lasting memories <br/>filled with blessings, tradition, and love. </p>
            <button onClick={n}>Read More</button>
        </div>
        

    </div>
    
    <div  className='mid1'>
      <img src='http://panditpuja.in/images/team3.jpg' />
     </div>
       

       <div className='right01'>
        <div className='r01'>
           
            <h3>Mundan Puja</h3>
            <p>Mark the joyous occasion of your <br/> child's Mundan ceremony with our sacred <br/>puja services. Create lasting memories <br/>filled with blessings, tradition, and love. </p>
            <button onClick={n}>Read More</button>
        </div>
        <br/>
                <hr/> 
        <div  className='r02'>
            
            <h3>Satyanarayan Puja</h3>
            <p>Experience divine blessings and prosperity <br/>with our Satyanarayan Puja services.<br/> Join us in celebrating the auspicious<br/> moments of life with devotion<br/> and joy. Book now for a spiritually <br/>enriching experience!</p>
            <button onClick={n}>Read More</button>
        </div>
        

    </div>


     </div>

     <br/>
     <br/>

     
     </>
  )
}

export default Services02
