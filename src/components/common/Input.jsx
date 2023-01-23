import React, { Component } from 'react'
export class Input extends Component {
  render() {
    return (
      <input type={this.props.type} value={this.props.val} name={this.props.name} onChange={this.props.onchan} id={this.props.id} defaultchecked={this.props.check}/>
    )
  }
}
export default Input
