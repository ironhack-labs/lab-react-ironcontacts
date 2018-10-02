import React, { Component } from 'react';



export class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {

    console.log(this.props)
  return (
      <tr>
      <td><img src={this.props.pictureUrl}/></td>
      <td><p>{this.props.name}</p></td>
      <td><p>{this.props.popularity}</p></td>
      <td><button onClick={()=> this.props.delete(this.props.idx)}>DELETE</button></td>
      </tr>
  )
};
}