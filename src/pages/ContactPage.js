import React, { useState } from "react"; 
import pictures from "../pictures/istockphoto-1319815121-1024x1024-removebg-preview.png"
function ContactPage() {
    const itemContact={
        fontSize: '18px',
        color:'white',
        fontWeight: '500',
        padding: '6px',
        textAlign:'none',
    }
    return (
        <div className="container mt-2">
            <h1 style={{color:'white'}} className="text-center">Your Feedback</h1>
            <div className="row">
                <div className="col col-md-6">
                    <img src={pictures}/>
                </div>
                <div className="col col-md-6">
                    <form method="post" action="https://nentang.vn/">
                        <div className="form-group">
                            <label style={itemContact}  for="email">Your Email</label>
                            <input type="email" className="form-control" id="email" name="email"
                                placeholder="Email của bạn"/>
                        </div>
                        <div className="form-group">
                            <label style={itemContact}  for="title">Your Title</label>
                            <input type="text" className="form-control" id="title" name="title"
                                placeholder="Tiêu đề của bạn"/>
                        </div>
                        <div className="form-group">
                            <label style={itemContact}  for="message">Your Notes</label>
                            <textarea name="message" className="form-control"></textarea>
                        </div>
                        <button style={{ margin: '15px'}} className="btn btn-primary" name="btnGoiLoiNhan">Send Mail</button>
                    </form>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col col-md-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6365491245915!2d105.82230567875298!3d21.007201352369293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7p3kgbOG7o2k!5e0!3m2!1svi!2s!4v1691756681848!5m2!1svi!2s" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
)
}export default ContactPage;