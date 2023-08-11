export default function Card(props) {
	const {channel} = props
	return (
        <div class="container">
            <div class="header-page">
                
                
                <nav class="navbar navbar-expand-lg  bg-white">
                    
                    
                    <img src="./img/ethereum.png" height="100px" alt="">
                    <div class="collapse navbar-collapse " id="navbarText">
                            <ul class="navbar-nav mr-auto mb-2 mb-lg-0 ">
                              
                                <a class="nav-link" href="#"><h4>Contact </h4></a>
                              </li>
                            </ul>
                          
                          </div>
                        
                      </nav>

                      
            </div>
            <div class="contact-info">
                <h1 class="contact-tittle">Contact Us</h1>
                <div>
                    <pre class="contact-text">LET'S CONNECT: WE'RE HELP TO HELP, AND  WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION,
A COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FROM ON THIS
PAGE, OR BT PHONE, EMAIL, OR SOCIAL MEDIA. </pre>
                </div>
            <div style="width: 600px;">
                <div class="row">
                    <div class="col-6">
                        <div class="d-grid ">
                            <button class="btn btn-dark"  type="button">
                                <img class="icon-color" src="./img/feedback_813419.png"  alt="#"/>
                                VIA SUPPORT CHAT</button>                           
                        </div>                       
                    </div>
                    <div class="col-6">
                        <div class="d-grid ">
                            <button class="btn btn-dark"  type="button">
                                <img class="icon-color" width="30px" src="./img/telephone_159832.png"  alt="#"/>VIA CALL</button>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-grid mr-chat ">
                            <button class="btn-h btn-b btn-white "  type="button">
                                <img class="icon-color"  src="./img/email_8450816 (1).png"  alt="#"/>
                                VIA EMAIL FROM</button>                           
                    </div>   
                    <form class="col-12">
                      
                            
                      
                            <input class="name-input" type="text" value=""/>  
                       
                    </form>
                    <form class="col-12">
                
                        
                          <input class="name-input" type="text"  value=""/> 
                     
                                                    
                        
                    </form>
                    <form class="col-12">
                       
                        <input class="text-input" type="text"  value=""/>  
                    </form>
                    
                 </div>
               </div>
            </div>
        </div>
		
	);
}