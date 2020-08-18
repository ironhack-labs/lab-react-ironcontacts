import React from 'react'

class AddContact extends React.Component{
  render(){
    return(
    <button onClick= {()=>{this.props.onDelete(this.props.id)}}>Remove contact</button>)
  }
}

export default AddContact