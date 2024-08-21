import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { useNavigate, useLocation } from 'react-router-dom'

const BackButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const enableBackList = [
    '/',
    '/deployment-history',
    '/deployment-request',
    '/release-ticket',
    '/example',
  ]
  const isDisableBack = enableBackList.includes(location.pathname)

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
      {!isDisableBack ? (
        <IconButton onClick={() => goBack()} edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      ) : null}
    </>
  )
}

export default BackButton
