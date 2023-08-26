import React from 'react'
import './styles.scss'
import profilePicture from '@images/profile-pic2.jpg'

const ChatCard = () => {
  return (
    <div class="card">
      <div class="profile-container">
        <img class="profile-container__image" src={profilePicture} alt="profile picture"/>
        <p class="profile-container__title">Jane Doe</p>
      </div>
      <span class="connection">7:30pm</span>
    </div>
  )
}

export default ChatCard