import React from 'react';
import contactsData from "./contacts.json";



class App extends React.Component {

  state = {
    contacts: contactsData.slice(0, 5),
  }

  getRandom() {
    const { contacts } = this.state;
    const contactsId = contacts.map(contact => contact.id);
    const rest = contactsData.filter(contact => !contactsId.includes(contact.id))
    const randomContact =  rest[Math.round(Math.random() * rest.length)];
    
    contacts.length === (contactsData.length - 1) ? this.setState({ contacts: contacts }) : this.setState((state, props) => ({ contacts: [...state.contacts, randomContact]}));
  
  }

  sortContactsByName() {
    const newArr = [...this.state.contacts]
    newArr.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
    this.setState({ contacts: newArr })
  }

  sortContactsByPopularity() {
    const newArr = [...this.state.contacts];
    newArr.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contacts: newArr });
  }

  deleteContact(id) {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>IronContacts</h1>
          <button className="btn btn-primary" onClick={() => this.getRandom()}>Add a random Contact</button>
          <button className="btn btn-primary ms-2" onClick={() => this.sortContactsByName()}>Sort by Name</button>
          <button className="btn btn-primary ms-2" onClick={() => this.sortContactsByPopularity()}>Sort by Popularity</button>
          <table>
            <thead>
              <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact, i) => (
                <tr key={i}>
                  <td className="w-25">
                    <img className="w-25" src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <button className="btn btn-danger" onClick={() => this.deleteContact(contact.id)}>Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
