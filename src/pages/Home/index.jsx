import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../Context'

import { Link } from 'react-router-dom'
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
              // <Link to='/chat'>
                <ChatCard key={user.id} data={user}/>
              // </Link>
            ))
          }
        </ChatContainer>
      </div>
    )
  }
  
    
}

export default Home 