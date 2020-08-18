import React from 'react'

class AddContact extends React.Component{
  render(){
    return(
    <button onClick= {()=>{this.props.onAdd()}}>Add contact</button>)
  }
}

export default AddContact