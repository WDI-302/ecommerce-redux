import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'
import { checkAuthToken } from '../lib/checkAuthToken'
import AppBar from './AppBar'

const Layout = () => {
    let auth = checkAuthToken()
  return (
    <>
    <AppBar />
    {auth ? <Outlet /> : <Navigate to='/login' />}
    </>
  )
}

export default Layout

