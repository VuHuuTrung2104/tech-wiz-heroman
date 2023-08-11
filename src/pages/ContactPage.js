import React, { useState } from "react";
//dang lam do ?? 
function ContactPage() {

    return (
       <div>
         <div className="container-fluid">
        <div className="container">
            <div className="header-page">
                
                
                <nav className="navbar navbar-expand-lg  bg-white">
                    
                    
                    <img src="./img/ethereum.png" height="100px" alt="">
                    <div className="collapse navbar-collapse " id="navbarText">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                              
                                <a className="nav-link" href="#"><h4>Contact </h4></a>
                              </li>
                            </ul>
                          
                          </div>
                        
                      </nav>

                      
            </div>
            <div className="contact-info">
                <h1 className="contact-tittle">Contact Us</h1>
                <div>
                    <pre className="contact-text">LET'S CONNECT: WE'RE HELP TO HELP, AND  WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION,
A COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FROM ON THIS
PAGE, OR BT PHONE, EMAIL, OR SOCIAL MEDIA. </pre>
    </div>
            <div style="width: 600px;">
                <div className="row">
                    <div className="col-6">
                        <div className="d-grid ">
                            <button className="btn btn-dark"  type="button">
                                <img className="icon-color" src="./img/feedback_813419.png"  alt="#">
                                VIA SUPPORT CHAT</button>                           
                        </div>                       
                    </div>
                    <div className="col-6">
                        <div className="d-grid ">
                            <button className="btn btn-dark"  type="button">
                                <img className="icon-color" width="30px" src="./img/telephone_159832.png"  alt="#">VIA CALL</button>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-grid mr-chat ">
                            <button className="btn-h btn-b btn-white "  type="button">
                                <img className="icon-color"  src="./img/email_8450816 (1).png"  alt="#">
                                VIA EMAIL FROM</button>                           
                    </div>   
                    <form className="col-12">
                      
                            
                      
                            <input className="name-input" type="text" value="">  
                       
                    </form>
                    <form className="col-12">
                
                        
                          <input className="name-input" type="text"  value=""> 
                     
                                                    
                        
                    </form>
                    <form className="col-12">
                       
                        <input className="text-input" type="text"  value="">  
                    </form>
                    
                 </div>
               </div>
            </div>
        </div>
    </div>
</div>

    )
}
export default ContactPage;