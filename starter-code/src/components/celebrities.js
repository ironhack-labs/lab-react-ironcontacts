import React, { Component } from 'react';
import '../App.css';
import contacts from "../contacts.json";

export default class celebrities extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: contacts.slice(0,5),

    } 
  }
  render() {
    var celebrities = this.state.contacts.map((contact)=>{
      return <tr>
                <td>
                  <img src={contact.pictureUrl} width="80px" />
                </td>
                <td>
                 <h1>{contact.name}</h1>
                </td>
                <td>
                  <h4>{contact.popularity}</h4>
                </td>
              </tr>
    })

    return (
      <div className="App">
          <h1>IronContacts</h1>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            
              {celebrities}



          </table>
      </div>
    );
  }
}