import React, { Component } from 'react';
import contacts from './../../contacts.json';
import RandomButton from './../randombutton/RandomButton';
import SortName from './../sortname/SortName';
import SortPopularity from '../sortpopularity/SortPopularity';
import Delete from './../delete/Delete';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contactsShow: [...contacts].slice(0, 5),
    };
  }

  randomActor = () => {
    let inList = true;
    let aRandom;
    const { contactsShow } = this.state;
    while (inList) {
      aRandom = contacts[Math.floor(Math.random() * contacts.length)];
      inList = false;
      for (let i = 0; i < contactsShow.length; i++) {
        if (contactsShow[i].name === aRandom.name) {
          inList = true;
        }
      }
    }
    console.log(aRandom);
    this.setState({
      contactsShow: [...this.state.contactsShow, aRandom],
    });
  };

  /*  randomContacts = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if ( this.state.showFiveContacts.indexOf(randomContact) === -1)
      {this.setState({
        showFiveContacts: [...this.state.showFiveContacts, randomContact],
      })};
  }; */

  sortByName = () => {
    const sortedList = [...this.state.contactsShow];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contactsShow: sortedList,
    });
  };

  sortByPopularity = () => {
    const sortedListPop = [...this.state.contactsShow];
    sortedListPop.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contactsShow: sortedListPop,
    });
  };

  deleteActor = (id) => {
    const deleteContact = this.state.contactsShow.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contactsShow: deleteContact,
    });
  };
  render() {
    return (
      <div>
        <h2>IronContacts</h2>
        <div>
          <SortPopularity sortByPopularity={this.sortByPopularity} />
        </div>
        <div>
          <SortName sortByName={this.sortByName} />
        </div>
        <div>
          <RandomButton randomActor={this.randomActor} />
        </div>
        <table style={{ width: 100 }}>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsShow.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      alt=""
                      style={{ width: 100 }}
                      src={contact.pictureUrl}
                    />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <Delete
                      clickToDelete={() => this.deleteActor(contact.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Contacts;
