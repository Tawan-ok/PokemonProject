import React from 'react'

import { ThemeProvider } from '@mui/material/styles'

import { useAppSelector } from './hooks/store'
import Router from './Router'
import theme from './theme/theme'

function AppTheme() {
  const isDarkMode = useAppSelector((state) => state.layout.isDarkMode)
  return (
    <ThemeProvider theme={theme(isDarkMode)}>
      <Router />
    </ThemeProvider>
  )
}

export default AppTheme
