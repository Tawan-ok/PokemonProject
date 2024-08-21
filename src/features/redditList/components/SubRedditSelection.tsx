import React from 'react'

const SUBREDDIT_LIST = ['all', 'reactjs', 'apple']

type Props = {
  subredditSelected: string
  onSelectSubReddit: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function SubRedditSelection({ subredditSelected, onSelectSubReddit }: Props) {
  return (
    <div>
      <select id="subreddit" value={subredditSelected} onChange={onSelectSubReddit}>
        {SUBREDDIT_LIST.map((subreddit, i) => (
          <option key={i} value={subreddit}>
            {subreddit}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SubRedditSelection
