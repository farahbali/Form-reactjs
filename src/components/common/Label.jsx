import React, { Component } from 'react'
export class Label extends Component {
  render() {
    return (
      <label htmlFor={this.props.for}>{this.props.label}</label>
    )
  }
}

export default Label
