import React from 'react'
import './styles.scss'

const ChatContainer = ({ children }) => {
  return (
    <div class="wrapper">
      <div className="cards-container">
        {children}
      </div>
    </div>
  )
}

export default ChatContainer 