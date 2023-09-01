import React from 'react'
import wallpaper from '@images/wallpaper.png'
import './styles.scss'

const MessageContainer = ({ children }) => {
  return (<>
    <div className='chats-container__main--wallpaper-container'>
        <img src={wallpaper} alt='wallpaper image' />
        {children}
    </div>
  </>)
}

export default MessageContainer