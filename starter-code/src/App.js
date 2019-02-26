import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  constructor (props){
    super (props);
    this.state={
      contacts:contacts.slice(0,5)
    }
  }

  //Functions 

  addRandomContact (){
    let random = Math.floor(Math.random()*contacts.length);
    const randomContact = contacts[random];

    const contactsCopy = [...this.state.contacts]; //pour faire une copie du tableau
    
    contactsCopy.push(randomContact);

    this.setState ({
        contacts:contactsCopy //et on reset le state intial avec la nouvelle liste
    })

  }


  sortbyalpha(){
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a,b){
      if (a.name<b.name) {
        return -1;
            }
      if (a.name>b.name) {
        return 1;
      } 
      return 0;
    });

    this.setState ({
      contacts:contactsCopy
    })

  }  

  sortbypop(){
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a,b){
      if (a.popularity>b.popularity) {
        return -1;
            }
      if (a.popularity<b.popularity) {
        return 1;
      } 
      return 0;
    });

    this.setState ({
      contacts:contactsCopy
    })

  }  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
 
        <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortbyalpha()}>Sort by Name</button>
        <button onClick={() => this.sortbypop()}>Sort by Popularity</button>
      
        
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
              {this.state.contacts.map (function (contacts,index) {
                return (
                  <tr>
                  <td><img className="picture" src={contacts.pictureUrl}/></td>
                  <td>{contacts.name}</td>
                  <td>{contacts.popularity}</td>
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
