import React from 'react'

export default function DinnerOption(props) {
  return (
    <div>
      {props.index}. {props.dinner}
      <button onClick={() => props.handleRemoveOption(props.dinner)}>Remove</button>
    </div>
  )
}
