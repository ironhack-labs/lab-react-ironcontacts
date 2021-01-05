import React from 'react';
import './App.css';
import contacts from './contacts.json';


export default class App extends React.Component {

  state = {
    contacts : contacts.slice(0, 5),
  }

  addRandomContact = () => {
    let randomActor = contacts[Math.floor(Math.random() * contacts.length)] 
    this.setState(() => {
     return {contacts : [...this.state.contacts, randomActor]}
    })
    // this.setState((state) => {
    //   return {contacts : [...state.contacts, random]}
    //  })
  }

  sortByName = () => {
    let alphaName = [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))
    this.setState(() => {
      return {contacts: alphaName}
    })
  }

  sortByPopularity = () => {
    let mostPopular = [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
    this.setState(() => {
      return {contacts: mostPopular}
    })
  }

  removeContact = (index) => {
    const copy = [...this.state.contacts];
    copy.splice(index, 1);
    this.setState({
      contacts: copy,
    });
  }

  render() {
    return (
    
    <div className="App" >
      <h3>IronContacts</h3>
      <div >
      { 
          this.state.contacts.map((randomContact) => { 
            return (
              <div key={randomContact.id}>
              {/* <button  onClick={() => this.addRandomContact()}>Add Random actor</button>
              <button>Sort by popularity</button>
              <button>Sort by name</button> */}
              </div>
            )
          })
      }
      </div>
          <button  onClick={() => this.addRandomContact()}>Add Random actor</button>
          <button onClick={() => this.sortByPopularity()} >Sort by popularity</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>


        <table>
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        </thead>

        <tbody>
        { this.state.contacts.map((contact) => {

          return (

            <tr key={contact.id}>
             <td><img style={{width: '150px', height: '150px'}} src={contact.pictureUrl} alt=""/></td>
             <td>{contact.name}</td>
             <td>{contact.popularity.toFixed(2)}</td>
             <button onClick={() => this.removeContact()}>Delete</button>
            </tr>  
          )
        }     
         )}
        </tbody>
        </table>
      </div>
    );
  }
}
  
  
