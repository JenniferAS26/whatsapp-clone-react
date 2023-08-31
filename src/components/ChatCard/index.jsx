import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context'
import './styles.scss'


const ChatCard = (data) => {
  const context = useContext(UserContext)
  let navigate = useNavigate()

  const showContact = (contactDetail) => {
    context.setContactToShow([...context.contactToShow, contactDetail])
    navigate(`/chat/${contactDetail.id}`, {state: contactDetail}  
    )
  }

  /** Date format */
  const dateObject = new Date(data.data.date)
  const formatedDate = dateObject.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}) // a.m / p.m

  return (
    <div 
      className="card-chat" 
      id={data.data.id} 
      onClick={() => {
        showContact(data.data)

      }}>
      <div className="profile-container">
        <img className="profile-container__image" src={data.data.url_image} alt="profile picture"/>
        <p className="profile-container__title">{data.data.name}</p>
      </div>
      <span className="connection">{formatedDate}</span>
    </div>
  )
}

export default ChatCard