import React from 'react';
import App from './components/App/App';
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./components/Landing_Page/Landing_Page";
import AboutUs from "./components/About Us/about-us";
import "./WebApp.css";
import {Switch, Route, BrowserRouter } from "react-router-dom";
import Support from "./components/Support/support.jsx";
import Contact from "./components/Contact Us/contact.jsx";
import Mission from "./components/Our Mission/mission.jsx";

function WebApp() {
    return(
        <>
             <BrowserRouter basename="/HelpingHands">
                <Header />
                <Switch>
                    
                    <Route exact path="/" component={AboutUs} />
                    <Route exact path="/Testimonials" component={App}/>
                    <Route exact path="/donations" component={LandingPage}/>
                    <Route exact path="/support" component={Support}/>
                    <Route exact path="/mission" component={Mission}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
                <Footer />
             </BrowserRouter>

        </>    
    )
}
export default WebApp;


//<Route exact path="/HelpingHands" component={AboutUs} />