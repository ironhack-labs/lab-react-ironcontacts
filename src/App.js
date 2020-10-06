import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
    fiveContacts : contacts.slice(0,5)
  }

  ContactsArray = ({picture, name, popularity, key}) => {
    return (
      <tr key={key}>
        <td>
          <img class="celeb-pic" src={picture} alt={name} />
        </td>
        <td>{name}</td>
        <td>{popularity}</td>
      </tr>
    )
  }

  randomContact = () => {
    let i = Math.floor(Math.random() * contacts.length);
    this.setState({
      fiveContacts: [...this.state.fiveContacts, contacts[i]]
    })
  }
  


  render() {

    return (
      <div className="App">
      <h1>Iron Contacts</h1>
        <button id="btn-random" onClick={this.randomContact}>Add random Contact</button>
        <table id="contact-table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
          <tbody>
            {this.state.fiveContacts.map((contact,i) => 
              
                <this.ContactsArray key={i} picture={contact.pictureUrl} name ={contact.name} popularity={contact.popularity.toFixed(2)} />
              
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
