import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

const contactsArr = [...contacts].slice(0, 5);

class Contacts extends React.Component {
  state = {
    contacts: contactsArr,
  };

  addContacts = () => {
    console.log('toto');
    const copycontactsArr = [...this.state.contacts];
    console.log(copycontactsArr);
    copycontactsArr.push(
      contacts[Math.floor(Math.random() * Math.floor(contacts.length))]
    );
    console.log(copycontactsArr);
    this.setState({ contacts: copycontactsArr });
  };

  sortContacts = () => {
    const copycontactsArr = [...this.state.contacts];
    console.log(copycontactsArr);
    copycontactsArr.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: copycontactsArr });
  };

  sortPopularity = () => {
    const copycontactsArr = [...this.state.contacts];
    console.log(copycontactsArr);
    copycontactsArr.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contacts: copycontactsArr });
  };

  delete = (i) => {
    this.setState({
      contacts: this.state.contacts.filter((contacts, index) => {
        return index !== i;
      }),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContacts}>Add Random Contact</button>
        <button onClick={this.sortContacts}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((item, i) => (
              <tr key={i}>
                <td>
                  <img src={item.pictureUrl} alt="" style={{ height: '30%' }} />
                </td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                <td>
                  <button onClick={(event) => this.delete(i)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Contacts />
    </div>
  );
}

export default App;
