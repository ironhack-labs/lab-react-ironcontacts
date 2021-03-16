// import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import { Component } from 'react';

class Contacts extends Component {



  
  state = {

    contacts: contactsJSON,
    fiveContacts: contactsJSON.slice(0,5)

  }

// fiveContacts = () => {
//   const fiveContacts = this.state.contacts.slice(0,5);
//   return fiveContacts
// }

  handleAddContact = () => {
    // const randomContact = this.state.contacts[Math.floor(Math.random() * Math.floor(this.state.contacts.length))];



    const copyContacts = [...this.state.contacts]
    // console.log(copyContacts)
    const randomNumber = Math.floor(Math.random() * Math.floor(copyContacts.length));
    const randomContact = copyContacts[randomNumber]


    // const randomContact = this.state.copyContacts[randomNumber];


   const addContact = this.state.fiveContacts.push(randomContact)


   this.setState({ fiveContacts: [...this.state.fiveContacts ] });

    // this.setState({ contacts: copyContacts })
// console.log("copyContact", copyContacts)

console.log(this.state.fiveContacts)

    console.log(addContact)
    // console.log(randomNumber)
    // console.log(copyContacts)
   
    
    // console.log(randomContact)

    // this.setState({contacts : contacts.push({randomContact})})

    };


    sortByName = () => {

      const sortName = this.state.fiveContacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

      console.log(sortName)

      this.setState({ fiveContacts: sortName });

    }

    sortByPopularity = () => {

      const sortPopularity = this.state.fiveContacts.sort((a,b) => (b.popularity > a.popularity) ? 1 : ((a.popularity > b.popularity) ? -1 : 0))

      console.log(sortPopularity)

      this.setState({ fiveContacts: sortPopularity });

    }

    handleDelete(contactToDeleteIndex) {
      const copyfiveContacts = [...this.state.fiveContacts];

      copyfiveContacts.splice(contactToDeleteIndex, 1);
  
      this.setState({ fiveContacts: copyfiveContacts });
    }

  render() {
    return  (
      <div className="Contacts">
        <button onClick={this.handleAddContact}>Add Random Contact</button><button onClick={this.sortByName}>Sort by name</button><button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table> 
        <thead>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
  </thead>
  <tbody> 
        {this.state.fiveContacts.map((contact, index) =>
  <tr key={index}>
    <td><img width="100px" src={contact['pictureUrl']}></img> </td>
    <td>{contact["name"]}</td>
    <td>{contact["popularity"]}</td>
    <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
  </tr>
  )}
  </tbody>     
</table>
 </div>
        
      )
  }
}

// console.log(contactsJSON)

function App() {
  return (
    <div className="App">
      <Contacts />
    </div>
  );
}

export default App;
