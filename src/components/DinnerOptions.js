import React from 'react'
import DinnerOption from './DinnerOption'

export default function DinnerOptions(props) {
  return (
    <div>
      {props.options.map(option => (
        <DinnerOption key={option} dinner={option} />
      ))}
    </div>
  )
}
