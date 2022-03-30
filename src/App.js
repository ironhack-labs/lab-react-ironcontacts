
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice( 0, 5 ),
    remainingContacts: contacts.slice(5)
  }

  addRandomContact = () => {
    const { remainingContacts } = this.state;
    const randomNumber = Math.floor( Math.random() * remainingContacts.length );
    const randomContact = remainingContacts.splice( randomNumber, 1 )[0];
    console.log(remainingContacts);
    this.setState(
      {
        contacts: [...this.state.contacts, randomContact],
        remainingContacts: remainingContacts
      }
    )
  }

  render (){
    const listContacts = this.state.contacts.map( (contact) => {
      const { id, pictureUrl, name, popularity, wonOscar, wonEmmy } = contact;
      return (
        <tr key={id} >
          <td><img className="picture" src={pictureUrl} alt={name} /></td>
          <td>{name}</td>
          <td>{Math.round(popularity*10)/10}</td>
          <td>{wonOscar && <FontAwesomeIcon icon={faTrophy} />}</td>
          <td>{wonEmmy && <FontAwesomeIcon icon={faTrophy} />}</td>
        </tr>
      )
    });
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            { listContacts }
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default App;
