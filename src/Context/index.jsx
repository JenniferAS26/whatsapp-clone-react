import { createContext } from 'react'

const userContext = createContext()

export const  userProvider  = ({ children }) => {
  return (
    <userContext>
      {children}
    </userContext>
  )
}