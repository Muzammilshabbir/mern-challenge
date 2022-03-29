import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
export default function Layout() {

  const token = localStorage.getItem('_token')

  const navigate = useNavigate()

  useEffect(() => {

    if (!token || token === 'undefined') {
      navigate('/', { replace: true })
    }

  }, [navigate, token])

  return (
    <div>
      <Outlet />
    </div>
  )
}
