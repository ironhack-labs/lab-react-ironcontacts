import React, { Component } from 'react';
import contacts from './contacts.json';
class App extends Component {
  state = {
    showContacts: [...contacts].splice(0, 5),
    remainingContacts: [...contacts].splice(5),
  };

  showContacts = () => {
    return this.state.showContacts.map((eachContact, i) => {
      return (
        <tr className="row" key={(eachContact.id, i)}>
          <td>
            <img
              style={{ width: '50px' }}
              src={eachContact.pictureUrl}
              alt="picture"
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <button onClick={() => this.deleteRow(i)}>Delete</button>
        </tr>
      );
    });
  };
  deleteRow = (i) => {
    let deleteShowingContacts = [...this.state.showContacts];
    deleteShowingContacts.splice(i, 1);
    this.setState({
      showContacts: deleteShowingContacts,
    });
  };
  randomActor = () => {
    let index = Math.floor(Math.random() * this.state.remainingContacts.length);
    let showContactsCp = [...this.state.showContacts];
    let remainingContactsCp = [...this.state.remainingContacts];
    showContactsCp.push(remainingContactsCp[index]);
    remainingContactsCp.splice(index, 1);
    this.setState({
      showContacts: showContactsCp,
      remainingContacts: remainingContactsCp,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomActor}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Pictures</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
