import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./FooterStyles.css";
import React from 'react';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>
                            Kannur 670693. 
                        </p>
                        <p>Kerala, India</p>
                    </div>

                </div>
                <div className="phone">
                <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <h4>+91-9207343541</h4>

                </div>
                <div className="email">
                <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />
                <h4>abc@gmail.com</h4>

                </div>

            </div>

            <div className="right">
                <h4>About me</h4>
                <p>I am a passionate java backend developer with 1 year of experience. I specialise in building robust and scalable system Java and frameworks like spring boot. I enjoy solving complex problems and writing clean, efficient code. Let's connect and discuss how I can contribute to your projects. </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}} />
                <FaWhatsapp size={30} style={{color:"#fff", marginRight: "1rem"}} />

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
