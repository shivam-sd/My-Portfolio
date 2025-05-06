import React, { useState } from "react";
import "./Contact.css";
import theme_img from "../../assets/theme-img.svg";
import { MdOutlineMail } from "react-icons/md";
import { SlCallEnd } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
// import ReCAPTCHA from "react-google-recaptcha";
const Contact = () => {
  const [result, setResult] = useState("");
  

  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "997fa1ac-8b53-47a0-a76e-aea138e5f89b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Mail Successfully send");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_img} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk </h1>
          <p>
          I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MdOutlineMail className="icon" />
              <p>rockshivam5676@gmail.com</p>
            </div>
            <div className="contact-detail">
              <SlCallEnd className="icon" /> <p>+91 9792721939</p>
            </div>
            <div className="contact-detail">
              <IoLocationSharp className="icon" /> <p>UP, INDIA</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          {/* <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} /> */}
          <button type="submit" className="contact-submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
