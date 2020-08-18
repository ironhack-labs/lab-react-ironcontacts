import React from 'react'

class SortByPopularity extends React.Component{
  render(){
    return(
    <button onClick= {()=>{this.props.onPop()}}>Sort by popularity</button>)
  }
}

export default SortByPopularity