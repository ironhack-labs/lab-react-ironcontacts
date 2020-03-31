import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';

// let fiveContacts =contacts.splice(0,5);
// console.log(fiveContacts);
class App extends Component {
  state={
    contacts : contacts.splice(0,5)
  }

  randomContacts = () => {
    
    let inContacts = true;
    while (inContacts){
      let newConRandom = contacts.splice([Math.floor(Math.random()*contacts.length)],1);
      if (this.state.contacts.indexOf(newConRandom) ===-1){
        let newContacts = this.state.contacts.concat(newConRandom);
        this.setState({
          contacts: newContacts
        })
        inContacts=false;
      }
    }
  }
  
  sortName = () =>{
    const sortContacts = this.state.contacts.sort((a,b) => { return a['name'].localeCompare(b['name'])});
    this.setState({
      contacts: sortContacts
    })
    // console.log(sortContacts)
  }
  sortPopularity = () =>{
    const sortPopularity = this.state.contacts.sort((a,b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortPopularity
    })
    // console.log(sortPopu)
  }

  delContact=(id) =>{
    const oldContacts = [...this.state.contacts];
    let fOContacts = oldContacts.filter(contact => contact.id !==  id)
    this.setState({
      contacts: fOContacts
    })
  }



  render() {
    // console.log(this.state.contacts);
    return (
      <div>
        <h1>Iron contacts</h1>
        <button onClick={this.randomContacts}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by Popularity</button>
        {this.state.contacts.map(contacts =>{
            return <div >
              <table width='400px'>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                </tr>
                <tr key={contacts.id}>
                  <td><img height='90px'  src={contacts.pictureUrl} alt=''/></td>
                  <td><h3>{contacts.name}</h3></td>
                  <td><h3>{contacts.popularity}</h3></td>
                  <td><h3><button onClick={() => this.delContact(contacts.id)}>Delete</button></h3></td>
                </tr>
          
              </table>
            </div>
            
          })
        }
      </div>
    );
  }
}

export default App;
