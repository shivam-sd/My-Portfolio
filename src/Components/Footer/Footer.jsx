import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo.png"
import { IoIosContact } from "react-icons/io";
import { color } from 'motion/react';
const Footer = () => {

  
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt="" className='footer-logo' />
            <p>I am a MERN developer from, INDIA with 1 years of experience in freelancing small and big projects.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
            <IoIosContact className='icon'/>
            
                 <input type="email" placeholder='Enter Your Email' />
            
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
        <span className='date'>Created On :- 15 June 2024</span>
        <p className='footer-bottom-left'>
        © 2024 Shivam Maurya. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
