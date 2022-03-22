import './App.css';
import contacts from "./contacts.json";
import { Component } from "react";
import TableOfCharacters from './Components/TableOfCharacters/TableOfCharacters';

class App extends Component {
  state = {
    contacts: contacts
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='ListedActors'>
         <TableOfCharacters contacts={ contacts } />
    
        </div>

      </div>
    );
  }
}
export default App;
