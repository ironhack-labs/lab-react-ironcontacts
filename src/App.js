import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';


class App extends React.Component {
  state={
    contactList: contacts.slice(0,5)
  }
  render(){
    const fiveContacts=this.state.contactList.map((contact,index)=>(
     <tr key={index}>
       <td> <img src={contact.pictureUrl} alt=""/> </td>
       <td>{contact.name}</td>
       <td>{contact.popularity.toFixed(2)}</td>
     </tr>
    ))
    const addRandom=(()=>{
      let num = Math.floor(Math.random()*(contacts.length-6)+6)
      let copyOfState={...this.state}
      copyOfState.contactList.push(contacts[num])  
      this.setState(copyOfState)
    })
     return (
    <div className="App">
      <header className="App-header">
      <table className="actors">
            <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            </thead>
              <tbody>
                {fiveContacts}
              </tbody>
            
          </table>
      </header>
      <button onClick={()=>{addRandom()}}>Add Random Actor</button>
    </div>
  );
  }
 
}

export default App;
