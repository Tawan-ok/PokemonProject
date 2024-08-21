import React from 'react'

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import TableChartIcon from '@mui/icons-material/TableChart'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useLocation, Link } from 'react-router-dom'

import styles from './styles.module.scss'

const AppBarNavigation = () => {
  const location = useLocation()
  const activePage = location.pathname

  return (
    <div className={styles.appbarNavigation}>
      <Stack spacing={1} direction="row">
        <Button
          component={Link}
          to="/"
          color="secondary"
          startIcon={<TableChartIcon />}
          variant={activePage === '/' ? 'contained' : 'outlined'}>
          Home
        </Button>
        <Button
          component={Link}
          to="/example"
          color="secondary"
          startIcon={<LibraryBooksIcon />}
          variant={activePage === '/example' ? 'contained' : 'outlined'}>
          Example
        </Button>
      </Stack>
    </div>
  )
}

export default AppBarNavigation
