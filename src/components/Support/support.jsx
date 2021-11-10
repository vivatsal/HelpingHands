import "./support.css";

function Support(){

     return(

            <>

                    <div className="prime-div">

                       <div className="prime-div-content" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/img5.jpg"})`}}>

                         <div className="form-division ind">

                           <h2 className="heading"> If You Are An Individual </h2>

                           <form className="forms" action="mailto:vatsalviven@email.com?" encType="text/plain" method="POST">

                               <label className="labels">First Name: </label>
                               <input className="inputs" type="text" id="first-name" name="first name" required />

                               <label className="labels">Last Name: </label>
                               <input className="inputs" type="text" id="last-name" name="last name" required />
                
                               <label className="labels">Email: </label>
                               <input className="inputs" type="email" id="email" name="email" required />
                
                               <label className="labels">Phone Number: </label>
                               <input className="inputs" type="tel" id="tel" name="tel" placeholder="+91 9999999999" pattern="[0-9]{12}" maxLength="12"  required />

                               <label className="labels">Enter Your Message: </label>
                               <input className="inputs text-area" type="text-area" id="message" name="message" required />
                
                               <button className="buttons" type="submit">Submit</button>

                           </form>

                         </div>

                         <div className="form-division">

                           <h2 className="heading"> If You Are An Organisation </h2>

                           <form className="forms" action="mailto:vatsalviven@email.com?" encType="text/plain" method="POST">

                               <label className="labels">Organisation  Name: </label>
                               <input className="inputs" type="text" id="first-name" name="first name" required />
                
                               <label className="labels">Your Mission: </label>
                               <input className="inputs" type="text" id="last-name" name="last name" required />
                
                               <label className="labels">Email: </label>
                               <input className="inputs" type="email" id="email" name="email" required />
                
                               <label className="labels">Phone Number: </label>
                               <input className="inputs" type="tel" id="tel" name="tel" placeholder="+91 9999999999" pattern="[0-9]{12}" maxLength="12"  required />

                               <label className="labels">Enter Your Message: </label>
                               <input className="inputs text-area" type="text-area" id="message" name="message" required />
                
                               <button className="buttons" type="submit">Submit</button>

                           </form>

                         </div>

                       </div>

                   </div>

            </>

        )

}

export default Support;
