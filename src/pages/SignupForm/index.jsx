import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { createData, saveImage } from '../../services/api.js'
import silhouette from '@images/user-silhouette.jpg'
import { FaChevronLeft } from 'react-icons/fa'
import './styles.scss'

const SignupForm = () => {
  const { register, handleSubmit } = useForm()
  const [imagePreview, setImagePreview] = useState(silhouette)

  const handleImageChange = event => {
    const chosenImage = event.target.files[0]
    const imageReaderAPI = new FileReader()

    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result)
    }

    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage)
    }
  }

  const onSubmit = async userInfo => {
    const file = userInfo.url_image[0]
    const imageUrl = await saveImage(file)
    const user = {
      name: userInfo.name,
      cellphone_number: userInfo.cellphone_number,
      password: userInfo.password,
      url_image: imageUrl,
      quote: userInfo.quote,
      date: Date()
    }
    createData('users', user)
  }
  return (
    <div className="wrapper-signup">
      <div className="signup-container">
        <Link to='/sign-in' className="signup-back">
          <FaChevronLeft/>
        </Link>
        <h2 className="signup-container__title">Create an account</h2>
        <form 
          className="signup-container__form form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile-picture-wrapper">
            <div className="form__profile-picture">
              <figure className="form__profile-picture--image-container" name="avatar">
                <img className="current-picture" src={imagePreview} alt="dummy image" />
              </figure>
              <div className="form__profile-picture--input-container">
                <label htmlFor="input-url"><span>Choose a file</span> or drag it here.</label>
                <input
                  type="file" 
                  id="input-url" 
                  className="singup-input-image"
                  {...register('url_image')}
                  name='url_image'
                  accept='image/*' 
                  onChange={handleImageChange}  
                />
              </div>
            </div>
          </div>
          <div className="form__input-wrapper">
            <div className="input-container">
              <input 
                className="form__input singup-name-input" 
                type="text" 
                {...register('name')}
                name='name'
                required 
                />
              <label className="input-label" htmlFor="">Enter your name</label>
              <div className="form__input--error error"></div>
              
            </div>
            <div className="input-container">
              <input 
              className="form__input singup-number-input" 
              type="number"
              {...register('cellphone_number')}
              name='cellphone_number'
              required 
              />
              <label className="input-label" htmlFor="">Enter your phone number</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input 
              className="form__input singup-password-input" 
              type="password"
              {...register('password')}
              name='password'
              required 
              />
              <label className="input-label" htmlFor="">Enter your password</label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <textarea 
              className="form__textarea form__input singup-quote-textarea" 
              cols="30" 
              rows="10"
              {...register('quote')}
              name='quote'
              required 
              ></textarea>
              <label className="input-label" htmlFor="">Write a quote</label>
            </div>
          </div>
          <input className="form__submit" type="submit" value="Sign up" />
          {/* <button className="form__submit" type="submit">Sign up</button> */}
        </form>
      </div>
    </div>
  )
}

export default SignupForm 