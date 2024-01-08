import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from './Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Services from '../Components/Services/Services';


import Stats from '../Components/stats/Stats';

import "./Home.css"
import Services02 from '../Components/Services02';
import About01 from '../Components/About01';
import Solution from '../Components/Solution';
import Company from '../Components/Company';

const Home = () => {
  return (
    <div className='all'>
      
  
    <Intro/>
     
    <br/>
    
    
    <Solution/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Services02/>
    <br/>
    <br/>
    <About01/>
    <br/>
    <br/>
      
      
      
      
    </div>
  )
}

export default Home;