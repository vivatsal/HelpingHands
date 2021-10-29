import React from "react"; 
import {Link} from "react-router-dom";
import "./header.css";
//<div className="dropdown-last"></div>

function Header() {

    return(

        <>

           <div className="whole-division">

              <div className="header-div">

                  <div className="header-logo">           
                     <img className="logo" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
                     <div className="slogan-div">
                         <h2 className="slogan">Help the</h2>
                         <h2 className="slogan">Helpless</h2>
                     </div>
                  </div>
                  <div className="content">
                     <div className="first">
                         <Link className="link" to="/donations"><div className="donation-page">Donate</div></Link>
                     </div>
                     <div className="second">
                          <div className="icons">
                              <div className="Home"><Link className="link" to="/">Home</Link></div>
                              <div className="Testimonials"><Link className="link" to="/testimonials">Testimonials</Link></div>
                              <div className="Support"><Link className="link" to="/support">Support</Link></div>
                              <div className="Contact Us"><Link className="link" to="/contact">Contact Us</Link></div>
                              <div className="Our Impact"><Link className="link" to="/mission">Our Mission</Link></div>
                          </div>
                     </div>
                  </div>
              </div>

          </div>

        </>

    )


}

export default Header;

//<div className="dropdown-last"></div>