import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class DisplayContacts extends React.Component {
  ///

  state = {
    contacts: contacts.slice(0, 5),
  };

  ///

  addContact = () => {
    var randomContact = [Math.floor(Math.random() * contacts.length)];
    console.log(contacts[randomContact]);
    let copy = [...this.state.contacts];
    copy.push(contacts[randomContact]);
    this.setState({
      contacts: copy,
    });
  };
  ////

  sortName = () => {
    let copy = [...this.state.contacts];
    var sortedCopy = copy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortedCopy,
    });
  };

  ////

  sortPop = () => {
    let copy = [...this.state.contacts];
    var sortedCopy = copy.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortedCopy,
    });
  };

  ///

  removeContact = (i) => {
    this.setState({
      contacts: this.state.contacts.filter((contact, index) => {
        return index !== i;
      }),
      })
    };

////

  render() {
    return (
      <table>
        <tbody>
          <button onClick={this.addContact}>Add random contact</button>
          <button onClick={this.sortName}>Sort by name</button>
          <button onClick={this.sortPop}>Sort by popularity</button>

          {this.state.contacts.map((contact, i) => (
            
            <tr className="ContactRow">
              <td class="picture">
                <img src={contact.pictureUrl} />
              </td>

              <td class="name">
                <p>{contact.name}</p>
              </td>

              <td class="popularity">
                <p>{contact.popularity}</p>
              </td>
              <td>
              <button onClick={(event) => this.removeContact(i)}>Delete</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
///

/////

function App() {
  return (
    <div className="App">
      <h1> Iron Contacts </h1>
      <DisplayContacts />
    </div>
  );
}

export default App;
