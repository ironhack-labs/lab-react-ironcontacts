// import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import React, {Component} from 'react';

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
  class App extends Component {
    state = {
      contactsFive: contacts.slice(0,5)
    }
  
    addRandom = () => {
      const copyFive = [...this.state.contactsFive]
      const random = contacts[Math.floor(Math.random()*contacts.length)]
      if(!copyFive.includes(random)){
        copyFive.push(random)
      }
      this.setState({
        contactsFive: copyFive
      })
  }
  
  sortName = () => {
    const copyFive = [...this.state.contactsFive]
    copyFive.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  
    this.setState({
      contactsFive: copyFive
    })
  }
  
  sortPopularity = () => {
    const copyFive = [...this.state.contactsFive]
    copyFive.sort(function(a, b){
      if(a.popularity > b.popularity) { return -1; }
      if(a.popularity < b.popularity) { return 1; }
      return 0;
  })
  
    this.setState({
      contactsFive: copyFive
    })
  }
  
  deleteContact = (contactIndex) => {
    const removeContact = this.state.contactsFive.filter(contact => contact.id !== contactIndex)
    this.setState({
      contactsFive: removeContact,
    });
  };
  
    render(){
  
      return (
        <div className="App">
                    <h1>IronContacts</h1>
                <div>
                    <button onClick={() => this.addRandom()}>
                        Add another contact
                    </button>
                    <button onClick={() => this.sortName()}>
                        Sort by name
                    </button>
                    <button onClick={() => this.sortPopularity()}>
                        Sort by popularity
                    </button>
                </div>
          <div className="top">
                    <h3>Picture</h3>
                    <h3>Name</h3>
                    <h3>Popularity</h3>
          </div>
            {this.state.contactsFive.map(oneContact => {
            return (
                <div className="contact">
                    <img src={oneContact.pictureUrl} alt="" style={{width: 100}}></img>
                    <p>{oneContact.name}</p>
                    <p>{oneContact.popularity}</p>
                    <button onClick={() => this.deleteContact(oneContact.id)}>
                        Delete this contact
                    </button>
                </div>  
            );
          })}
  
  
        </div>
      );
    }
  }


export default App;
