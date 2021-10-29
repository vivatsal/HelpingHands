import "./mission.css";

function Mission(){

     return(
         <>
           <div className="division">
             <div className="main-division" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/img4.jpg"})`}}>
                 <div className="first-div">
                        <div className="first-div-content">
                                 <div className="first-div-title"><h1 style={{margin: 0}}>Our Mission</h1></div>
                                 <div className="first-div-cont">
                                     <p>Helping Hands, is a one stop solution for all of the major ongoing humanitarian crisis events in 
                                        the world, that is worth adressing to the all other sections of the society. It is our firm believe 
                                        that the the odds of reaching out to a satisfactory conclusion to a particular problem stands a much better 
                                        chance when a group of people who are willing to find a solution work on it, rather than the fact a single
                                        individual or a family upon whom the whole situation would have been inflicted, are left alone to deal with 
                                        it. The whole motivation behind the development of such a website is to provide a platform to the voices of
                                        the unheard so that, their issues that remained unnoticed for a very long span of time should be properly 
                                        addressed to as many people as possible in order to find a solution. Apart from this, we have also managed to 
                                        facilitate a fundraising programme for various instituions that are working towards fighting these
                                        anachronistic crisis situations that needs our immediate attention and help, without which as per the 
                                        current scenario, the whole situation would turn out to be very complicated for them to cope up.
                                     </p>
                                 </div>
                        </div>              
                 </div>
             </div>
         </div>
        </>
    )

}

export default Mission;