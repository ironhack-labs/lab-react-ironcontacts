import React from 'react'

class SortByName extends React.Component{
  render(){
    return(
    <button onClick= {()=>{this.props.onName()}}>Sort by name</button>)
  }
}

export default SortByName