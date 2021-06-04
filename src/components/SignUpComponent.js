import React from 'react'
import {Button} from 'react-bootstrap'

import {useAuth} from '../services/Auth'

const SignUpComponent = () => {
    const {handleGoogleSignup} = useAuth()

    return(
        <div>
            <Button onClick={handleGoogleSignup}> Signup with Google</Button>
        </div>
    )
}
export default SignUpComponent