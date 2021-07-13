import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json'
import Button from './Button';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      limitedList: contactList.filter((el, i) => i < 5)
    }
  }

  addContact = () => {
    let newContact;
    const newList = [...this.state.limitedList];

    do {
      newContact = this.getRandomContact();
    } while(newList.includes(newContact) && newList.length < contactList.length);

    newList.length < contactList.length && newList.push(newContact);

    this.setState({
      limitedList: [...newList]
    })
  }

  sortName = () => {
    const newList = [...this.state.limitedList];    

    this.setState({
      limitedList: newList.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  sortPopularity = () => {
    const newList = [...this.state.limitedList];

    this.setState({
      limitedList: newList.sort((a, b) => b.popularity - a.popularity)
    })
  }

  deleteContact = (id) => {
    this.setState({
      limitedList: this.state.limitedList.filter((el) => el.id !== id)
    })
  }

  getRandomContact = () => {
    let i = Math.floor(Math.random() * contactList.length);
    return contactList[i];
  }

  render = () =>
   (
      <>
        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {this.state.limitedList.map((el) =>
            <tr key={el.id}>
              <td><img src={el.pictureUrl} alt={el.name} /></td>
              <td>{el.name}</td>
              <td>{Math.round(el.popularity)}</td>
              <td><button onClick={() => this.deleteContact(el.id)}>Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </>
    )
}

export default App;
