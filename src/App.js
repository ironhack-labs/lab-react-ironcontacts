import "./App.css";
import React from "react";
import contacts from "./contacts.json";


class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    let randomArray = Math.floor(Math.random() * (contacts.length -0)) + 0;  
    let newContact = contacts[randomArray];
    this.setState((previousState) => {
      return {
        contacts: previousState.contacts.concat(newContact)
      };
    });
  };

  render() { 
    const {contacts} = this.state;
    return (
      <div className="App">
      <button type="submit">Add Random Contact</button>
        <h1>Iron Contacts</h1>
        <table className="list">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {contacts.map((person, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <img className="picture" alt="portrait" src={person.pictureUrl}></img>
                  </td>
                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                </tr>
              </tbody>
            );
          })}
        </table>


      </div>
    );
  };
}
export default App;