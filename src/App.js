import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    shortList: contacts.slice(0,5),
  };

  addRandom() {
    const contactsCopy = [...this.state.shortList];
    const newRandom = contacts[Math.floor(Math.random() * contacts.length)]

    contactsCopy.push(newRandom);

    this.setState({
      shortList: contactsCopy
    })

  };
  

  render() {
        return(
        <div className="App">
          <h1>IronContacts</h1>
          <button onClick={() => this.addRandom()}>Add Random</button>
          <table>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.shortList.map((contact) => {
            return (
            <tr key={contact.id} {...contact}>
              <td><img src={contact.pictureUrl} alt="" height="150" /></td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity)}</td>
            </tr>
          )
          })}
          </table>
          
        </div>
        )
      };
}


// function App() {
  

//   return (
//     <div className="App">
//     <h1>IronContacts</h1>
//     <table>
//       <tr>
//       <th>Picture</th>
//       <th>Name</th>
//       <th>Popularity</th>
//     </tr>
//     <tr>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     </table>
      
//     </div>
//   );
// }

export default App;
