import React from 'react'
import './styles.scss'

const SignupForm = () => {
  return (
    <div className="wrapper">
      <div className="signup-container">
        <button className="signup-back">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <h2 className="signup-container__title">Create an account</h2>
        <form className="signup-container__form form">
          <div className="profile-picture-wrapper">
            <div className="form__profile-picture">
              <figure className="form__profile-picture--image-container" name="avatar">
                <img className="current-picture" src="./src/assets/images/user-silhouette.jpg" alt="dummy image" />
              </figure>
              <div className="form__profile-picture--input-container">
                <label htmlFor="input-url"><span>Choose a file</span> or drag it here.</label>
                <input type="file" id="input-url" className="singup-input-image" accept="image/*" />
              </div>
            </div>
          </div>
          <div className="form__input-wrapper">
            <div className="input-container">
              <input className="form__input singup-name-input" type="text" required />
              <label className="input-label" htmlFor="">Enter your name</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input className="form__input singup-number-input" type="number" required />
              <label className="input-label" htmlFor="">Enter your phone number</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input className="form__input singup-password-input" type="password" required />
              <label className="input-label" htmlFor="">Enter your password</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <textarea className="form__textarea form__input singup-quote-textarea" cols="30" rows="10" required></textarea>
              <label className="input-label" htmlFor="">Write a quote</label>
            </div>
          </div>
          <input className="form__submit" type="submit" value="Sign up" />
        </form>
      </div>
    </div>
  )
}

export default SignupForm 