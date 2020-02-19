import React from "react";
import contacts from "./contacts.json";

const Contact = props => {
  return (
    <React.Fragment>
      <tr>
        <td>
          <img src={props.data.pictureUrl} alt="" />
        </td>
        <td>
          <p>{props.data.name}</p>
        </td>
        <td>
          <p>{props.data.popularity}</p>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  //   addRandom = () => {
  //       let found;

  //       while (!found && this.state.contacts.length < contacts.length)
  //       const random = contacts[Math.floor(Math.random)* contacts.length];
  //       const alreadyexisting = this.state.contacts.find(contact=> {
  //           return contact
  //       })
  //   }

  componentDidMount = () => {
    let initialContacts = [];
    for (let i = 0; i < 5; i++) {
      initialContacts.push(contacts[i]);
    }
    this.setState({
      contacts: initialContacts
    });
  };

  handleClick = () => {
    let found;
    while (!found && this.state.contacts.length < contacts.length) {
      const newContact = contacts[Math.floor(Math.random() * contacts.length)];
      //on this
      const alreaadyExisting = this.state.contacts.find(contacts => {
        return contacts.id === newContact.id;
      });
      this.setState({
        contacts: [...this.state.contacts, newContact]
      });
      if (!alreaadyExisting) {
        found = newContact;
      }
    }
    if (found) {
      this.setState({
        contacts: [found, ...this.state.contacts]
      });
    }
  };

  handleSortClick = () => {
    let sortName = [...this.state.contacts];
    sortName.sort((a, b) => {
      // a= {
      //   name, title, popularity
      // }

      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortName
    });
  };

  handleSortPopClick = () => {
    let sortPop = [...this.state.contacts];
    sortPop.sort((a, b) => {
      // a= {
      //   name, title, popularity
      // }
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortPop
    });
  };

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <div>
          <button onClick={this.handleClick}>Add Random Contact</button>
          <button onClick={this.handleSortClick}>Sort by Name</button>
          <button onClick={this.handleSortPopClick}>Sort by Popularity</button>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map(contact => {
                  return <Contact key={contact.id} data={contact} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
