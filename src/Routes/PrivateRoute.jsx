import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading'
import { AuthContext } from '../Auth/AuthProvider'

const PrivateRoute = ({children}) => {
   const {user, loading} =  useContext(AuthContext)
   const location = useLocation()

   if (loading) {
     return (
       <Loading/>
     );
   }

   if (user) {
    return children
   }


  return <Navigate state={{from: location}} replace to={'/login'}/>
}

export default PrivateRoute