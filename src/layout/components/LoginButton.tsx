import React from 'react'

import { Login } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useLocation, Link } from 'react-router-dom'

const LoginButton = () => {
  const location = useLocation()
  const activePage = location.pathname
  return (
    <Button
      component={Link}
      to="/login"
      color="secondary"
      startIcon={<Login />}
      variant={activePage === '/login' ? 'contained' : 'outlined'}>
      Login
    </Button>
  )
}

export default LoginButton
