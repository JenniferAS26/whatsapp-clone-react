import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import WelcomenView from '@pages/WelcomeView'
import SigninForm from '@pages/SigninForm'
import SignupForm from '@pages/SignupForm'
import Home from '@pages/Home'
import Chat from '@pages/Chat'
import ContactInformation from '@pages/ContactInformation'
import UpdateContactInformationForm from '@pages/UpdateContactInformationForm'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <WelcomenView/> },
    { path: '/sign-in', element: <SigninForm/> },
    { path: '/sign-up', element: <SignupForm/> },
    { path: '/home', element: <Home/> },
    { path: '/chat', element: <Chat/> },
    { path: '/contact-info', element: <ContactInformation/> },
    { path: '/edit-contact', element: <UpdateContactInformationForm/> },
  ])
  return routes
}


const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes/>
        {/* {openModal && (
          <Modal>
            editar contact
          </Modal>
        )} */}
      </BrowserRouter>
    </React.StrictMode>  
  )
}

export default App