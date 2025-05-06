import React from 'react'
import "./MyWork.css"
import theme_img from "../../assets/theme-img.svg"
import myworkdata from "./MyWorkData"
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <p style={{textAlign:"center", marginTop:"15px", fontSize:"20px", fontWeight:"900", textDecoration:"underline"}}>See Live Projects</p>
        <img src={theme_img} alt="" />
      </div>
      <div className="mywork-container">
        {
            myworkdata.map((elm,index) => {
                return(
                    <div>
                    <a target='_blanck' href={elm.w_visit}><img key={index} src={elm.w_img} alt="" /></a>
                    <p style={{marginTop:"10px", textAlign:"center"}}> <span style={{fontWeight:"900"}}>Title:-</span> {elm.w_name}</p>
                    
                    </div>
                )
            })
        }
      </div>
      <div className="mywork-showmore">
        <a target='_blanck' href='https://github.com/shivam-sd'><p>Show More</p></a>
        <FaArrowRight className="arrow" />
      </div>
    </div>
  )
}

export default MyWork
