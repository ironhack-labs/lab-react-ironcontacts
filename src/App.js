import React from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  
  state = {
    contactsList: contacts.slice(0, 5)
  };

  randomContact = () => {
    return contacts[Math.ceil(Math.random() * contacts.length)]
  }
  
  addRandomContact = () => {
    const newContactsList = [...this.state.contactsList]
    newContactsList.push(this.randomContact());

    this.setState({contactsList: newContactsList});
  }

  sortByName = () => {
    const copyOfContacts = [...this.state.contactsList]
    const sortedByName = copyOfContacts.sort((a,b) => {
      if(a.name > b.name){ 
        return 1;
      }else if(a.name < b.name){
        return -1;
      }
      return sortedByName;
    })
    this.setState({contactsList: sortedByName})
  }

  sortByPopularity = () => {
    const copyOfContacts = [...this.state.contactsList]
    const sortedByPopularity = copyOfContacts.sort((a,b) => {
      if(a.popularity > b.popularity){
        return -1;
      }else if(a.popularity < b.popularity){
        return 1;
      }
      return sortedByPopularity;
    })

    this.setState({contactsList: sortedByPopularity})
  }

  deleteContact = (index) => {
    const copyOfContacts = [...this.state.contactsList]
    const deleteList = copyOfContacts.splice(index, 1)

    this.setState({contactsList: deleteList})
  }

  render() {
    return (
      <div className='App'>
        <h1>Ironhack Contacts</h1>
        <div className='buttons'>
          <button onClick={()=>this.addRandomContact()}>Add a Contact</button>
          <button onClick={()=>this.sortByName()}>Sort by Name</button>
          <button onClick={()=>this.sortByPopularity()}>Sort by Popularity</button>
        </div>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contactsList.map((contact, index)=> {
            return(
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={()=>this.deleteContact(index)}>Delete</button></td>
              </tr>
            );
          })}
        </table>        
      </div>
    )
  }
}
export default App;
