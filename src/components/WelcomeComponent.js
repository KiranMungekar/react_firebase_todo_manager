import React from 'react'

import {AuthContext } from '../services/Auth'

import SignUpComponent from './SignUpComponent'
import DashboardComponent from './DashboardComponent'


const WelcomeComponent = () => {
    const authContext = React.useContext(AuthContext)

    return (
       
        <div>
            { authContext.currUser ? <DashboardComponent />: <SignUpComponent /> }
            
            
        </div>
    )
}

export default WelcomeComponent