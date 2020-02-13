import React from 'react'
import DinnerOption from './DinnerOption'

export default function DinnerOptions(props) {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button>
      </div>
      {props.options.length === 0 && <p className="widget__message">Please add some options to get started!</p>}
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
        