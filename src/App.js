import React from 'react';
import './App.css';
import contacts from './contacts.json';

class Table extends React.Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContactHandler = () => {
    const contactsUnShown = contacts.filter( contact => !(this.state.contacts).includes(contact));
    const newContact = contactsUnShown[Math.floor(Math.random() * contactsUnShown.length)];

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });

  }

  render = () => {
    return (
      <>
        <AddRandomContactBtn clickToAdd={() => this.addRandomContactHandler()} />
        <table>
          <thead>
            <tr>
              <td>
                Picture
              </td>
              <td>
                Name
              </td>
              <td>
                Popularity
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => {
              return (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>
            )})}
          </tbody>
        </table>
      </>
    )
  }
}

function AddRandomContactBtn(props) {
  return (
    <button onClick={props.clickToAdd}>Add Random Concact</button>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <h1>IronContacts</h1>
        <Table />
      </div>
    );
  }
}

export default App;