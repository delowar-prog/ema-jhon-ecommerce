import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../firebase.config'


export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const[user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    //user registration with email & pass
    const registerUser=(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    //user Login with email & pass
    const logIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout with email & pass
    const logOut=()=>{
        return signOut(auth)
    }
    //observe user auth state
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        //stop observing while unmounting 
        return ()=>{
            return unsubscribe()
        }
    }, [])

    const authInfo={user, loading, registerUser, logIn, logOut}
  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider