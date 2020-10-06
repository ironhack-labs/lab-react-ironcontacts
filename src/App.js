import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactData from "./contacts.json";


class App extends Component {
  
  // contactData = contactData.filter((cont1, i) => cont1[i] < cont1[6])
  
  state = {
    // contacts: contactData.filter((cont, i) => cont[i] < cont[4]),
    contacts: contactData.slice(0,5)
  };


  render(){
    return (
      <div>
        {this.state.contacts.map(cont => (
          <tr>
            <td><img src={cont.pictureUrl} alt="" width="10%"/></td>
            <td>{cont.name}</td>
            <td>{cont.popularity}</td>
          </tr>
        ))

        }
      </div>
    );

  }

  
}

export default App;
