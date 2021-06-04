import React, {useContext, useEffect, useState} from 'react'
import app, {auth} from '../firebase'
import firebase from 'firebase'

export const AuthContext = React.createContext()

export const useAuth = () =>{
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currUser, setCurrUser] = useState(null)

    const handleGoogleSignup = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setCurrUser)
        return unsubscribe
    }, [])

    const value = {
        currUser,
        handleGoogleSignup
    }

    return (
        <AuthContext.Provider  value={value}>
            {children}
        </AuthContext.Provider>
    )
}
