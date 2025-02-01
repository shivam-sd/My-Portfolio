import React from 'react'
import "./OpenChat.css"
import chat from "../../assets/chat.png"

const OpenChat = () => {
  return (
    <div className='whatsapp'>
      <a href="https://wa.me/919792721939" target='_blanck'><img src={chat} alt="" className="chat-icon" /></a>
    </div>
  )
}

export default OpenChat
