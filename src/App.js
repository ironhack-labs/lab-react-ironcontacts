import {Component} from 'react';
import './App.css';
import contacts from "./contacts.json";
const firstContacts = contacts.slice(0,5);
class App extends Component {
  state = {
    ironContacts: firstContacts
  }
  addRandomContact = () => {
    let newContact = '';
    const randomIndex = Math.floor(Math.random() * contacts.length -1)
    newContact = contacts[randomIndex]
    this.setState(state => {
      return {
        ironContacts: [...state.ironContacts, newContact]
      }
    })
  }
  deleteContact(index){
    let copy = [...this.state.ironContacts]
    copy.splice(index, 1)
    this.setState(state => ({
      ironContacts: [...copy]
      }));
    }


  sortByName = () => {
    const sortedContacts = this.state.ironContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState(state => {
      return {
        sortedContacts
      }
    // this.setState(state => {
    //   return {
    //     ironContacts: sortedContacts
    //   }
    // })
  
  })}

  sortByPopularity = () => {
    const sortedContacts = this.state.ironContacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0))
    this.setState(() => {
      return {
        sortedContacts
      }
    // this.setState(state => {
    //   return {
    //     ironContacts: sortedContacts
    //   }
    // })
  
  })}


  render() {
    const contactList = this.state.ironContacts.map((contact, index)  => {
        return (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width='50'/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>
                <button onClick={() => this.deleteContact(index)}>delete</button>
              </td>
            </tr>
          )
      });
    return (
      <>
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>
              Picture
            </th>
            <th>
              Name
            </th>
            <th>
              Popularity
            </th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
      </>
    );
  }
}
export default App;