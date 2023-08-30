import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import verticalMenu from '@icons/menu-vertical.png'
import searchIcon from '@icons/search.png'
import cameraIcon from '@icons/camera.png'
import './styles.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <h4 className="title">WhatsApp</h4>
        <div className="icons">
          <img src={searchIcon} alt="search icon"/>
          <Dropdown>
            <Dropdown.Toggle variant='success'>
              <img className="home-menu-icon" src={verticalMenu}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>New group</Dropdown.Item>
              <Dropdown.Item>New broadcast</Dropdown.Item>
              <Dropdown.Item>Linked devices</Dropdown.Item>
              <Dropdown.Item>Starred messages</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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