import React from 'react';
import './Contact.css';
import contacts from '../contacts.json';

class Contact extends React.Component {
  state = {
    firstContacts: contacts.slice(0, 5)
  };

  // Iteration 2 | Add New Random Contacts
  addRandomContact = () => {
    // copy and expand firstContacts array into new copyContacts array
    const copyContacts = [...this.state.firstContacts];
    // get random contact
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // check if random contact isn't already in array
    if(!copyContacts.includes(randomContact)){
      // if not, push into the new array
      copyContacts.push(randomContact);
    }
    // update state
    this.setState({firstContacts: copyContacts})
  }


  // Iteration 3.1 | Sort Contacts By Name
  sortByName = () => {
    const copyContacts = [...this.state.firstContacts];
    // sort contacts in alphabetical order
    copyContacts.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    this.setState({firstContacts: copyContacts})
  }


  // Iteration 3.2 | Sort Contacts By Popularity
  sortByPopularity = () => {
    const copyContacts = [...this.state.firstContacts];
    // sort contacts by popularity (highest first)
    copyContacts.sort((a, b) => b.popularity -a.popularity)
    this.setState({firstContacts: copyContacts})
  }

  // 
  deleteContact = id => {
    console.log(id)
    const copyContacts = [...this.state.firstContacts];
    // filter out deleted contacts and store in new filteredContacts array
    const filteredContacts = copyContacts.filter(contact => contact.id !== id)
    this.setState({firstContacts: filteredContacts})
  }

  render() {
    return (
      <div className='container'>
        <h1 className='table__header' colSpan="4">IronContacts</h1>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>

            <tr>
              <td className='buttonTD'><button onClick={this.addRandomContact}>Add Random Contact</button></td>
              <td className='buttonTD'><button onClick={this.sortByName}>Sort <br />A-Z</button></td>
              <td className='buttonTD'><button onClick={this.sortByPopularity}>Sort <br />High-Low</button></td>
              <td className='empty'></td>
            </tr>

            {this.state.firstContacts.map(contact => {
              const { name, pictureUrl, popularity, id } = contact;
              const image = <img className='profile__img' src={pictureUrl} alt='profileImg' />

              return (
                <tr key={id}>
                  <td>{image}</td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  <td><button className='deleteBtn' onClick={() => this.deleteContact(id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Contact