import React, {useEffect} from 'react'

import { Outlet, Navigate} from 'react-router-dom'
import { checkAuthToken } from '../lib/checkAuthToken'
import AppBar from './AppBar'

import { authCheck } from '../redux/authSlice'
import { useSelector, useDispatch } from 'react-redux';

const Layout = () => {
    // verify token exists
    //
    // let auth = checkAuthToken()
    //
    // check authentication with backend
    const auth = useSelector( state => state.auth.isAuth )
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authCheck())
      }, [])

  return (
    <>
    <AppBar />
    {auth ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default Layout

