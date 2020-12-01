import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

  state = {
    contacts: contacts.splice(0, 5)
  }
  
  displayContacts = () =>{
    return this.state.contacts.map((contact, index)=>{
      return (
        <tr key={index}>
          <td> <img src={contact.pictureUrl} alt="" /></td>
          <td> {contact.name} </td>
          <td className="popularity"><span>{contact.popularity.toFixed(2)}</span></td>
          <td><button onClick={(_index)=>{
            this.deleteContact(_index)
          }
          }>
          Delete Contact 
          </button></td>
        </tr>
      )
    })
  };
  
  addRandomContact = ()=>{
    const copyOfContacts = [...this.state.contacts]
    const randomContact = Math.floor(Math.random() * (contacts.length))
    copyOfContacts.push(contacts[randomContact])
    if(!this.state.contacts.includes(contacts[randomContact])){
      this.setState({contacts: copyOfContacts})
    }
  }

  sortByName = ()=>{
    const copyOfContacts = [...this.state.contacts]
    copyOfContacts.sort((a,b)=>{
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({contacts: copyOfContacts})
  }

  sortByPopularity = ()=>{
    const copyOfContacts = [...this.state.contacts]
    copyOfContacts.sort((a,b)=>{
      return(b.popularity - a.popularity)
    })
    this.setState({contacts: copyOfContacts})
  }

  deleteContact = (_index)=>{
    const copyOfContacts = [...this.state.contacts]
    copyOfContacts.splice(_index, 1)
    this.setState({contacts: copyOfContacts})
  }

  render(){
    return (
      <div className="App">
        <div className="btn-container">
          <button onClick={()=>this.addRandomContact()}>Add random contact</button>
          <button onClick={()=>this.sortByName()}>Sort Name</button>
          <button onClick={()=>this.sortByPopularity()}>Sort Popularity</button>
        </div>
        <table>
          <thead className="titles">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th >Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
