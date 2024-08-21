import React, { useEffect, useRef } from 'react'

import { CircleLoading } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

import { fetchRedditDetail, getRedditDetail } from './redux/redditDetailSlice'

function RedditDetail(props: { name: string }) {
  const initialized = useRef(false)
  const { name } = props
  const dispatch = useAppDispatch()
  const { detail, isFetching, error } = useAppSelector((state) => getRedditDetail(state, name))

  useEffect(() => {
    if (!initialized.current && detail.title === '') {
      initialized.current = true
      dispatch(fetchRedditDetail(name))
    }
    return () => {}
  }, [dispatch, name, detail])
  return (
    <div>
      {isFetching ? (
        <CircleLoading />
      ) : (
        <div>
          RedditDetail {name}
          <p>title: {detail?.title}</p>
          <p>subreddit: {detail?.subreddit}</p>
        </div>
      )}
      {error ? <p>Error</p> : null}
    </div>
  )
}

export default RedditDetail
