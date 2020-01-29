import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import DinnerOptions from './DinnerOptions'
import NewOption from './NewOption'

export default class App extends Component {
  state = {
    options: ['Spaghetti', 'Fried Rice', 'Steak']
  }
  render() {
    return (
      <div>
        <Header />
        <Action />
        <DinnerOptions options={this.state.options}/>
        <NewOption />
      </div>
    )
  }
}
