import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth"
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const axios = useAxios()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  const updatingUser = (username, photo) => {
    console.log(user)
     setLoading(true);
     return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
     })
  }


  const loggingWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
          const userInfo = { email: currentUser.email };
          console.log(userInfo)
          axios.post('/auth/login', userInfo)
          .then(response => {
            console.log(response)
            const token = response.data?.user?.token
            const meta = JSON.stringify(response.data?.user?.meta)
            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', meta);
            setLoading(false);
          })
          .catch(e=> console.log(e))
      } else {
          // logOut()
          setLoading(false);
          localStorage.removeItem('access-token');
          localStorage.removeItem('userInfo');
      }
      
    });
    return () => {
        unsubscribe();
    }
  }, [])



  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    updatingUser,
    loggingWithGoogle,
    loading, 
    setLoading,
  };


  return (
    <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;