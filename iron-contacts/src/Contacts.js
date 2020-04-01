import React, { Component } from 'react';
import './Contacts.css';
import Card from './Card';

class Contacts extends Component {
  render() {
    return (
      <table className="contacts-table">
        <thead>
          <tr className="contacts-title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map((contact, index) => (
            <Card
              key={index}
              name={contact.name}
              pictureUrl={contact.pictureUrl}
              rating={contact.popularity.toFixed(2)}
              clickDelete={() => {
                this.props.deleteContact(index);
              }}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Contacts;
