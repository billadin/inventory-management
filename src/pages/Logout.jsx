import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Auth/AuthProvider'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {user, logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    

   

    useEffect(()=> {
        if(user) {
            logOut()
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            toast.success('Logged Out')
        }

    },[])

    if(!user) {
        navigate('/login')
    }
  return (
    <></>
  )
}

export default Logout