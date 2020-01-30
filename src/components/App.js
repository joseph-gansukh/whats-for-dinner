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
  
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  handleNewOption = (option) => {
    if (!option) {
      return 'Please enter valid option.'
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
        <Action 
          handlePick={this.handlePick}
        />
        <DinnerOptions 
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <NewOption 
          handleNewOption={this.handleNewOption}
        />
        <Modal 
          selectedOption={this.state.selectedOption}
          handleClearSelection={this.handleClearSelection}
        />
      </div>
    )
  }
}
