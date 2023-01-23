import React, { Component } from 'react'
export class Option extends Component {
  render() {
    let optionList=this.props.data.map(({value,label})=><option value={value}>{label}</option>)
    return (
        <select name={this.props.name} onChange={this.props.onchan}>
            {optionList}
        </select>
    )
  }
}
export default Option
