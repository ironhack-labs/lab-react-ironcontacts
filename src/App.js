import { Component } from 'react';
import './App.scss';
import contacts from './contacts.json'; // Total: 52

class App extends Component {
  state =  {
    contacts: [...contacts].splice(0, 5), // first 5
    remainingContacts: [...contacts].splice(5, contacts.length) // other 47
  }

  randomContact = () => {
    const { contacts, remainingContacts } = this.state;
    const randomIndex = Math.floor(Math.random() * (remainingContacts.length - contacts.length + 1) + contacts.length);


    this.setState( {
        contacts: this.state.contacts.concat(remainingContacts[randomIndex])
    })

  }


  render() {
    const { contacts } = this.state;
    console.log(contacts)


    return (
      <div className="app wrapper">
  
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
  
        <div className="table">
          <table>
            <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won an Oscar</th>
                  <th>Won an Emmy</th>
                </tr>
            </thead>
            <tbody>
              {contacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy }, index) => {
                return <tr key={index} >
                  <td><img src={pictureUrl} className="table__img" alt="contact" /></td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  <td>{wonOscar ? '🏆' : ''}</td>
                  <td>{wonEmmy ? '⭐️' : ''}</td>
                </tr>
              })}
            </tbody> 
          </table>
  
  
        </div>
  
      </div>
    );
  }
  
}

export default App;
