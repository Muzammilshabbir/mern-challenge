import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import Nav from './Navbar'

export default function Layout() {

  const token = localStorage.getItem('_token')

  const navigate = useNavigate()

  useEffect(() => {

    if (!token || token === 'undefined') {
      navigate('/', { replace: true })
    }

  }, [navigate, token])

  return (
    <>
      <Nav/>
      <Outlet />
    </>
  )
}
