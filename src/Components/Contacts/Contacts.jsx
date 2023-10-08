import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contacts.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const Contacts = () => {

  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ymb0zin', 'template_mlfxyxf', form.current, 'WQ1EiyuosIfZS_a54')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>

    <div className='Contactall'>

    <div className='sol11'>
        
        

                    <div data-aos="fade-right" className='leftsol1'>
                        
                           

                    <h1>Want To Connect with Us?</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio eligendi, quibusdam nulla eveniet nisi. Odio, debitis! Maxime, aliquid vero? Earum, placeat? Cumque accusamus odit architecto vitae laborum ad unde.
                           
                           <br/>
                           <br/>
                       <div className='r12'>
                        <div className='r121'>
                        <img src='data:image/jpeg;base64,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'/>
                         <h4>Contact us</h4>
                         <h6>+917900507895</h6>
                        </div>

                        <div className='r122'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK582P9rfICA3ywbjWLsApbhDt83Bvrr9Rt_6j70xtIHufkBS5wOrYZ6q4JaP-pItxHzU&usqp=CAU'/>
                        <h4>Email</h4>
                         <h6>Info@datsweb.com</h6>
                        </div>

                        <div className='r123'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXOEWg8b_pA5QOfNTKJ-hidE2cFcmE2vmPw&usqp=CAU'/>
                        <h4>Address</h4>
                         <h6>Vijayawada,India</h6>
                        </div>
                       </div>

                    </div>

                    <div  data-aos="fade-left" className='right1'>
                       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOdNJiiFLyxm0UYLUTHWj8RZt0FOv-ZupNg&usqp=CAU' />
                   
                    </div>
                   
                </div>

    </div>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    <div className="r" >
      <div className="row">
       
        <div className="col-lg-6 order-2 order-lg-1" style={{padding:90,paddingLeft:100}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61263.80386609409!2d80.4345186!3d16.323570600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2z4LCX4LGB4LCC4LCf4LGC4LCw4LGBLCDgsIbgsILgsKfgsY3gsLAg4LCq4LGN4LCw4LCm4LGH4LC24LGN!5e0!3m2!1ste!2sin!4v1696579838095!5m2!1ste!2sin" style={{width:"600px", height:"400px",marginLeft:"-50px",borderRadius:"20px",marginTop:"-50px"}} ></iframe>
        </div>
        
        <div className="col-lg-6 order-1 order-lg-2" style={{padding:50}}>
          <div className="contact-form-container rounded-lg shadow-md p-3 ">
          <h1 >Send message</h1>
            
            <form ref={form} onSubmit={sendEmail}>
            
              <div className="form-group">
                <label>Name</label>
                <input className="form-control  " type="text" name="user_name" />
              </div>
              <div style={{padding:"5px"}}></div>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control form-control-sm" type="email" name="user_email" />
              </div>
              <div style={{padding:"5px"}}></div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control form-control-sm" name="message" />
              </div>
              <div style={{padding:"10px"}}></div>
              <div className="col-12 pt-3" >
                <input className="btn btn-primary" style={{width:"530px"}} type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='globajl'>
    <h1 className="text-center font-bold"  style={{color:"#131E3A"}}>Our Global Offices & Partners</h1> 
    </div>
    
    
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

    
   </>
  );
};
