import React from 'react'

import Typography from '@mui/material/Typography'

import { ReactComponent as ReactLogo } from '../../assets/react.svg'
import Counter from '../../features/counter/Counter'
import RedditList from '../../features/redditList/RedditList'
import PageContainer from '../PageContainer'

function ExamplePage() {
  return (
    <PageContainer>
      <Typography variant="h4" gutterBottom>
        Example
      </Typography>
      <ReactLogo />
      <Counter />
      <br />
      <RedditList />
    </PageContainer>
  )
}

export default ExamplePage
