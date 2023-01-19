// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { createContext, useState, useContext } from 'react';
import {auth} from '../firebase'

const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState();
    // const [loading, setLoading]=useState(true);

    const signup=(email,password)=>{
        return auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(user=>{
            setCurrentUser(user)
            // setLoading(false)
        })
        return unsubscribe
    },[])

    

    const value={
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider