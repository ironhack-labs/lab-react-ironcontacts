import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {
      contactsList : []
    }
    for (let i = 0; i<5; i++){
      this.state.contactsList.push(contacts[i])
    } 
    console.log(this.state.contactsList)
  }
  addContact(){
    let newContact = contacts[Math.floor(Math.random()*contacts.length)]
    let newContactsList = [...this.state.contactsList]
    newContactsList.push(newContact)
    console.log(newContactsList)
    this.setState({contactsList: newContactsList})
  }
  render () {
    return (
      <div>
        <button onClick={() => this.addContact()}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((contact, index) => {
              return (
                <tr key={contact.id+index}>
                  <td><img src={contact.pictureUrl}></img></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
