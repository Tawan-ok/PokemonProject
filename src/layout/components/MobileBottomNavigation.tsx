import React from 'react'

// import useMediaQuery from '@material-ui/core/useMediaQuery'

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import TableChartIcon from '@mui/icons-material/TableChart'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { Link, useLocation } from 'react-router-dom'

const MobileBottomNavigation = () => {
  const location = useLocation()
  const enableList = ['/', '/example']
  const isEnableBottomNav = enableList.includes(location.pathname)
  // const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)')
  // const isDarkModeEnabled = false

  return (
    <>
      {isEnableBottomNav ? (
        <>
          <div className="bottom-navigation">
            <BottomNavigation value={location.pathname} showLabels>
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Home"
                value="/"
                icon={<TableChartIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/example"
                label="Example"
                value="/example"
                icon={<LibraryBooksIcon />}
              />
            </BottomNavigation>
            <div className="bottom-safe-area"></div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default MobileBottomNavigation
