import React from 'react'
import { useNavigate } from 'react-router-dom'
import backArrow from '@icons/back.png'
import './styles.scss'

const Profile = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/home')
  }

  return (
    <section className='profile-container'>
      <div className='profile-container__header'>
        <img className='profile-container__header--icon' src={backArrow} alt='arrow back icon' onClick={() => goBack()} />
        <h2 className='profile-container__header--title'>Profile</h2>
      </div>
      <div className='profile-container__main'>
        <form>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Name' />
          <label htmlFor=''>Quote</label>
          <input type='text' placeholder='quote' />
          
        </form>
      </div>
    </section>
  )
}

export default Profile