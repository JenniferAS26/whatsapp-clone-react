import React from 'react'
import './styles.scss'

const ChatContainer = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="cards-container">
        {children}
      </div>
    </div>
  )
}

export default ChatContainer 