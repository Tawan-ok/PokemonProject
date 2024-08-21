import React, { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'

import CircleLoading from '../../components/circleLoading/CircleLoading'
import { useAppDispatch, useAppSelector } from '../../hooks/store'

import { SubRedditSelection } from './components'
import { fetchRedditList } from './redux/redditListSlice'

type RedditItemType = {
  data: {
    title: string
    name: string
  }
}

function RedditList() {
  const initialized = useRef(false)
  const dispatch = useAppDispatch()
  const { list, isFetching, error } = useAppSelector((state) => state.redditList)
  const [subredditSelected, setSubredditSelected] = useState('all')

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      dispatch(fetchRedditList({ subreddit: subredditSelected }))
    }
    return () => {}
  }, [dispatch, subredditSelected])

  const onSelectSubReddit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    initialized.current = false
    console.log('event.target.value', event.target.value)
    setSubredditSelected(event.target.value)
  }

  return (
    <div>
      <p>Reddit list</p>
      <SubRedditSelection
        subredditSelected={subredditSelected}
        onSelectSubReddit={onSelectSubReddit}
      />
      {isFetching ? <CircleLoading /> : null}
      {list &&
        list.map((topic: RedditItemType, i: number) => (
          <Link key={i} to={`/example/${topic.data.name}`}>
            <p>{topic.data.title}</p>
          </Link>
        ))}
      {error ? <p>Error</p> : null}
    </div>
  )
}

export default RedditList
