import React from 'react'
import { Link } from 'react-router-dom'
import './Punch.css'


export default function Punch(props) {
  const { id, date, day, time, type } = props
  return (
    <div className='punch'>
      <span className='type'>{type}</span>
      {/* <div className='table'> */}
        <span className='title'>DATE:  </span>  <span className='data'>{date} </span>
      {/* </div> */}

      {/* <div className='table'> */}
        <span className='title'>DAY:  </span>  <span className='data'>{day}   </span>
      {/* </div> */}

      {/* <div className='table'> */}
        <span className='title'>TIME:  </span> <span className='data'>{time}</span>
      {/* </div> */}





      <Link to={{
        pathname: '/newpunch',
        state: {
          currentId: id,
          date: date,
          day: day,
          time: time,
          punch_type: type
        }
      }}
      >
        <button className='editButton' >Edit</button>
      </Link>
      <button className='deleteButton' onClick={() => props.deletePunch(id)}>Delete</button>
    </div>
  )
}


