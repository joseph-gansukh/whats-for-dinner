import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import DinnerOptions from './DinnerOptions'
import NewOption from './NewOption'
import Modal from './Modal'

export default class App extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const options = JSON.stringify(this.state.options)
      localStorage.setItem('options', options)
    }
  }

  handleRemoveOption = (optionToRemove) => {
    this.setState(() => ({ options: this.state.options.filter(option => {
      return optionToRemove !== option
    })}))
  }
  
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  // adds new option
  handleNewOption = (option) => {
    if (!option) {
      return 'Please enter a valid option.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists. Please enter a different option.'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
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
        <div className="container">
          <Action 
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 1}
          />
          <div className="widget">
            <DinnerOptions 
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOption={this.handleRemoveOption}
            />
            <NewOption 
              handleNewOption={this.handleNewOption}
            />
          </div>
        </div>
        <Modal 
          selectedOption={this.state.selectedOption}
          handleClearSelection={this.handleClearSelection}
        />
      </div>
    )
  }
}
