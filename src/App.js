import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandom = (contact, event) => {
    const copy = [...this.state.contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    copy.push(randomContact);
    this.setState({
      contacts: copy,
    });
  }


  render() {
    return (
      <div className="App" >
        <h1> IRONCONTACTS </h1>
        <button onClick={this.addRandom}>Add random</button>
        {this.state.contacts.map((contact => {
          return (
            <div key={contact.id}>
              <td>
                <img src={contact.pictureUrl} />
              </td>
              <td> Name: {contact.name}</td>
              <td> Popularity: {contact.popularity}</td>
            </div>
          )
        }))}
      </div >
    );
  }
}

export default App;