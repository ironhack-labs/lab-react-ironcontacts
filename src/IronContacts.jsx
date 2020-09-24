import React from 'react';
import allContacts from './contacts.json';

const contactStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

const pictureContainerStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const pictureStyle = {
  width: 100
}

class IronContatcs extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: allContacts.slice(0, 5)
    };
  }

  randomContact = () => {
    const randomIndex = parseInt(Math.random() * (allContacts.length));
    const ids = this.state.contacts.map(contact => contact.id);

    if (ids.includes(allContacts[randomIndex].id)) {
      return this.randomContact();
    }

    this.setState({
      contacts: [...this.state.contacts, allContacts[randomIndex]]         
    });
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a,b) =>  {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0
      })
    });
  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) =>  b.popularity - a.popularity)
    })
    console.log('this ', this.state.contacts)
  }

  deleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== contactId)
    })
    

  }
  
  render() {
    const {contacts} = this.state;
    return (
      <div>
        <button onClick={this.randomContact}>
          Add Random Contact
        </button>
        <button onClick={this.sortByName}>
          Sort by name
        </button>
        <button onClick={this.sortByPopularity}>
          Sort by popularity
        </button>
        {contacts.map((contact, index) => (
          <div key={index} style={contactStyle}>
            <table>
              <tbody>
                <tr>
                  <td style={pictureContainerStyle}>
                    <img src={contact.pictureUrl} alt='contact' style={pictureStyle}/>
                  </td>
                  <td> Name
                    <p>{contact.name}</p>
                  </td>
                  <td> Popularity
                  <p>{parseFloat(contact.popularity).toFixed(2)}</p>
                  </td>
                </tr>
              </tbody>
            </table>
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>
          </div>
          ))
        }          
      </div>
    );
  }
}
  
export default IronContatcs;