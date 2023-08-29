import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import wallpaper from '@images/wallpaper.png'
import profilePicture from '@images/profile-pic2.jpg'
import smileyFace from '@icons/smiley-face.png'
import backArrow from '@icons/back-grey.png'
import videoCamera from '@icons/video-camera-white.png'
import phone from '@icons/phone-white.png'
import menu from '@icons/menu-vertical.png'
import clip from '@icons/clip.png'
import camera from '@icons/camera.png'
import voiceNote from '@icons/voice-note.png'
import sendMessage from '@icons/send.png'
import './styles.scss'

const Chat = () => {
  const [inputValue, setInputValue] = useState('')
  const [sendIconSrc, setSendIconSrc] = useState(voiceNote)

  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)

    if (value !== '') {
      setSendIconSrc(sendMessage)
    } else {
      setSendIconSrc(voiceNote)
    }
  }

  return (<>
    <div className="chats-container__header">
      <div className="chats-container__header--left">
        <Link to='/home'><img className="arrow-back" src={backArrow} alt="arrow icon"/></Link>
        <div className="contact-info" id=''>
          <img src={profilePicture} alt="profile picture" />
          <p className="username">Jane Doe</p>
      </div>
      </div>
      <div className="chats-container__header--right">
        <img src={videoCamera} alt="video camera icon"/>
        <img src={phone} alt="telephone icon"/>
        <Link to='/contact-info'>
          <img className="chat-menu-icon" src={menu} alt="menu icon"/>
        </Link>
      </div>
    </div>
    <div className="chats-container__main">
      <div className="chats-container__main--wallpaper-container">
        <img src={wallpaper} alt="wallpaper image" />
      </div>
      <form className="chats-container__main--bottom-container">
        <div className="emojis">
        <img className="smiley-face" src={smileyFace} alt="smiley-face icon"/>
        </div>
        <input 
          className="input-message" 
          type="text" 
          placeholder="Type a message" 
          onChange={handleInputChange} 
        />
        <div className="icons">
          <img className="clip-icon" src={clip} alt="clip icon"/>
          <img className="camera-icon" src={camera} alt="camera icon"/>
        </div>
        <button className="send-message-button">
          <img 
            className="send-icon" 
            src={sendIconSrc} 
            alt={inputValue !== '' ? 'Send icon' : 'Microphone icon'}
          />
        </button>
      </form>
    </div>
  </>)
}

export default Chat 