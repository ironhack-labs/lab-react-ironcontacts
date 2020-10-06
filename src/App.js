import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
    fiveContacts : contacts.slice(0,5)
  }

  ContactsArray = (props) => {
    return (
      <tr key={props.key}>
        <td>
          <img class="celeb-pic" src={props.pictureUrl} alt={props.name} />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td><button onClick={props.clickToDelete} class="btn delete">Delete</button></td>
      </tr>
    )
  }

  randomContact = () => {
    let i = Math.floor(Math.random() * contacts.length);
    this.setState({
      fiveContacts: [...this.state.fiveContacts, contacts[i]]
    })
  }

  sortNames = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a,b) => {return a.name.localeCompare(b.name)})
    })
  }
  
  sortPopular = () => {
    this.setState({
      fiveContacts: this.state.fiveContacts.sort((a,b) => {return a.popularity > b.popularity ? -1 : 1})
    })
  }

  deleteItem = (index) => {
    
    this.setState({
      fiveContacts: this.state.fiveContacts.splice((index, 1))
    })
  }


  render() {

    return (
      <div className="App">
      <h1>Iron Contacts</h1>
        <button class="btn" onClick={this.randomContact}>Add random Contact</button>
        <button class="btn" onClick={this.sortNames}>Sort By Name</button>
        <button class="btn" onClick={this.sortPopular}>Sort By Popularity</button>
        <table id="contact-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Delete</th>
          </tr>
        </thead>
          <tbody>
            {this.state.fiveContacts.map((contact,i) => 
              
               {return <this.ContactsArray key={i} {...contact} clickToDelete={() => this.deleteItem(i)} />}
              
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
