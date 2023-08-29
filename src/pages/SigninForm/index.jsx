import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const SigninForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(phoneNumber);
    console.log(password);
  }

  return (
    <div className="wrapper-signin">
      <div className="auth-container">
        <h2 className="auth-container__title">Enter your phone number</h2>
        <form 
          className="auth-container__form form"
          onSubmit={handleSubmit}
        >
          <div className="form__input-wrapper">
            <div className="input-container">
              <input 
                id="input-phone" 
                className="form__input" 
                type="number"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} 
                required />
              <label className="input-label" htmlFor="input-phone">Enter your phone number</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input 
                id='input-password' 
                className='form__input' 
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)} 
                required />
              <label className='input-label' htmlFor='input-password'>Enter your password</label>
              <div className='form__input--error error'></div>
            </div>
          </div>
          <button className='form__button' type='submit'><Link to='/home' className='link'>next</Link></button>
        </form>
        <Link to='/sign-up'><span className='signup-redirect'>Sign up for free</span></Link>
      </div>
    </div>
  )
}

export default SigninForm