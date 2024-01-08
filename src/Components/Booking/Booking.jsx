import "./Booking.css"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Booking = () => {
  const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ymb0zin', 'template_mlfxyxf', form.current, 'WQ1EiyuosIfZS_a54')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      const form = useRef();

  return (
    <div>

<div className="r234" >
      <div className="row">
       
        <div className="form456 col-lg-6 order-1 order-lg-1 " style={{padding:90,paddingLeft:100,}}>

        <img style={{width:"500px"}} src="https://tse1.explicit.bing.net/th?id=OIP.N9Awe8DK5SN0Cp_MwDVSCAHaFS&pid=Api&P=0&h=220" alt="Panditji"/>
        </div>
        
        <div className="col-lg-6 order-1 order-lg-2" style={{padding:50}}>
          <div className="contact-form-container12 rounded-lg shadow-md p-3 ">
          <h1 >Book an Appointment</h1>
            
            <form ref={form} onSubmit={sendEmail}>
            
              <div className="form-group">
                <label>Name</label>
                <input className="form-control  " type="text" name="user_name" placeholder="Enter your name" required/>
              </div>
              <div style={{padding:"5px"}}></div>
              <div className="form-group">
                <label>Email</label>
                <input className="form-control form-control-sm" type="email" name="user_email" placeholder="Enter your Email Id" required/>
              </div>
              <div className="form-group">
                <label>Phone No.</label>
                <input className="form-control form-control-sm" type="tel" name="user_phone" pattern="[0-9]{10}" placeholder="Enter your phone number" required/>
              </div>
              <div style={{padding:"5px"}}></div>
              <div className="form-group">
                <label>which Type of Puja you want us to perform?</label>
                <textarea className="form-control form-control-sm" name="puja" placeholder="Enter the puja Name" required />
              </div>
              <div style={{padding:"10px"}}></div>
              <div className="col-12 pt-3">
                <input className="btn btn-primary" style={{width:"260px"}} type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Booking