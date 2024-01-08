
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="h-Container">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink className="navbar-brand" to="/" >
                <img src="https://tse4.mm.bing.net/th?id=OIP.sMx4fMbaw7JWzJwSMOtomAE4DH&pid=Api&P=0&h=220" alt="logo"
                style={{width:"130px", height:"70px"}}
                />
              </NavLink>
              <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                    
                  </li>
                  <div style={{paddingRight:"15px"}}></div>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <div style={{paddingRight:"15px"}}></div>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Booking"
                    >
                      Booking
                    </NavLink>
                  </li>
                  <div style={{paddingRight:"15px"}}></div>
                  
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/About"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <div style={{paddingRight:"15px"}}></div>
                  <li className="nav-item"> 
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Contacts"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                
              </div>
              
            </nav>
            
          </div>
          
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Navbar;