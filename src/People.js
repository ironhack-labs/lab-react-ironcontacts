import React, { Component } from 'react';
import people from './contacts.json';

export default class People extends Component {
  state = {
    contacts: people.slice(0, 4),
  };

  handleClick = () => {
    const randomContact = people[Math.floor(people.length * Math.random())];
    this.setState({ contacts: [...this.state.contacts, randomContact] });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add person</button>
        <button onClick={this.handleClick}>Add person</button>
        <button onClick={this.handleClick}>Add person</button>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.state.contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>
                  {' '}
                  <p>{contact.popularity}</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
