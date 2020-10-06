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


  addRandomContact = () => {
    console.log("yo")
    let randomNumber = Math.floor(Math.random()*(contactData.length))
    const copy = [...this.state.contacts, contactData[randomNumber]]
    // const copy = [...this.state.contacts].push(contactData[4]) // ===> Ne fonctionne pas, pourquoi ?
    this.setState({
      contacts: copy,
    })
  }


  render(){
    return (
      <div>
          <h1>IronContacts</h1>
          <button onClick={()=>this.addRandomContact()}>Add random contact</button>
          <table>
              <tbody>
                  {this.state.contacts.map(cont => (
                      <tr>
                        <td><img src={cont.pictureUrl} alt="" width="10%"/></td>
                        <td>{cont.name}</td>
                        <td>{cont.popularity}</td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
      </div>
    );

  }

  
}

export default App;
