import React, {useState} from "react";
import {data} from "../../components/data.js";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);

  const size = data.length;

  const nextState = () => {
    if(current===size-1){
       setCurrent(0);
    }
    else{
       setCurrent(current+1);
    }
  }

  const prevState = () => {
    if(current===0){
      setCurrent(size-1);
   }
   else{
      setCurrent(current-1);
   }
  }

  return (
              <>
                <div className="main-div">

                  <div className="non-header-div">

                     <div className="side-left"> 
                        <ArrowBackIosNewIcon className="arrow-backwards arrows" onClick={prevState}/> 
                     </div>

                     <div className="whole">
                             <div className="title"><h1 className="whole-title">{data[current].title}</h1></div> 
                             <div className="image-title-div">                              
                                <div className="title-div">
                                       <img className="image-div" src={data[current].imageUrl} alt="altimage" />
                                       <div><h2 className="subtitle" style={{margin: 0}}>{data[current].subtitle}</h2></div>
                                       <div><h3 className="cont">{data[current].content}</h3></div>
                                </div>
                             </div>

                             

                     </div>

                     <div className="side-right"> 
                        <ArrowForwardIosIcon className="arrow-forwards arrows" onClick={nextState}/>
                     </div>

                  </div>

                </div>
              </>
  )
}

export default App;
