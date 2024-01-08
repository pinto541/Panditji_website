import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';  

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import {Contacts} from './Components/Contacts/Contacts';
import Services from './Components/Services/Services';
import {Portfolio} from './Components/Projects/Portfolio';

import Main from  './Components/detail/Main';
import About from './pages/about/About';
import Sol from './pages/Sol';
import Booking from './Components/Booking/Booking';



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home />} />
      
      <Route path="/Portfolio" element={<Portfolio/>} />
      
      <Route path="/main" element={<Main/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/Sol" element={<Sol/>}/>
      
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Services" element={<Services />} />
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}


export default App;
