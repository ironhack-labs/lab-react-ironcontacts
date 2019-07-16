import React, { Component } from "react";
import "./App.css";
import TableRow from "./TableRow";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [...contacts].slice(0, 5)
    };
  }

  addRandom() {
    let jojo = [...contacts].filter(
      celeb =>
        this.state.persons
          .map(sortCeleb => sortCeleb.name)
          .indexOf(celeb.name) === -1
    );

    let selectJojo = jojo[Math.floor(Math.random() * jojo.length)];

    this.state.persons.push(selectJojo);

    this.setState({ ...this.state });
  }

  sortName() {
    this.state.persons.sort((a, b) => {
      
      if(a.name < b.name)  {return -1}

      if(a.name > b.name) {return 1}

      return 0
  
    });

    this.setState({ ...this.state});
  }

  sortPopularity() {
    this.state.persons.sort((a, b) => {
      
      if(a.popularity < b.popularity)  {return 1}

      if(a.popularity > b.popularity) {return -1}

      return 0
  
    });

    this.setState({ ...this.state});
  }

  deleteElement(personName) {
    this.setState({
      persons: this.state.persons.filter( person => person.name !== personName)
    })
  }


  render() {
    return (
      <div className="container-table">
        <table className="table">
          <tbody>
            <tr>
              <th colSpan="4">IronContacts</th>
            </tr>
            <tr>
              <td colSpan="4" className="buttons">
                <button onClick={() => this.addRandom()}>
                  Add Random Contact
                </button>
                <button onClick={() => this.sortName()}>Sort by Name</button>
                <button onClick={() => this.sortPopularity()}>Sort by Popularity</button>
              </td>
            </tr>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Accion</th>
            </tr>
            {this.state.persons.map((person, idx) => {
              return (
                <TableRow
                  photo={person.pictureUrl}
                  name={person.name}
                  popularity={person.popularity}
                  button = {<button className="delBtn" onClick={() => this.deleteElement(person.name)}>Delete</button>}
                  key={idx}
                  
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
