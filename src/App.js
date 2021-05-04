import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
import React from 'react';

function App() {
  class addContact extends React.component{
    constructor(props) {
      super(props);
      this.state = {
        arrayCopy = contacts.slice(0, 5)
  
      }
    }
      addContact(){
        let randomContact = Math.floor(Math.random()*contacts.length)
        this.setState({arrayCopy: arrayCopy.push(contacts[randomContact])})
      }
    render() {
      return (
        <div></div>
      )
    }
  }
  const displayActors = () => {
    
    return contacts.map((contact) => {

      return (
        <div className="main">
         
          <table>
            <thead>
              <tr>
                <th colspan="1">Picture</th>
                <th colspan="1">Name</th>
                <th colspan="1">Popularity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl}></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      );
    })
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {displayActors()}
      <addContact />
    </div>
  );
}

export default App;

