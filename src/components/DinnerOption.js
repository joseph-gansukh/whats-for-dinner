import React from 'react'

export default function DinnerOption(props) {
  return (
    <div className="option">
      <p className="option__text">{props.index}. {props.dinner}</p>
      <button 
        className="button button--link"
        onClick={() => props.handleRemoveOption(props.dinner)}
      >
        Remove
      </button>
    </div>
  )
}
