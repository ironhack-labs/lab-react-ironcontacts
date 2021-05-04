import React from 'react'
import logo from './logo.svg';
import "./App.css";
import "./ContactCard/ContactCard"
import contacts from "./contacts.json";
import reactDom from 'react-dom';

class App extends from React.Component {
  displayActors = () => {
    const arrayCopy = contacts.slice(0, 5);
    console.log(arrayCopy);
    return arrayCopy.map((contact, index) => {
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
      <button onClick={() => this.addContact}>Add Random Contact</button>
    </div>
  );
}


export default App
