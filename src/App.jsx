import React, { Component } from 'react'
import Button from './components/common/Button'
import Input from './components/common/Input'
import Label from './components/common/Label'
import Option from './components/common/Option'
import TextArea from './components/common/TextArea'
import "./app.css"
export class App extends Component {
  options=[
    {
      value: '',
      label: '-- Select Salutation--',
    },
    {
      value: 'Hi',
      label: 'Hi',
    },
    {
      value: 'Good morning',
      label: 'Good morning',
    },
    {
      value: 'How are you',
      label: 'How are you',
    },
  ]
  state={
    firstName:"",
    lastName:"",
    email:"",
    date:"",
    gender:"",
    address:"",
    salutation:"",
  }
  handelChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    this.setState({[name]:value})
  }
  handelSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const {firstName,lastName,email,date,gender,address}=this.state
    return (
      <form onSubmit={this.handelSubmit}>
        <div className='form-data'>
          <Label label="Salutation" id="slt"/>
          <Option data={this.options} name="salutation" onchan={this.handelChange}/>
        </div>
        <div className='form-data'>
          <Label label="first name" id="fn"/>
          <Input type="text" val={firstName} name="firstName" onchan={this.handelChange} id="fn" />
        </div>
        <div className='form-data'>
          <Label label="last name" id="ln"/>
          <Input type="text" val={lastName} name="lastName" onchan={this.handelChange}  id="ln"/>
        </div>
        <div className='form-data'>
          <p>Gender</p>
          <Input type="radio" val="female" name="gender"  onchan={this.handelChange} id="female"  check={gender === 'Female'}/>
          <Label label="female" id="f"/>
          <Input type="radio" val="male" name="gender"  onchan={this.handelChange} id="male"  check={gender === 'Male'}/>
          <Label label="Male" id="m"/>
        </div>
        <div className='form-data'>
          <Label label="email" id="ln"/>
          <Input type="email" val={email} name="email"  onchan={this.handelChange} id="ln"/>
        </div>
        <div className='form-data'>
          <Label label="date of birth" id="dt"/>
          <Input type="date" val={date} name="date"  onchan={this.handelChange} id="dt"/>
        </div>
        <div className='form-data'>
          <Label label="address" id="add"/>
          <TextArea name="address" value={address} onchan={this.handelChange} id="add"/>
        </div>
        <Button label="Show data"/>
      </form>
    )
  }
}
export default App

