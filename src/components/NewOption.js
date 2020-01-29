import React, { Component } from 'react'

export class NewOption extends Component {
  state = {
    error: undefined
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleNewOption(option)
    this.setState(() => ({ error }))
    e.target.elements.option.value = ''
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"/>
          <button>
            Add option
          </button>
        </form>
      </div>
    )
  }
}

export default NewOption
