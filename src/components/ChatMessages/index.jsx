import React from 'react'
import './styles.scss'

const ChatMessages = ({ message }) => {

  return (<>
    {
      <div className='message-container-out'>
        <div className='message'>{message?.messages[0].message}</div>
      </div>
    }
  </>)
}

export default ChatMessages