import React from 'react'

import WelcomeComponent from './components/WelcomeComponent'
import { AuthProvider } from './services/Auth'


const App = () => {
  return (
    <>
      <AuthProvider>
          <WelcomeComponent />
      </AuthProvider>
    </>
  )
}

export default App