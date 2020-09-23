import React from 'react';
import './Contacts.css';
import contacts from '../../contacts.json';

const top5 = contacts.slice(0, 5);

class Contacts extends React.Component {
  state = { contacts: top5 };

  // //top 5
  // top5 = () => {
  //   console.log(`Top 5 button clicked`);
  //   const contactsCopy = [...this.state.contacts];
  //   const topFive = contactsCopy.slice(0, 5);
  //   console.log(`Top Five Copy`, topFive);

  //   this.setState({
  //     contacts: topFive,
  //   });
  // };

  //Add random celebrity to state.
  addRandom = () => {
    const remainingContacts = contacts.slice(5, contacts.length);

    const addRandom =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    const topFive = this.state;

    const random = topFive.contacts.concat(addRandom);

    this.setState({
      contacts: random,
    });
  };

  //Add random celebrity to state.
  sortName = () => {
    const sortNames = this.state.contacts;

    const sortedNames = sortNames.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    this.setState({
      contacts: sortedNames,
    });
  };

  //Add random celebrity to state.
  sortPopularity = () => {
    const sortPopularity = this.state.contacts;

    const sortedPopularity = sortPopularity.sort((a, b) =>
      a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
    );

    this.setState({
      contacts: sortedPopularity,
    });
  };

  remove = (index) => {
    console.log(`Object id`, index);
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1);
    this.setState({ contacts: contactsCopy });
  };

  render() {
    console.log(`STATE: `, this.state.contacts);

    return (
      <div>
        <h1>IronContacts</h1>
        <div className="button-container">
          {/* <button onClick={this.top5}>Top 5</button> */}
          <button onClick={this.addRandom}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by Name</button>
          <button onClick={this.sortPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <thead id="thead">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          {this.state.contacts.map((contact, index) => {
            return (
              <tbody key={contact.id}>
                <tr>
                  <td>
                    <img
                      className="mugshot"
                      src={contact.pictureUrl}
                      alt="mugshot"
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => this.remove(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Contacts;
