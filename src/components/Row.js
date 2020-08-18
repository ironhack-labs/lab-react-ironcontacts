import React from 'react'
import RemoveContact from './RemoveContact'

class Row extends React.Component{
render(){
  return(
    <tr>
      <td><img src={this.props.contact.pictureUrl} alt='' width='75'/></td>
      <td>{this.props.contact.name}</td>
      <td>{(Math.floor(this.props.contact.popularity*100)/100)}</td>
      <td><RemoveContact onDelete={this.props.onDelete} id={this.props.id}/></td>
    </tr>
    )
}
}



export default Row