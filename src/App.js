
import './App.css';
import React, { Component } from "react";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arrayContacts: contacts.slice(0, 5),
    };
  }

  addRandom() {
    let contactLength = contacts.length;
    let randomNumber = Math.floor(Math.random() * (contactLength - 5 + 1) + 5);
    let actual = this.state.arrayContacts;
    actual.push(contacts[randomNumber]);

    this.setState({
      arrayContacts: actual,
    });
  }

  sortByName() {
    let actual = this.state.arrayContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      arrayContacts: actual,
    });
  }
  sortByPopularity() {
    let actual = this.state.arrayContacts.sort((a, b) => (a.popularity > b.popularity ? -1 : 1));
    this.setState({
      arrayContacts: actual,
    });
  }

  removeActor(id){
     const actual = this.state.arrayContacts.filter(element => element.id !== id)
    this.setState({
      arrayContacts: actual,
    });
    }
   
    


  



  render() {
    return (
      <div className="App">
        <h1> IronContacts </h1>
        <button className="btn btn-info" onClick={() => this.addRandom()}>
          Add random Contact
        </button>
        <button className="btn btn-info" onClick={() => this.sortByName()}>
          Sort by name
        </button>
        <button className="btn btn-info" onClick={() => this.sortByPopularity()}>
          Sort by Popularity
        </button>

        <div className="table-actors">
          <table>
            <tr>
              <td>
                <strong>Picture</strong>
              </td>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                <strong>Popularity</strong>
              </td>
              <td>
                <strong>Action</strong>
              </td>
            </tr>

            {this.state.arrayContacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} alt=""></img>
                  </td>
                  <td>
                    <span>{contact.name}</span>
                  </td>
                  <td>
                    <span>{contact.popularity}</span>
                  </td>
                  <td>
                    <button className= "btn btn-danger"onClick={() => this.removeActor(contact.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}


export default App;
















// function App() {
//   return (
//     <div className="App">
//       <h1> IronContacts </h1>
//       <button >Add random Contact</button>
//       <List></List>
     
//     </div>
//   );
// }

