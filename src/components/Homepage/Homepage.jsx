import React, {Component} from 'react'
import Punch from '../Punch/Punch';
import {Link} from 'react-router-dom'



class Homepage extends Component{
  constructor(props){
    super(props)

    this.state = {
      punches: []
    }
  }
  render(){
    return (
      <div> 
        <div> Homepage </div> 
        <Punch />
        <Link to='/newpunch'> <button> New Punch </button> </Link>

      </div>
    )
  }
}

export default Homepage



