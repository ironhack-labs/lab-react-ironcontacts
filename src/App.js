import React from 'react';
import './App.css';
import contacts from './contacts.json'

const firstFiveContacts = contacts.slice(0,5)
console.log(firstFiveContacts);

class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.pictureUrl} alt="profile" />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity.toFixed(2)}</td>
      </tr>
    );
  }
}

function App() {
  return (
    <div className="container">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {firstFiveContacts.map((contact) => {
            return <Contact key={contact.id} {...contact} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
