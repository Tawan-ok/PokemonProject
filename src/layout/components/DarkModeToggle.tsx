import React, { useEffect } from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Button from '@mui/material/Button'

import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { updateDarkmode } from '../redux/layoutSlice'

function DarkModeToggle() {
  const dispatch = useAppDispatch()
  const isDarkMode = useAppSelector((state) => state.layout.isDarkMode)

  function toggleDarkMode(isDark: boolean) {
    dispatch(updateDarkmode(isDark))
    localStorage.setItem('isDarkMode', isDark.toString())
  }

  useEffect(() => {
    const darkModeValue = localStorage.getItem('isDarkMode')
    const isDark = darkModeValue === 'true' || false
    dispatch(updateDarkmode(isDark))
    return () => {}
  }, [dispatch])

  return (
    <Button
      variant="text"
      color="secondary"
      startIcon={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      onClick={() => toggleDarkMode(!isDarkMode)}>
      {isDarkMode ? 'Dark' : 'Light'}
    </Button>
  )
}

export default DarkModeToggle
