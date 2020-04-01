import React, { Component } from 'react';
import contacts from '../contacts.json';
import Card from './Card';
// import RandomCard from './RandomCard';
import './contacts.css';
import { render } from 'react-dom';

class Contacts extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    random: contacts[Math.floor(Math.random() * contacts.length)],
    // sorted: contacts[contacts.length.name]
  };
  randomContact = () => {
    let randomCopy = [...this.state.contacts];
    randomCopy.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ contacts: randomCopy });
  };
// sortByName(){
//     let sortedName = [this.state.contacts.name.length];
//     sortedName.sort();
//     let newSorted = sortedName.toString();
//     this.setState({contacts: newSorted})
// };

sortByName(){
    let sortedName = this.state.contacts.sort((a, b) =>{
        return (
            contacts.name.toString(a - b)
        )
    })
this.setState({contacts: sortedName})
}

//   sortByName = (a, b) => {
//     let sortedName = this.state.contacts.sort((contacts) =>{
//     return (
//         contacts.name
//     )})
//     this.setState({contacts: sortedName});
//   };

  render() {
    return (
      <table>
        <button onClick={this.randomContact}>Add random contact</button>
        <button onClick={this.SortByName}>Sort by name</button>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map((contacts, index) => (
            <Card
              key={contacts.name}
              pictureUrl={contacts.pictureUrl}
              name={contacts.name}
              popularity={contacts.popularity}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Contacts;


