import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";

let fiveContacts = contacts.slice(0, 5);
console.log(fiveContacts[0].name);
//let newContact = contacts[Math.floor(Math.random()*contacts.length)];
//console.log('checking new random contact:', newContact);
//let sortTest = fiveContacts.sort((a, b) => a.name.localeCompare(b.name))
//console.log('1st checking sorting:', sortTest)
//let sortTestPop = fiveContacts.sort((a, b) => b.popularity - a.popularity)
//console.log('2nd checking sorting by popularity:', sortTestPop)

class App extends Component {

  state = {
    contactList: fiveContacts,
    sortName: false,
    sortPopularity: false,
  }

  addContact = () => {
    this.setState(state => {
      //let updatedContacts = contacts.filter((contact) => contact.id !== state.contactList.id)
      //let newContact = updatedContacts[Math.floor(Math.random()*updatedContacts.length)];
      let newContact = contacts[Math.floor(Math.random()*contacts.length)];
      return {
        contactList: [...state.contactList, newContact]
      }
    })
  }

  sortNameHandler = () => {
    this.setState(state => {
      return {
        sortName: state.contactList.sort((a, b) => a.name.localeCompare(b.name))}
    })
  }

  sortPopHandler = () => {
    this.setState(state => {
      return {
        sortPopularity: state.contactList.sort((a, b) => b.popularity - a.popularity)
      }
    })
  }

  deleteHandler = (id) => {
    //let contactAftDelete = this.state.contactList.filter((contact) => contact.id !== id); --it is better to do it in setState, rather than outside, as you can access
    //filter generates a new array
    this.setState(state => {
      return {
        contactList: state.contactList.filter((contact) => contact.id !== id)
      }
    })
  }


  render() {return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addContact}>Add Random Contact</button>
      <button onClick={this.sortNameHandler}>Sort by name</button>
      <button onClick={this.sortPopHandler}>Sort by popularity</button>



      <table>
        <tbody>
         <tr>
          <td> Picture</td>
          <td> Name</td>
          <td> Popularity</td>
          <td> Action</td>

         </tr>

  {this.state.contactList.map((contact =>
        <tr key={contact.id}>
         <td><img src={contact.pictureUrl} alt={contact.name} /></td>
         <td>{contact.name}</td>
         <td>{contact.popularity}</td>
         <td><button onClick={() => {this.deleteHandler(contact.id)}}>Delete</button></td>

        </tr>))}
       </tbody>
     </table>
    </div>
  );
  }
}

export default App;
