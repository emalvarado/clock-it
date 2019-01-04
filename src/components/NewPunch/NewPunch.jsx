import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NewPunch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      day: '',
      time: '',
      punch_type: ''
    }
  }

  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  }


  render() {
    return (
      <div>
        <div>NewPunch</div>
        <input type="text"
        onChange={(e)=> this.handleChange('date', e.target.value)}
        placeholder='MM/DD/YYYY'/>
        <select
        onChange={(e)=> this.handleChange('day', e.target.value)}>
          <option value='Sunday'>Sunday</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thursday'>Thursday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
        </select>
        <input type="text"
        onChange={(e)=> this.handleChange('time', e.target.value)}
        placeholder='00:00'/>
        <select onChange={(e)=> this.handleChange('punch_type', e.target.value)}
        name="" id="">
        <option value='IN'>IN</option>
        <option value='OUT'>OUT</option>
        </select>
        <button>Create Punch</button>
        <Link to='/'> <button>Cancel</button> </Link>
      </div>
    )
  }
}

export default NewPunch



