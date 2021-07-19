import React from 'react';
import './App.css';
import contacts from "./contacts.json";


class App extends React.Component {
  state = {
    contactOriginal: contacts,
    contactsArr: contacts.splice(0,5)
  }

  handleAddNewContact = () => {
    const newArray = [...this.state.contactsArr];
    const randomContact = this.state.contactOriginal[Math.floor(Math.random()*this.state.contactOriginal.length)];
    newArray.push(randomContact);
    this.setState ({
      contactsArr: newArray
    });
  };

  handleSortByName = () => {
    const arrayCopy = [...this.state.contactsArr];
    arrayCopy.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    this.setState ({
      contactsArr: arrayCopy
    });
  };

  handleDelete = (id) => {
    const arrCopy = [...this.state.contactsArr];
    const index = arrCopy.findIndex((el) => el.id === id);
    arrCopy.splice(index, 1);
    this.setState ({
      contactsArr: arrCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={()=>{this.handleAddNewContact()}}>Add Random Contact</button>
        <button onClick={()=>{this.handleSortByName()}}>Sort by Name</button>
        <button>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>  
          </thead>
          <tbody>
             {this.state.contactsArr.map((contact) => <>
             <tr key={contact.id}>
               <td><img id="stars" src={contact.pictureUrl} alt=''/></td>
               <td>{contact.name}</td>
               <td>{contact.popularity}</td>
               <button id="delete-btn" onClick={() => {this.handleDelete(contact.id)}}>Delete</button>
             </tr>
             
             </>)}     
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
