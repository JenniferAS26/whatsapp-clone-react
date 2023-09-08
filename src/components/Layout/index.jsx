import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import SearchContact from '@components/SearchContact'

const Layout = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  localStorage.setItem('userContacts', JSON.stringify(contacts))
  
  useEffect( () => {
    const currentId = localStorage.getItem('currentId')
    fetch(`https://whatsapp-clone-sprint-db.up.railway.app/chats?userId=${currentId}`)
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  const toggleComponent = () => {
    setShowHeader(!showHeader)
  }

  const handleChange = (value) => {
    setSearch(value)
    const filteredContacts = contacts.filter(contact => contact.contactName.toLowerCase().includes(value.toLowerCase()) || contact.contactPhoneNumber.includes(value))
    setContacts(filteredContacts)
  }

  return (<>
    {
        showHeader ? (<Header onButtonClick={toggleComponent} />)
        : (<SearchContact onButtonClick={toggleComponent} onSearch={handleChange} />)
      }
    <Outlet />
  </>)
}

export default Layout
