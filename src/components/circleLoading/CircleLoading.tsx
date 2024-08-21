import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import styles from './styles.module.scss'

const CircleLoading = () => {
  return (
    <div className={styles.root}>
      <CircularProgress className={styles.progress} />
    </div>
  )
}

export default CircleLoading
