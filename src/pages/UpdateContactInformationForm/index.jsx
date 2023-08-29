import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import backIcon from '@icons/back.png'
import { FaUser } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa';

const UpdateContactInformationForm = () => {
  return (
    <section className="edit-contact-container">
      <div className="edit-contact-container__header">
        <Link to='/contact-info'><img className="edit-contact-container__header--back-icon" src={backIcon} alt="back"/></Link>
        <h2 className="edit-contact-container__header--title">Edit contact</h2>
      </div>
      <form className="edit-contact-container__form form">
        <div className="first-container">
          <div className="i-icons"><FaUser/></div>
          <div className="group-inputs">
            <div className="input-container">
              <input id="edit-input-name" className="form__input" type="text" required/>
              <label className="input-label" htmlFor="edit-input-name">First name</label>
            </div>
            <div className="input-container">
              <input id="edit-input-lastname" className="form__input" type="text" required/>
              <label className="input-label" htmlFor="edit-input-lastname">Last name</label>
            </div>
          </div>
        </div>
        <div className="second-container">
        <div className="i-icons"><FaPhoneAlt/></div>
          <div className="input-container">
            <input id="edit-input-phone" className="form__input"  type="text" required/>
            <label className="input-label" htmlFor="edit-input-phone">Phone</label>
          </div>
        </div>
        <input className="form__submit button" type="submit" value="Save"/>
      </form>
    </section>
  )
}

export default UpdateContactInformationForm 