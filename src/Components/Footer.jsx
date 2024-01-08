import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-i">
      <div className="footer-content">
        <div className="footer-logo">
        <img src="https://tse4.mm.bing.net/th?id=OIP.sMx4fMbaw7JWzJwSMOtomAE4DH&pid=Api&P=0&h=220" alt="logo"
                style={{width:"130px", height:"70px"}}
                />
                <br/>
          <p><br/>Elevate your spiritual journey with our expert Panditji services—your trusted companion for seamless and blessed ceremonies. Our dedicated team harmonizes tradition with modern convenience, ensuring authentic and memorable experiences. Explore a world of divine grace and expertise as we navigate sacred rituals together. </p>
        </div>
      

       


        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4"  style={{paddingTop:"20px"}}>
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Services</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Solutions</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Contact</a>
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"  style={{paddingTop:"20px"}}>
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact Us
          </h6>
          <p>
            <a href="#!" class="text-reset">12,Longcroft Close basingstoke
RG218XG,Hampshire,England.</a>
          </p>
          <p>
            <a href="#!" class="text-reset">info@gmail.com</a>
          </p>
          <p>
            <a href="#!" class="text-reset">+91 700555555</a>
          </p>
          <p>
            <a href="#!" class="text-reset">+01 4445556667</a>
          </p>
        </div>
        

       
      

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DATS Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
