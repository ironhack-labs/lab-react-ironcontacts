import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

export class App extends Component {
  state = [
    {
      pictureUrl: contacts[0].pictureUrl,
      name: contacts[0].name,
      popularity: contacts[0].popularity,
    },
    {
      pictureUrl: contacts[1].pictureUrl,
      name: contacts[1].name,
      popularity: contacts[1].popularity,
    },
    {
      pictureUrl: contacts[2].pictureUrl,
      name: contacts[2].name,
      popularity: contacts[2].popularity,
    },
    {
      pictureUrl: contacts[3].pictureUrl,
      name: contacts[3].name,
      popularity: contacts[3].popularity,
    },
    {
      pictureUrl: contacts[4].pictureUrl,
      name: contacts[4].name,
      popularity: contacts[4].popularity,
    },
  ];

  // setState = () => {
  //   for (let i=0; i<5; i++){
  //     ({pictureUrl: contacts[i].pictureUrl, name: contacts[i].name, popularity: contacts[i].popularity} )
  //     console.log("state", this.state)
  //   }
  // }
  getRandomContact = () => {
    const randomContact = Math.floor(Math.random() * contacts.length);
    console.log(contacts[randomContact].pictureUrl)
    // Create a new array based on current state:
    let floors = [...this.state];
    console.log("floors_1", floors)
    // Add item to it
    floors.push({pictureUrl: contacts[randomContact].pictureUrl, name: contacts[randomContact].name, popularity: contacts[randomContact].popularity});
    console.log("floors_2", floors)
    // Set state
    //this.setState({floors});
    console.log(this.state)
  };

  render() {
    return (
      <div>
        <button onClick={this.getRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((el, i) => {
              return (
                <tr key={this.state[i].id}>
                  <td>
                    <img src={this.state[i].pictureUrl} />
                  </td>
                  <td>{this.state[i].name}</td>
                  <td>{this.state[i].popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
