import React from 'react'
import './styles.scss'

const SigninForm = () => {
  return (
    <div className="wrapper">
      <div className="auth-container">
        <h2 className="auth-container__title">Enter your phone number</h2>
        <form className="auth-container__form form">
          <div className="form__input-wrapper">
            <div className="input-container">
              <input id="input-phone" className="form__input" type="number" required />
              <label className="input-label" htmlFor="input-phone">Enter your phone number</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input id="input-password" className="form__input" type="password" required />
              <label className="input-label" htmlFor="input-password">Enter your password</label>
              <div className="form__input--error error"></div>
            </div>
          </div>
          <button className="form__button">next</button>
        </form>
        <span className="signup-redirect">Sign up for free</span>
      </div>
    </div>
  )
}

export default SigninForm