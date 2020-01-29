import React from 'react'

export default function Action(props) {
  return (
    <div>
      <button 
        onClick={props.handlePick}
      >
        Choose for me!
      </button>
    </div>
  )
}
