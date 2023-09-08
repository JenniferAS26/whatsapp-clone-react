import React, { useState, useEffect } from 'react'
import Header from '@components/Header'
import SearchContact from '@components/SearchContact'
import ChatContainer from '@components/ChatContainer'
import ChatCard from '@components/ChatCard'
import StatusContainer from '@components/StatusContainer'

const Home = () => {
  // const [showHeader, setShowHeader] = useState(true)
  const [contacts, setContacts] = useState([])
  // const [search, setSearch] = useState('')

  localStorage.setItem('userContacts', JSON.stringify(contacts))
  
  useEffect( () => {
    const currentId = localStorage.getItem('currentId')
    fetch(`https://whatsapp-clone-sprint-db.up.railway.app/chats?userId=${currentId}`)
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  // const toggleComponent = () => {
  //   setShowHeader(!showHeader)
  // }

  // const handleChange = (value) => {
  //   setSearch(value)
  //   const filteredContacts = contacts.filter(contact => contact.contactName.toLowerCase().includes(value.toLowerCase()) || contact.contactPhoneNumber.includes(value))
  //   setContacts(filteredContacts)
  // }

  return (
    <div className='home-container'>
      {/* {
        showHeader ? (<Header onButtonClick={toggleComponent} />)
        : (<SearchContact onButtonClick={toggleComponent} onSearch={handleChange} />)
      } */}
      <ChatContainer contacts={contacts}>
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