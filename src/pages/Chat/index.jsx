import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ChatMessages from '@components/ChatMessages'
import Dropdown from 'react-bootstrap/Dropdown'
import smileyFace from '@icons/smiley-face.png'
import backArrow from '@icons/back-grey.png'
import videoCamera from '@icons/video-camera-white.png'
import phone from '@icons/phone-white.png'
import menu from '@icons/menu-vertical.png'
import clip from '@icons/clip.png'
import camera from '@icons/camera.png'
import voiceNote from '@icons/voice-note.png'
import sendMessage from '@icons/send.png'
import MessageContainer from '@components/MessageContainer'
import './styles.scss'

const Chat = () => {   
  const location = useLocation()
  const data = location.state

  const navigation = useNavigate()

  const [inputValue, setInputValue] = useState('')
  const [sendIconSrc, setSendIconSrc] = useState(voiceNote)
  
  // const [user, setUser] = useState([])
  const handleInputChange = event => {
    const value = event.target.value
    setInputValue(value)

    if (value !== '') {
      setSendIconSrc(sendMessage)
    } else {
      setSendIconSrc(voiceNote)
    }
  }

  const contactDetail = (id) => {
    navigation(`/contact-info/${id}`, {state: data})
  }

  return (<div id={data.id}>
    <div className='chats-container__header'>
      <div className='chats-container__header--left'>
        <Link to='/home'><img className='arrow-back' src={backArrow} alt='arrow icon'/></Link>
        <div className='contact-info' onClick={() => contactDetail(data.id)}>
          <img src={data.url_image} alt='profile picture' />
          <p className='username'>{data.name}</p>
      </div>
      </div>
      <div className='chats-container__header--right'>
        <img src={videoCamera} alt='video camera icon'/>
        <img src={phone} alt='telephone icon'/>
        <Dropdown>
          <Dropdown.Toggle variant='success'>
            <img className='chat-menu-icon' src={menu} alt='menu icon'/>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <div onClick={() => contactDetail(data.id)}>View contact</div>
            </Dropdown.Item>
            <Dropdown.Item>New broadcast</Dropdown.Item>
            <Dropdown.Item>Linked devices</Dropdown.Item>
            <Dropdown.Item>Starred messages</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    <div className='chats-container__main'>
      <MessageContainer>
        <ChatMessages/>
      </MessageContainer>
      <form className='chats-container__main--bottom-container'>
        <div className='emojis'>
        <img className='smiley-face' src={smileyFace} alt='smiley-face icon'/>
        </div>
        <input 
          className='input-message' 
          type='text' 
          placeholder='Type a message' 
          onChange={handleInputChange} 
        />
        <div className='icons'>
          <img className='clip-icon' src={clip} alt='clip icon'/>
          <img className='camera-icon' src={camera} alt='camera icon'/>
        </div>
        <button className='send-message-button'>
          <img 
            className='send-icon' 
            src={sendIconSrc} 
            alt={inputValue !== '' ? 'Send icon' : 'Microphone icon'}
          />
        </button>
      </form>
    </div>
  </div>)
}

export default Chat 