import React, { Component } from 'react'
import Contact from './Contact';

export default class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>IRONCONTACTS</h1>
        <table>
          <tbody>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
    <th>Action</th>
  </tr>

      </tbody>
  <tbody>
  {this.props.contacts.map((contact, index) =>{
    return <Contact 
    pic = {contact.pictureUrl}
    name = {contact.name}
    popularity = {contact.popularity}
    key = {index}
    removeActor = {this.props.removeActor}
    />
  })}

  </tbody>

</table>
      
      
      </React.Fragment>
    )
  }
}
