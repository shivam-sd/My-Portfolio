import React from "react";
import "./Education.css";
import theme_img from "../../assets/theme-img.svg";
const Education = () => {
  return (
    <>
      <div className="main">
        <div className="mywork-title">
          <h1>Education</h1>
          <img src={theme_img} alt="" />
        </div>
        <div className="container">
          <div className="timeline">
            <div className="line"></div>
            <div className="point hi"></div>
            <div className="point in"></div>
            <div className="point deg"></div>
            <div className="high">
              <p className="year" >2020 - 2021</p>
              <h3 className="course">High School Degree</h3>
              <span style={{display:"flex", flexDirection:"column"}}>
                <span className="collage">Collage Name :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>M I Purvanchal Public Inter Collage Bharaura Jaunpur UP.</span></span>
                <span className="grade">Grade :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>74.85 Percentage</span></span>
                <span className="hobby">Intrest :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>Technical Work</span></span>
              </span>
            </div>
            
            <div className="inter">
              <p className="year" >2022 - 2023</p>
              <h3 className="course">Intermediate Degree</h3>
              <span style={{display:"flex", flexDirection:"column"}}>
                <span className="collage">Collage Name :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>M I Purvanchal Public Inter Collage Bharaura Jaunpur UP.</span></span>
                <span className="grade">Grade :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>72 Percentage</span></span>
                <span className="hobby">Intrest :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>Technical Work</span></span>
              </span>
            </div>

            <div className="degree">
              <p className="year" >2023 - 2026</p>
              <h3 className="course">Bachelor's Degree</h3>
              <span style={{display:"flex", flexDirection:"column"}}>
                <span className="collage">Collage Name :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>Invertis University Bareilly.</span></span>
                <span className="grade">CGPA :- <span style={{fontWeight:"normal", fontSize:"3vh"}}></span>7.5</span>
                <span className="hobby">Intrest :- <span style={{fontWeight:"normal", fontSize:"3vh"}}>Software Development , Programming</span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
