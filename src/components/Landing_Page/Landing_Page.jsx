import React, { useState } from "react";
import "./Landing_Page.css";
import {ngo} from '../ngo-data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function LandingPage() {
    
    const [pointer, setPointer] = useState(0);

    const num = ngo.length;

    const nextPointer = () => {
        if(pointer === num-1){
            setPointer(0);
        }
        else{
            setPointer(pointer+1);
        }
    }

    const prevPointer = () => {
        if(pointer === 0){
            setPointer(num-1);
        }
        else{
        setPointer(pointer-1);
        }
    }

    return(

       <>
        
            <div>

                <div className="whole-page">

                    <div className="arrow-back"><ArrowBackIosNewIcon className="arrow" onClick={prevPointer}/></div>
                    <div className="details-div">
                        <div className="details-img"><img className="image" src={process.env.PUBLIC_URL + ngo[pointer].imageUrl} alt="img"/></div>
                        <div className="details-title">
                            <div className="details-title-design" onClick={()=>{window.location.href=ngo[pointer].website}}>
                            <h3 className="details-title-head" style={{color: "white"}}>{ngo[pointer].name}</h3>
                            </div>
                        </div>
                        <div className="details-info"><h3 className="details">{ngo[pointer].details}</h3></div> 
                        <div className="details-donation-button">
                            <div className="donation-button" onClick={()=>{window.location.href=ngo[pointer].donationsLink}}>
                                <div className="base-div">Donate</div>
                            </div>
                        </div> 
                    </div>
                    <div className="images-div">
                        <div className="images">
                            <img className="images-list" src={process.env.PUBLIC_URL + ngo[pointer].imageUrl1} alt="img1" />
                            <img className="images-list" src={process.env.PUBLIC_URL + ngo[pointer].imageUrl2} alt="img2" />
                        </div>
                        <div className="images">
                            <img className="images-list" src={process.env.PUBLIC_URL + ngo[pointer].imageUrl3} alt="img3" />
                            <img className="images-list" src={process.env.PUBLIC_URL + ngo[pointer].imageUrl4} alt="img4" />
                        </div>
                    </div>
                    <div className="arrow-next"><ArrowForwardIosIcon className="arrow" onClick={nextPointer}/></div>
                    
                </div>

            </div>

       </>

    )


};

export default LandingPage;
