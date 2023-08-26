import React from 'react'
import Header from '@components/Header'
import ChatContainer from '@components/ChatContainer'
import ChatCard from '@components/ChatCard'

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <ChatContainer>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
      </ChatContainer>
    </div>
  )
}

export default Home 