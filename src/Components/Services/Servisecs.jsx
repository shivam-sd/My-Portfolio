import React from "react"
import "./Services.css"
import theme_img from "../../assets/theme-img.svg"
import Services_Data from "./Services_Data.js"
import { FaArrowRight } from "react-icons/fa";
// import AnchorLink from "react-anchor-link-smooth-scroll";

const Services = () => {
    return(
        <div id="services" className="services">
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="services-container">
                     {
                        Services_Data.map((elm , index) => {
                            return(
                                <div className="services-format" key={index}>
                                    <h3>{elm.s_no}</h3>
                                    <h2>{elm.s_name}</h2>
                                    <p>{elm.s_desc}</p>
                                    <div className="services-readmore">
                                    <p><a target="_blanck" href={elm.s_link}>Read More...</a></p>
                                        <FaArrowRight className="arrow" />
                                    </div>
                                </div>
                            );
                        })
                     }
            </div>
        </div>
    );
}

export default Services
