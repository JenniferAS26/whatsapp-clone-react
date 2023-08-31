import React from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { updateData } from '@utils/api.js'
import backIcon from '@icons/back.png'
import { FaUser, FaPhoneAlt } from 'react-icons/fa'
import './styles.scss'

const UpdateContactInformationForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const onSubmit = async userInfo => {
    const user = {
      name:`${userInfo.name} ${userInfo.lastname}`,
      cellphone_number: userInfo.cellphone_number,
    }
    updateData('users', id, user)
  }

  return (
    <section className='edit-contact-container'>
      <div className='edit-contact-container__header'>
        <Link to={navigate(-1)}><img className='edit-contact-container__header--back-icon' src={backIcon} alt='back'/></Link>
        <h2 className='edit-contact-container__header--title'>Edit contact</h2>
      </div>
      <form 
        className='edit-contact-container__form form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='first-container'>
          <div className='i-icons'><FaUser/></div>
          <div className='group-inputs'>
            <div className='input-container'>
              <input 
                id='edit-input-name' 
                className='form__input' 
                type='text'
                {...register('name')}
                name='name'
                required
                />
              <label className='input-label' htmlFor='edit-input-name'>First name</label>
            </div>
            <div className='input-container'>
              <input 
                id='edit-input-lastname' 
                className='form__input' 
                type='text' 
                {...register('lastname')}
                name='lastname'
                required
              />
              <label className='input-label' htmlFor='edit-input-lastname'>Last name</label>
            </div>
          </div>
        </div>
        <div className='second-container'>
        <div className='i-icons'><FaPhoneAlt/></div>
          <div className='input-container'>
            <input 
              id='edit-input-phone' 
              className='form__input' 
              type='text' 
              {...register('cellphone_number')}
              name='cellphone_number'
              required
            />
            <label className='input-label' htmlFor='edit-input-phone'>Phone</label>
          </div>
        </div>
        <input className='form__submit button' type='submit' value='Save'/>
      </form>
    </section>
  )
}

export default UpdateContactInformationForm 