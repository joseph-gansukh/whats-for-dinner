import React, { Component } from 'react'

export class NewOption extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

export default NewOption
