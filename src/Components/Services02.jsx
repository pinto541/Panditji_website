import React from 'react';
import  "./Services02.css";
import {useEffect} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Services02 = () => {

    const navigate = useNavigate();
    const n=()=> {
        navigate('/Services')
      }

    useEffect(() => {
        AOS.init({duration:1000});
        AOS.refresh();
      }, []);

  return (
    <>

       
    <h1 className="text-center font-bold" style={{marginLeft:"60px",color:"#131E3A"}}>Our Expertise At your  Services</h1>
    <h5 className="text-center font-bold" style={{marginLeft:"60px",color:"gray"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusais!<br/> repellendus tenetur. Aspernatur, doloribus ducimu</h5>
    
    <div className='m'>
    
    <div className='left01'>
        <div data-aos="fade-right" className='l01'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIco-3HKBOkCOUwAzjJWbLjmVlB1YpwJ8MHA&usqp=CAU" alt="" />
            <h3>Traffic Management</h3>
            <p>poss ndhjf ffjfjg ffhhfhfbf vvhhffb vvhhv  <br/>vvnvv vnj fhuyt thfn cjf fjfjd ddjf cbfhgyt <br/>tyhfn werfds sdff</p>
            <button onClick={n}>Read More</button>
        </div>
        <br/>
        <hr/>
        <div  data-aos="fade-right" className='l02'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIco-3HKBOkCOUwAzjJWbLjmVlB1YpwJ8MHA&usqp=CAU" alt="" />
            <h3>Traffic Management</h3>
            <p>poss ndhjf ffjfjg ffhhfhfbf vvhhffb vvhhv  <br/>vvnvv vnj fhuyt thfn cjf fjfjd ddjf cbfhgyt <br/>tyhfn werfds sdff</p>
            <button onClick={n}>Read More</button>
        </div>
        

    </div>
    
    <div data-aos="fade-down" className='mid1'>
      <img src='https://img.freepik.com/free-vector/traffic-laws-abstract-concept-vector-illustration-traffic-code-obey-laws-regulations-driving-license-vehicle-movement-rules-road-safety-violation-fine-international-abstract-metaphor_335657-1798.jpg?size=626&ext=jpg&ga=GA1.2.1292418745.1696362691&semt=ais' />
     </div>
       

       <div className='right01'>
        <div data-aos="fade-left" className='r01'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIco-3HKBOkCOUwAzjJWbLjmVlB1YpwJ8MHA&usqp=CAU" alt="" />
            <h3>Traffic Management</h3>
            <p>poss ndhjf ffjfjg ffhhfhfbf vvhhffb vvhhv  <br/>vvnvv vnj fhuyt thfn cjf fjfjd ddjf cbfhgyt <br/>tyhfn werfds sdff</p>
            <button onClick={n}>Read More</button>
        </div>
        <br/>
                <hr/> 
        <div data-aos="fade-left" className='r02'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIco-3HKBOkCOUwAzjJWbLjmVlB1YpwJ8MHA&usqp=CAU" alt="" />
            <h3>Traffic Management</h3>
            <p>poss ndhjf ffjfjg ffhhfhfbf vvhhffb vvhhv  <br/>vvnvv vnj fhuyt thfn cjf fjfjd ddjf cbfhgyt <br/>tyhfn werfds sdff</p>
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