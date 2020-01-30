import React from 'react'
import DinnerOption from './DinnerOption'

export default function DinnerOptions(props) {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length === 0 && <p>Please add some options to get started.</p>}
      {props.options.map((option, index) => (
        <DinnerOption 
          key={option} 
          dinner={option} 
          index={index + 1}
          handleRemoveOption={props.handleRemoveOption}
        />
      ))}
    </div>
  )
}
        