import React, {Component} from 'react'
import Punch from '../Punch/Punch';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Homepage.css'


class Homepage extends Component{
  constructor(props){
    super(props)

    this.state = {
      punches: [],
      // selectedItem: null
    }
    this.getPunches = this.getPunches.bind(this);
    this.deletePunch = this.deletePunch.bind(this);
  }

componentDidMount(){
this.getPunches()
}

getPunches(){
  axios.get('api/punches').then(res => {
    this.setState({
      punches: res.data
    })
  })
}

deletePunch(id){
  axios.delete(`/api/punches/${id}`).then(this.getPunches())
}

// selectItem = (id) => {
//   this.setState({
//     selectedItem: id
//   })
// }

  render(){
    let punchesToDisplay = this.state.punches.map((punch, i) => (
      <Punch key={i}
      id={punch.id}
      date={punch.date}
      day={punch.day}
      time={punch.time}
      type={punch.punch_type}
      getPunches={this.getPunches}
      deletePunch={this.deletePunch}
      // selectItem={this.selectItem}
      // selectedItem={this.state.selectedItem}
      />
    ))
    return (
      <div className='main'> 
      <h2>My Punches</h2>
        {punchesToDisplay}

        <div className='newButton'>
        <Link to='/newpunch'> <button> New Punch </button> </Link>
        </div>

      </div>
    )
  }
}

export default Homepage



