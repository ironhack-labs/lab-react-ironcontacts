import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';
import _ from 'lodash';



class App extends Component {
  state = {
    contacts: contacts.slice(0,6)
  }


  addingRandomContact = () => {

let newArr = this.state.contacts;
let addRandom = contacts[Math.floor(Math.random() * contacts.length)];
console.log(addRandom)
newArr.push(addRandom) 
console.log(newArr)

this.setState ({

contacts:newArr
})

  }


  sortingName =() => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'name')
    })
  }

  sortingPopularity =() => {
    this.setState({
      contacts: _.sortBy(this.state.contacts, 'popularity').reverse()
    })
  }

  render() {
// let FirstFiveContacts = contacts.slice(0,6)

  
  return (
    <div>
{/* <table goes in here  */}
<header>
  <h1>IronContacts</h1>

  <button onClick={this.addingRandomContact}>Add random contact</button>
  <button onClick={this.sortingName}>Sort by name</button>
  <button onClick={this.sortingPopularity}>Sort by popularity</button>


</header>
<table>
  <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
 {this.state.contacts.map (contact => <Contact pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}></Contact>)}
</table>
    </div>
  )
};
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
