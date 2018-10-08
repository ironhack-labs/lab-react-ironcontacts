import React, {Component} from 'react'
import ICListDisplay from './ICListDisplay'


class ICListContainer extends Component{

  randomContact=(e)=>{

  }
  sortByName=(e)=>{

  }
  sortByPopularity= (e)=>{

  }
  
  render(){
    return(
      <div>
        <ICListDisplay info={this.props.info} />
      </div>
    )
  }
}

export default ICListContainer