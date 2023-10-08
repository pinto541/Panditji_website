import React from 'react';
import Company from '../../Components/Company';
import './About.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
  
  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);


  return (
    <>
    <div>
      

       <div className='mix'>

      <div data-aos="fade-right" className='leftb' style={{marginTop:"80px"}}>
      <h1 className="text-center font-bold" >Our Story</h1>
                        
                       <br/>
                          <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi
                            <br/>
                              <br/>
                                
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiadipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi
                            
    
                          </p>
    
                        </div>
                        <div data-aos="fade-left" className='righttt'>
                            <img  src="data:image/jpeg;base64,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"  alt="My Image" />
                        </div>
                    
                        </div>




                        
      

       <div className='mix'>

     
                          
                            
    
                          
                        <div data-aos="fade-right" className='righttt'>
                            <img  src="data:image/jpeg;base64,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"  alt="My Image" />
                        </div>
                    

                        <div  data-aos="fade-left" className='lefty'>
      <h1 className="text-center font-bold" >Our Mission</h1>
                        
                       <br/>
                          <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi
                            <br/>
                              <br/>
                                
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequiadipisicing elit. Inventore
                            labore cumque aperiam sequiLorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            labore cumque aperiam sequi
                            
    
                          </p>
    
                        </div>

                        </div>

                        


                    
                    <div style={{
                        padding:"30px"
                    }}></div>
                    <h1 className="text-center font-bold" >Our Team</h1>
                    <div style={{
                        padding:"19px"
                    }}></div>
                    <div className='Container'>
                    

                <div className='righ' style={{marginLeft:"140px"}}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiq-Ao7dTjf2j6c8vk8kiIzk7nK2jE994tw&usqp=CAU" alt="My Image" />
                            <h3>Saurav kumar</h3>
                            <h6>Programming Analyst</h6>
                    </div>
                    <div style={{
                        padding:"10px"
                    }}></div>
                    <div className='righ' style={{marginLeft:"170px"}}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiq-Ao7dTjf2j6c8vk8kiIzk7nK2jE994tw&usqp=CAU" alt="My Image" />
                        <h3>Saurav kumar</h3>
                            <h6>Programming Analyst</h6>
                    </div>
                    <div style={{
                        padding:"10px"
                    }}></div>
                    <div className='righ' style={{marginLeft:"190px"}}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiq-Ao7dTjf2j6c8vk8kiIzk7nK2jE994tw&usqp=CAU" alt="My Image" />
                        <h3>Saurav kumar</h3>
                            <h6>Programming Analyst</h6>
                    </div>
                    </div>
                    <div style={{
                        padding:"20px"
                    }}></div>

 



<h1 className="text-center font-bold" >Our Global Offices & Partners</h1> 
    <br/>
    <br/>
  <div className='a'>
    
    <div className='a12'>
      <h2>Europe</h2>
      
      <h6>12,Longcroft C.B.
        <br/>
        
             RG218XG,Hampshire,U.K.<br/>
             info(at)datsweb.com<br/>
             +31 3000983234
             </h6>
    </div>

    <div className='a13'>
      <h2>Europe</h2>
      
      <h6>12,Longcroft C.B.
        <br/>
        
             RG218XG,Hampshire,U.K.<br/>
             info(at)datsweb.com<br/>
             +31 3000983234
             </h6>
    </div>

    <div className='a14'>
      <h2>Europe</h2>
      
      <h6>12,Longcroft C.B.
        <br/>
        
             RG218XG,Hampshire,U.K.<br/>
             info(at)datsweb.com<br/>
             +31 3000983234
             </h6>
    </div>

    <div className='a15'>
      <h2>Europe</h2>
      
      <h6>12,Longcroft C.B.
        <br/>
        
             RG218XG,Hampshire,U.K.<br/>
             info(at)datsweb.com<br/>
             +31 3000983234
             </h6>
    </div>
    </div>


                </div>

                
                </>
               
                
           
  )
}

export default About;
