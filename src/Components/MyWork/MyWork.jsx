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
        <img src={theme_img} alt="" />
      </div>
      <div className="mywork-container">
        {
            myworkdata.map((elm,index) => {
                return(
                    <>
                    <a target='_blanck' href={elm.w_visit}><img key={index} src={elm.w_img} alt="" /></a>
                    </>
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
