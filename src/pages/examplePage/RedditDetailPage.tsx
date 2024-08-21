import React from 'react'

import { useParams } from 'react-router-dom'

import RedditDetail from '../../features/redditDetail/RedditDetail'
import PageContainer from '../PageContainer'

function RedditDetailPage() {
  const { name } = useParams()
  const nameParam = name || ''
  return (
    <PageContainer>
      <RedditDetail name={nameParam} />
    </PageContainer>
  )
}

export default RedditDetailPage
