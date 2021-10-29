import "./contact.css";

function Contact(){

        return(

            <>

               <div className="primary-division">

                   <div className="prime" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/img3.jpg"})`}}>

                     <div className="form-div">

                       <form className="form" action="mailto:vatsalviven@email.com" encType="text/plain" method="POST">

                           <label className="lab">First Name: </label>
                           <input className="inp" type="text" id="first-name" name="first name" required />
                           
                           <label className="lab">Last Name: </label>
                           <input className="inp" type="text" id="last-name" name="last name" required />
                           
                           <label className="lab">Email: </label>
                           <input className="inp" type="email" id="email" name="email" required />
                           
                           <label className="lab">Phone Number: </label>
                           <input className="inp" type="tel" id="tel" name="tel" placeholder="+91 9999999999" pattern="[0-9]{12}" maxLength="12"  required />

                           <label className="lab">Enter Your Message: </label>
                           <input className="inp text" type="text-area" id="message" name="message" required />
                           
                           <button className="button" type="submit">Submit</button>

                       </form>

                     </div>

                   </div>

               </div>

            </>

        )

}

export default Contact;
