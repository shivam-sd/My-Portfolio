import React from "react"
import "./Hero.css"
import hero_img from "../../assets/hero-img.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from "../../assets/2025 resume.pdf";
const Hero = () => {
    return(
        <div id="home" className="hero">
            <img src={hero_img} alt="" className="hero-img"/>
            <h1><span>I'm Shivam Maurya,</span> MERN developer based in India.</h1>
            <p>I am a MERN developer form UP, India with 1 years of experience in Freelancing with small projects, some production level projects.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="achor-link"  href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume"><a target="_black" title="Resume" href={resume}>My Resume</a></div>
            </div>
        </div>
    );
}

export default Hero