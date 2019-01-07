import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './NewPunch.css'

class NewPunch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      day: 'Sunday',
      time: '',
      punch_type: 'IN',

    }
  }

  componentDidMount() {
    console.log(this.props.location.state)
    const { state: propState } = this.props.location
    // console.log(propState)

    if (!propState) {
      return this.state
    } else {
      this.setState({
        date: propState.date,
        day: propState.day,
        time: propState.time,
        punch_type: propState.punch_type
      })
    }
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }

  addPunch = () => {
    const { date, day, time, punch_type } = this.state
    axios.post('/api/punches', { date, day, time, punch_type }).then(
      this.props.getPunches
    )
  }

  editPunch = (id) => {
    const { date, day, time, punch_type } = this.state
    axios.put(`/api/punches/${id}`, { date, day, time, punch_type }).then(
      this.props.getPunches
    )
  }


  render() {
    const { state: propState } = this.props.location
    const { date, day, time, punch_type } = this.state

    return (
      <div className='newPunch'>
        <h2>NewPunch</h2>

        <div className='wholeBox'>
          <div className='inputsBox'>

            <div className='box'>
              <label>DATE:</label>
              <input type="date"
                value={date}
                onChange={(e) => this.handleChange('date', e.target.value)} />
            </div>

            <div className='box'>
              <label>DAY:</label>
              <select
                value={day}
                onChange={(e) => this.handleChange('day', e.target.value)}>
                <option value='Sunday'>Sunday</option>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
                <option value='Saturday'>Saturday</option>
              </select>
            </div>

            <div className='box'>
              <label>TIME:</label>
              <input type="time"
                value={time}
                onChange={(e) => this.handleChange('time', e.target.value)} />
            </div>

            <div className='box'>
              <label>PUNCH TYPE:</label>
              <select value={punch_type}
                onChange={(e) => this.handleChange('punch_type', e.target.value)}
                name="" id="">
                <option value='IN'>IN</option>
                <option value='OUT'>OUT</option>
              </select>
            </div>
          </div>

          <div className='buttonBox'>
            <Link to='/'>
              {
                !propState ?
                  <button onClick={() => this.addPunch()} >Create Punch</button>
                  :

                  <button onClick={() => this.editPunch(propState.currentId)} >Save Changes </button>
              }
            </Link>
            <Link to='/'> <button className='deleteButton'>Cancel</button> </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPunch



