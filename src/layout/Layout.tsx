import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Hidden from '@mui/material/Hidden'
import Toolbar from '@mui/material/Toolbar'
import { Outlet } from 'react-router-dom'

import logo from '../assets/chocofoxcolin-pokemon-icon-mega-charizard-x.svg'

import { MobileBottomNavigation, DarkModeToggle, BackButton } from './components'
import styles from './styles.module.scss'

function Layout() {
  return (
    <>
      <CssBaseline />
      <AppBar className="vroom-appbar">
        <Toolbar>
          <BackButton />
          <div className={styles.Logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.appbarNavigation}>
            <Hidden mdDown implementation="css"></Hidden>
          </div>
          <Box>
            <DarkModeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
      <Hidden mdUp implementation="css">
        <MobileBottomNavigation />
      </Hidden>
    </>
  )
}

export default Layout
