import React from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useAppDispatch, useAppSelector } from '../../hooks/store'

import { incremented, amountAdded } from './redux/counterSlice'

function Counter() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.counter.value)

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {count}
      </Typography>
      <Stack spacing={1} direction="row">
        <Button variant="contained" onClick={() => dispatch(incremented())}>
          increment by 1
        </Button>
        <Button variant="outlined" onClick={() => dispatch(amountAdded(3))}>
          increment by amount added (3)
        </Button>
      </Stack>
    </>
  )
}

export default Counter
