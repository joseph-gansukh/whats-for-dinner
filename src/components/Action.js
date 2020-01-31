import React from 'react'

export default function Action(props) {
  return (
    <div>
      <button 
        className="big-button"
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Choose for me!
      </button>
    </div>
  )
}
