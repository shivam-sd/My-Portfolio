import React from "react"
import "./Skills.css"
import theme_img from "../../assets/theme-img.svg"
import profile_img from "../../assets/profile-img.jpg"
import skills from "./skills.json"
const Skills = () => { 
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>Skill's</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" className="about-img"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Developer with over a decode of professional expertise in the fields. Throught my career. i have had the privilage of collaborating with prestigious, contributing to their success and growth.</p>
                        <p>I have a lot of experience in full-stack development, and I am truly passionate about it. I put great effort and excitement into every project I work on.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML&nbsp;&&nbsp;CSS</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"85%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>MERN Stack</p><hr style={{width:"75%"}}/></div>
                        <div className="about-skill"><p>Git & GitHub</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Postman</p><hr style={{width:"90%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achivments">
                {
                    skills.map((elm,index) => {
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

export default Skills 