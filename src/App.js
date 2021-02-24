import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table>
           <thead>
             <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
             </tr>
           </thead>
           <tbody>
           { this.state.contacts.map(contact => {
             return (
               <tr key={ contact.id }>
                  <td><img src={ contact.pictureUrl } style={{ width: '50px'}} alt="pictures"/></td>
                  <td>{ contact.name }</td>
                  <td>{ (contact.popularity).toFixed(2) }</td>
               </tr>
             )
           })}
           </tbody>
         </table>
        
      </div>
    )
  }
}