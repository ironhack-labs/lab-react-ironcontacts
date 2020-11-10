import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json'

let arrContacts = [...contacts.slice(5)];

const getRandomInt = max => Math.floor(Math.random() * max)
const sortName = (a, b) => a.name < b.name? -1 : a.name > b.name? 1 : 0;
const sortPop = (a, b) => b.popularity - a.popularity;

class App extends Component {
  state = {contacts:[...contacts.slice(0, 5)]};

  addRandom(){
    let index = getRandomInt(arrContacts.length-1);
    let newContact = arrContacts[index];
    arrContacts.splice(index,1);
    console.log(arrContacts)
    this.setState(state=> ({contacts:[...state.contacts, newContact]}))
  }
  sortName(){
    let sorted = [...this.state.contacts].sort((a, b) => sortName(a,b));
    this.setState({contacts:[...sorted]})
  }

  sortPopularity(){
    let sorted = [...this.state.contacts].sort((a, b) => sortPop(a,b));
    this.setState({contacts:[...sorted]})
  }

  delete(id){
    let filtered = this.state.contacts.filter(contact=> contact.id !== id)
    this.setState({contacts:[...filtered]})
  }

  render(){
  return (
    <div className="App">
        <h1>IronContacts</h1>
        <button onClick={()=>this.addRandom()}>Add random contact</button>
        <button onClick={()=>this.sortName()}>Sort by name</button>
        <button onClick={()=>this.sortPopularity()}>Sort by popularity</button>
        <table> 
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>action</th>
        </tr>
      {this.state.contacts.map(contact=>
        <tr key={contact.id}>
          <td><img className='contact-img' src={contact.pictureUrl} alt={contact.name} /></td>
          <td><p>{contact.name}</p></td>
          <td><p>{contact.popularity.toFixed(2)}</p></td>
          <td><button onClick={()=>this.delete(contact.id)}>Delete</button></td>
        </tr>
      )}
        </table>
    </div>
  );
  }
}

export default App;
