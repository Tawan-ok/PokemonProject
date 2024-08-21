import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import PageContainer from '../PageContainer'

import styles from './styles.module.scss'

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <PageContainer>
      <div className={styles.center}>
        <Typography variant="h1" gutterBottom className={styles.header}>
          Oops!
        </Typography>
        <Typography variant="h4" gutterBottom className={styles.subHeader}>
          404 - PAGE NOT FOUND
        </Typography>
        <Typography variant="body2">
          This page you are looking for might has been removed,
        </Typography>
        <Typography variant="body2">had its name changed, or is temporarily unavailable</Typography>
        <Button
          className={styles.goToHomeButton}
          color="secondary"
          variant="outlined"
          onClick={() => navigate('/')}>
          GO TO HOMEPAGE
        </Button>
      </div>
    </PageContainer>
  )
}

export default NotFoundPage
