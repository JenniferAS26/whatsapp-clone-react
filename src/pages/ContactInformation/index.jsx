import React from 'react'
import { Link } from 'react-router-dom'
import backIcon from '@icons/back.png'
import verticalMenu from '@icons/menu-vertical.png'
import profilePicture from '@images/profile-pic2.jpg'
import carousel1 from '@images/image1.jpg'
import carousel2 from '@images/image2.jpg'
import carousel3 from '@images/image3.jpg'
import carousel4 from '@images/image4.jpg'
import carousel5 from '@images/image5.jpg'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { ImSearch } from 'react-icons/Im'
import { FaChevronRight } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { FaFire } from 'react-icons/fa'
import { ImImage } from 'react-icons/Im'
import { FaStar } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { PiClockCountdownFill } from 'react-icons/pi'
import { FaLockOpen } from 'react-icons/fa'
import './styles.scss'

const ContactInformation = () => {
  return (
    <section className='contact-info-container'>
      <div className="contact-info-container__top">
        <Link to='/chat'><img className="arrow-back-icon" src={backIcon} alt="back arrow icon"/></Link>
        <div className="contact-info-container__top--info contact">
          <img className="contact__photo" src={profilePicture} alt="profile picture"/>
          <h3 className="contact__name">Jane Doe</h3>
          <span className="contact__number">+57 315 1234569</span>
          <div className="contact__actions">
            <div className="contact__actions--options">
              <button>
                <FaPhoneAlt/>
              </button>
              <span>Audio</span>
            </div>
            <div className="contact__actions--options">
              <button>
                <FaVideo/>
              </button>
              <span>Video</span>
            </div>
            <div className="contact__actions--options">
              <button>
                <ImSearch/>
              </button>
              <span>Search</span>
            </div>
          </div>
        </div>
        <Link to='/edit-contact'>
          <img className="contact-menu-icon" src={verticalMenu} alt="menu icon"/>
        </Link>
      </div>
      <div className="contact-info-container__media-links-docs">
        <div className="contact-info-container__media-links-docs--top">
          <p>Media, links, and docs</p>
          <div>
            <span>8.215</span>
            <button>
              <FaChevronRight/>
            </button>
          </div>
        </div>
        <div className="contact-info-container__media-links-docs--carousel">
          <img src={carousel1} alt="carousel images"/>
          <img src={carousel2} alt="carousel images"/>
          <img src={carousel3} alt="carousel images"/>
          <img src={carousel4} alt="carousel images"/>
          <img src={carousel5} alt="carousel images"/>
        </div>
      </div>
      <div className="contact-info-container__notifications">
        <div className="contact-info-container__notifications--items">
          <FaBell className='i' />
          <span>Mute notifications</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <FaFire className="i" />
          <span>Custom notifications</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <ImImage className='i' />
          <span>Media visibility</span>
        </div>
        <div className="contact-info-container__notifications--items">
          <FaStar className='i' />
          <span>Starred messages</span>
        </div>
      </div>
      <div className="contact-info-container__encryption">
        <div className="contact-info-container__encryption--items">
          <button className="delete-button">
            <FaTrashAlt />
          </button>
          <div className="description-wrapper">
            <p>Delete</p>
          </div>
        </div>
        <div className="contact-info-container__encryption--items">
          <PiClockCountdownFill className="i i-clock"/>
          <div className="description-wrapper">
            <p>Disappearing messages</p>
            <span>Off</span>
          </div>
        </div>
        <div className="contact-info-container__encryption--items">
          <FaLockOpen className="i"/>
          <div className="description-wrapper">
            <p>Chat lock</p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ContactInformation 