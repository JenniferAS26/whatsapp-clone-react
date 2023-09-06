import React from 'react'
import profilePicture from '@images/profile-pic.jpg'
import './styles.scss'

const ContactCard = () => {
  return (
    <div className='card-contact'>
      <img className='card-contact__image' src={profilePicture} alt='profile picture' />
      <h2 className='card-contact__title'>Jane Doe</h2>
    </div>
  )
}

export default ContactCard