import React, { useRef } from "react"
import { useState } from "react"
import "./Navbar.css"
import logo from '../../assets/logo.png'
import underline from "../../assets/theme-img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

    const [menu , setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return(
    <div className="navbar">
    <img src={logo} alt="" className="logo"/>
    <SlMenu onClick={openMenu} className="nav-mob-open" />
    <ul ref={menuRef} className="nav-menu">
        <AiOutlineClose onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className="achor-link"  href='#home'><p onClick={() => {setMenu("home")}}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt="" className="underline"/> : <></>}</li>
        <li><AnchorLink className="achor-link"  href='#about'><p onClick={() => {setMenu("about")}}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt="" className="underline" /> : <></>}</li>
        <li><AnchorLink className="achor-link"  href='#services'><p onClick={() => {setMenu("services")}}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt="" className="underline"/> : <></>}</li>
        <li><AnchorLink className="achor-link"  href='#mywork'><p onClick={() => {setMenu("portfolio")}}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt="" className="underline"/> : <></>}</li>
        <li><AnchorLink className="achor-link"  href='#contact'><p onClick={() => {setMenu("contact")}}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt="" className="underline"/> : <></>}</li>
    </ul>
    <div className="nav-connect">
    <AnchorLink className="achor-link"  href='#contact'>Connect With Me</AnchorLink>
    </div>
    </div>
    );
}

export default Navbar