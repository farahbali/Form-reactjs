import React, { Component } from 'react'
export class TextArea extends Component {
  render() {
    return (
      <textarea name={this.props.name} onChange={this.props.onchan} id={this.props.id}>...</textarea>
    )
  }
}
export default TextArea
