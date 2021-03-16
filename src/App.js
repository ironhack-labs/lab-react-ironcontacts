import logo from "./logo.svg";
import "./App.css";
import contactsJson from "./contacts.json";
import React, { Component } from "react";

let initialContacts = [];
for (let i = 0; i < 5; i++) {
  initialContacts.push(contactsJson[i]);
}

class Contacts extends Component {
  state = {
    contacts: initialContacts,
  };

  HandleRemove=(index)=>{
    console.log(index)
    const copyContacts = [...this.state.contacts];
    copyContacts.splice(index, 1);
    this.setState({ contacts: copyContacts });
  }
  Handleclick = () => {
    let newActor = {
      name: "Oscar Matton",
      pictureUrl:
        "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      popularity: 16.096436,
      id: "fdoscar-1c9f-4ad8-8a03-45f93b630aa1",
    };
    this.setState({ contacts: [newActor, ...this.state.contacts] });
  };

  SortByName=()=>{

    const copyContacts = [...this.state.contacts];
    copyContacts.sort(function compare(a, b) {
      const contactA = a.name.toUpperCase();
      const contactB = b.name.toUpperCase();
    
      let comparison = 0;
      if (contactA > contactB) {
        comparison = 1;
      } else if (contactA < contactB) {
        comparison = -1;
      }
      return comparison;
    }
    )
    this.setState({ contacts: copyContacts });


  }
  SortByPopularity=()=>{
    console.log('coucou')
    const copyContacts = [...this.state.contacts];
    copyContacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    })
    this.setState({ contacts: copyContacts });

  }

  render() {
    return (
      <div>
        <button onClick={this.Handleclick}>Add a contact</button>
        <button onClick={this.SortByName}>Sort by name</button>
        <button onClick={this.SortByPopularity}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>picture</th>
              <th>name</th>
              <th>popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="img-contact"
                      src={contact.pictureUrl}
                      alt=""
                    ></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={()=>this.HandleRemove(index)}>remove</button></td>
                  

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//Cette destructuration ne fonctionne pas
// const {contact1, contact2, contact3, contact4, contact5, ...rest} = contactsJson;
// const initialContacts = [contact1, contact2, contact3, contact4, contact5]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Contacts />
    </div>
  );
}

export default App;
