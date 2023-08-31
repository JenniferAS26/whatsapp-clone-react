import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../Context'
import Header from '@components/Header'
import ChatContainer from '@components/ChatContainer'
import ChatCard from '@components/ChatCard'

const Home = () => {
  const context = useContext(UserContext)

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://whatsapp-clone-sprint-db.up.railway.app/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  if (users !== undefined ) {
    return (
      <div className='home-container'>
        <Header/>
        <ChatContainer>
          {
            users?.map(user => (
              <ChatCard key={user.id} data={user}/>
            ))
          }
        </ChatContainer>
      </div>
    )
  }
  
    
}

export default Home 