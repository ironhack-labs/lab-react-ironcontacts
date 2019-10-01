import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'







class App extends Component {

  state = {
    contactsArray: contacts.splice(0,5), //[contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    allContacts: contacts,
  }
  


  
  getTableInfo = () => {
    let contactsInfo = this.state.contactsArray.map((eachContact, i) => {
      return <tr key={i}>
        <td><img src={eachContact.pictureUrl} alt='contacts img'/></td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
        <td><button onClick={()=>this.deleteContact(i)}>Delete</button></td>
      </tr>
    })
    return contactsInfo;
  }
 


  deleteContact = (key) => {

    let deleted = this.state.contactsArray.splice(key, 1);
    this.state.allContacts.push(deleted);

    this.setState({
      contactsArray: this.state.contactsArray,
      allContacts: this.state.allContacts
    })

  }


  addRandomContact = () =>{

    let randomIndex = Math.floor(Math.random()*(contacts.length));
    let newContact = this.state.allContacts.splice(randomIndex, 1);
    this.state.contactsArray.push(newContact[0]);
 
    this.setState({
      contactsArray: this.state.contactsArray,
      allContacts: this.state.allContacts
    })
  }




  sortByName = () => {
    this.state.contactsArray.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({
      contactsArray: this.state.contactsArray
    })
  }



  sortByPopularity = () => {
    this.state.contactsArray.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1);
    this.setState({
      contactsArray: this.state.contactsArray
    })
  }


  render() {

    return (
      <div className="App">
        <h1>IronContacts</h1>


        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>


        <table className='contactsTable'>
        <tbody>
          <tr className='categories'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          
            {this.getTableInfo()}
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;
