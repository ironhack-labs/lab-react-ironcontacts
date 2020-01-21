import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';

class App extends Component {

  constructor(props) {
    super(props)
  

  this.state = {
    fiveContacts: contacts.slice(0,5)
    }
  }

  render() {
    let keysArr =  Object.keys(this.state.fiveContacts[0]);
    let imgUrl = keysArr.splice(1,1);
    
    keysArr.unshift(...imgUrl);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">IronContacts</h1>
      </header>
      
      <div className="divTable">
      <table>
  <thead>
  <tr> 
   {keysArr.map((keys, idx) => <th key={idx}>{keys}</th>)} 
  </tr>
  </thead>
      <tbody>
  
  { this.state.fiveContacts.map((oneContact, idx) => {
    return (
    <tr>
      <td key={idx} name={oneContact.pictureUrl}>
      <img style={{width: "100px"}} src={oneContact.pictureUrl}></img>  
      </td>
      <td key={idx} name={oneContact.name}>{oneContact.name}</td>
      <td key={idx} name={oneContact.popularity}>{oneContact.popularity}</td>
      <td key={idx} name={oneContact.id} hidden >{oneContact.id}</td>
    </tr>
  
    )
  })}
  
  
      </tbody>
      </table>
      </div>
  
    </div>
  );
  }
  }

  // render() {
  //   let contactsArr = [];
  //   for (let i = 0; i )
  //   return (
  //     <div className="App">
  //       <ContactsTable />
  //     </div>
  //   );
  // }
// }

export default App;


  
