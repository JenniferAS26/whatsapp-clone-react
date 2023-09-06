import React, { useState, useEffect } from 'react'
import Header from '@components/Header'
import ChatContainer from '@components/ChatContainer'
import ChatCard from '@components/ChatCard'

const Home = () => {
  const [contacts, setContacts] = useState([])

  localStorage.setItem('userContacts', JSON.stringify(contacts))
  
  useEffect( () => {
    const currentId = localStorage.getItem('currentId')
    fetch(`https://whatsapp-clone-sprint-db.up.railway.app/chats?userId=${currentId}`)
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])
  return (
    <div className='home-container'>
      <Header/>
      <ChatContainer>
        {
          contacts.map(contact => (
            <ChatCard key={contact.contactId} data={contact}/>
          ))
        }
      </ChatContainer>
    </div>
  ) 
}

export default Home 