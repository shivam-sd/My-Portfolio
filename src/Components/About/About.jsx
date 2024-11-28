import React from "react"
import "./About.css"
import theme_img from "../../assets/theme-img.svg"
import profile_img from "../../assets/profile-img.jpg"
import about_ex from "./about.json"
const About = () => {
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" className="about-img"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Developer with over a decode of professional expertise in the fields. Throught my career. i have had the privilage of collaborating with prestigious, contributing to their success and growth.</p>
                        <p>My passion for fullsatck develpoment is not only reflected in my extensive experience but also in the enthusiam and dedication i bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML&nbsp;&&nbsp;CSS</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>MERN Stack</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achivments">
                {
                    about_ex.map((elm,index) => {
                        return(
                            <>
                            <div className="about-achivment" key={index}>
                                <h1>{elm.number}</h1>
                                <p>{elm.text}</p>
                            </div>
                            <hr />
                            </>
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default About 