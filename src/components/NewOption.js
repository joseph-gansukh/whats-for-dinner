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
        {this.state.error && <p className="new-option-error">{this.state.error}</p>}
        <form className="new-option" onSubmit={this.handleSubmit}>
          <input className="new-option__input" type="text" name="option"/>
          <button className="button">
            Add option
          </button>
        </form>
      </div>
    )
  }
}

export default NewOption
