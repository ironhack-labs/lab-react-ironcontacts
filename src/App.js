import React from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  state={
    contacts: contacts.slice(0, 5),
  };

  //random formula:
  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  

  render() {
    return (
      <div className="App" >
      <h1>IronContacts</h1>

      {/* Random-iteracion2 */}

      <button
          onClick={() => this.addRandomContact(contacts)}
          key={contacts.id}
        >
          Add Random Contact
        </button>

<table className="table">
          <thead>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </thead>
         </table> 
         <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={contact.pictureUrl} alt=""></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                </tr>
              );
            })};
                </tbody>  
      </div>
    );
  }
}

export default App;