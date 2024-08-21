import React from 'react'

import style from './StatsBar.module.css'

interface StatsBarProps {
  statName: string
  statValue: number
}

const StatsBar: React.FC<StatsBarProps> = ({ statName, statValue }) => {
  return (
    <div className={style.statsBarContainer}>
      <span className={style.statName}>{statName}</span>
      <div className={style.progressBar}>
        <div
          className={style.progress}
          style={{ width: `${(statValue / 100) * 100}%` }} // Assuming 255 is the max stat value
        ></div>
      </div>
      <span className={style.statValue}>{statValue}</span>
    </div>
  )
}

export default StatsBar
