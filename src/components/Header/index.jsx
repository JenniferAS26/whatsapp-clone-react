import React from 'react'
import './styles.scss'
import verticalMenu from '@icons/menu-vertical.png'
import searchIcon from '@icons/search.png'
import cameraIcon from '@icons/camera.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <h4 className="title">WhatsApp</h4>
        <div className="icons">
          <img src={searchIcon} alt="search icon"/>
          <img className="home-menu-icon" src={verticalMenu}/>
        </div>
      </div>
      <div className="header__bottom home-header">
        <img className="home-header__image camera-icon" src={cameraIcon} alt="camera icon"/>
        <div className="home-header__options-container">
          <button className="home-header__options-container--option chats">CHATS</button>
          <button className="home-header__options-container--option status">STATUS</button>
          <button className="home-header__options-container--option calls">CALLS</button>
        </div>
      </div>
    </div>
  )
}

export default Header 