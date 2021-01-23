import React from 'react';
import './App.css';
import contacts from './contacts.json'


const firstFive = contacts.slice(0,5).map((contact) => {
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} className ="contactPicture"/></td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
    </tr>
  );
});


class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <h1>IRONHACK CONTACTS</h1>
        <table className="contacts-table">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {firstFive}
        </table>
      </div>
    );
  }
}

export default App;