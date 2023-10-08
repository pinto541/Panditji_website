import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';  

import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Commit from './Components/Commit/Commit';
import {Contacts} from './Components/Contacts/Contacts';
import Services from './Components/Services/Services';
import {Portfolio} from './Components/Projects/Portfolio';
import Faqmain from './Components/faq/Faqmain';
import Main from  './Components/detail/Main';
import About from './pages/about/About';
import Sol from './pages/Sol';



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home />} />
      
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Faqmain" element={<Faqmain/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Sol" element={<Sol/>}/>
      <Route path="/Commit" element={<Commit />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}


export default App;
