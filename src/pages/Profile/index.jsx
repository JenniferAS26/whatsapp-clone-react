import React from 'react'
import { useNavigate } from 'react-router-dom'
import backArrow from '@icons/back.png'

const Profile = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/home')
  }

  return (
    <section className='profile-container'>
      <div className='profile-container__header'>
        <img src={backArrow} alt='arrow back icon' onClick={() => goBack()} />
        <h2>Profile</h2>
      </div>
      <div className='profile-container__main'></div>
    </section>
  )
}

export default Profile