
import React, { Component } from 'react'
import contacts from './contacts.json';

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      fiveContact : contacts.splice(0, 5),
      contact : contacts
    }
  }


  render() {
    return (
     
        
          <tr>
            <td><img src={this.props.pictureUrl} alt=""/></td>
            <td>{this.props.name}</td>
            <td>{this.props.popularity}</td>
            <td><button className="button" onClick={() => this.props.delete(this.props)}>Delete</button></td>
          </tr>
          
  
    )
  }
}
