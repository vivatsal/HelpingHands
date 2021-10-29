import "./about-us.css"

function AboutUs(){

       return(

            <>
                
                 <div className="page">

                        <div style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/img.jpg"})`}} className="div-bgd">
                            <div className="hunger-div">
                              <div className="mission-tale"><h2 style={{margin: 0}}>Mission's Tale</h2></div>
                              <div className="mission-content"><p> Around 9 million people in the world die every year of hunger and 
                               hunger-related diseases. This is more than from AIDS,
                               malaria and tuberculosis combined. Poor nutrition and hunger is responsible for the death of 3.1 million children a year
                               . That’s nearly half of all deaths in children under the age of 5.</p></div>
                            </div>
                            <div className="mission">
                                 <div className="mission-tale"><h2 style={{margin: 0}}>Mission's Tale</h2></div>
                                 <div className="mission-content"><p>The Covid-19 pandemic, alone took lives of 4.96 million people around the globle, and 
                                     around 114 million people lost their source of livelihood 
                                     in turn has created a economical mess for the whole society. Hence, for the 
                                     greater good, we must join hands together in this hour of need,
                                      in order to tackle all these crisis situations. 
                                 </p></div>
                            </div>

                        </div>

                 </div>

            </>

       )

}

export default AboutUs;