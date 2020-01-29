import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import DinnerOptions from './DinnerOptions'
import NewOption from './NewOption'
import Modal from './Modal'

export default class App extends Component {
  state = {
    options: ['Spaghetti', 'Fried Rice', 'Steak'],
    selectedOption: undefined
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: option }))
  }

  handleClearSelection = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  render() {
    return (
      <div>
        <Header />
        <Action 
          handlePick={this.handlePick}
        />
        <DinnerOptions options={this.state.options}/>
        <NewOption />
        <Modal 
          selectedOption={this.state.selectedOption}
          handleClearSelection={this.handleClearSelection}
        />
      </div>
    )
  }
}
