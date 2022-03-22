import { Component } from 'react';
import './App.scss';
import contacts from './contacts.json'; // Total: 52

class App extends Component {
  state =  {
    contacts: [...contacts].splice(0, 5), // first 5
    remainingContacts: [...contacts].splice(5, contacts.length), // other 47
    sort: ''
  }

  randomContact = () => {
    const { contacts, remainingContacts } = this.state;
    const randomIndex = Math.floor(Math.random() * (remainingContacts.length - contacts.length + 1) + contacts.length);

    this.setState({
        contacts: this.state.contacts.concat(remainingContacts[randomIndex])
    })
  }

  handleSortBy = (event) => {
    const { name } = event.target;
    console.log(`the name of envent.targer is ${name}`)

    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortContacts = () => {
    const { contacts, sort } = this.state;

    if (sort === 'name') {
      return contacts.sort((a, b) => {
        if (a.name < b.name) return -1
        if (b.name < a.name) return 1
        return 0
      })
    }

    if (sort === 'popularity') {
      return contacts.sort((a, b) => {
        if (a.popularity < b.popularity) return 1
        if (b.popularity < a.popularity) return -1
        return 0
      })
    }
  }


  render() {
    const { contacts } = this.state;
    const contactsSort = this.sortContacts();

    return (
      <div className="app wrapper">
  
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>        
        <button name="name" onClick={this.handleSortBy}>Sort by name</button>
        <button name="popularity" onClick={this.handleSortBy}>Sort by popularity</button>
  
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
