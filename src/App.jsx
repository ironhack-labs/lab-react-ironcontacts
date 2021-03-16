import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import React, { Component } from 'react' ;
import { v4 as uuidv4 } from 'uuid';


class App extends Component {

  state = {
    contacts: contactsJSON.slice(0,5)
  }

  handleCreateActor = () => {
    const spreadContacts = [...contactsJSON] ;
    const nonUseConstacts = spreadContacts.filter(contact => {return (!this.state.contacts.map(contact => contact.id).includes(contact.id))})
    console.log(nonUseConstacts)

    if(nonUseConstacts.length > 0) {
      this.setState(
        {
          contacts: [...this.state.contacts, nonUseConstacts[Math.floor(Math.random()*nonUseConstacts.length)]]
        }
      )
    } else {
      this.setState(
        {
          contacts: [...this.state.contacts]
        }
      )
    }

  }

  handleSortByName = () => {
    const spreadContacts = [...this.state.contacts] ;
    spreadContacts.sort((c1, c2) => c1.name < c2.name ? -1 : 1)
    this.setState(
      {
        contacts: spreadContacts
      }
    )
  }

  handleSortPopularity = () => {
    const spreadContacts = [...this.state.contacts] ;
    spreadContacts.sort((c1, c2) => c2.popularity - c1.popularity)
    this.setState(
      {
        contacts: spreadContacts
      }
    )
  }

  handelDelete = id => {
    const spreadContacts = [...this.state.contacts] ;
    this.setState({contacts: spreadContacts.filter(contact => contact.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <h1>Iron contact</h1>
        <button onClick={this.handleCreateActor}>Add random contact</button>
        <button onClick={this.handleSortByName}>Sort by name</button>
        <button onClick={this.handleSortPopularity}>Sort by popularity</button>
        <table>
          <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>delete</th>
              </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map(contact => {
                return(
                <tr className="portrait" key={contact.id}>
                    <td><img src={contact.pictureUrl} alt="toto"/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={() => this.handelDelete(contact.id)}>Adieu {contact.name}</button></td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <h1>Iron contact</h1>
//       <table>
//         <thead>
//             <tr>
//                 <th>Picture</th>
//                 <th>Name</th>
//                 <th>Popularity</th>

//             </tr>
//         </thead>
//         <tbody>
//           {
//             contacts.map(contact => {
//               return(
//               <tr className="portrait" key={contact.name}>
//                   <td><img src={contact.pictureUrl} alt="toto"/></td>
//                   <td>{contact.name}</td>
//                   <td>{contact.popularity}</td>
//               </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }

