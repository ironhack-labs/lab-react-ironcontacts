import React, {Component} from 'react';
import {getFirstFive} from './contactsList';
import {getContacts} from './contactsList';

class Contacts extends Component {
  state = {
    contacts: getFirstFive (),
    fulllist: getContacts()
  };

  handleDelete = contact => {
    //let contacts = [...this.state.contacts];
    let contacts = this.state.contacts.filter (c =>  c.name !== contact.name);
    this.setState ({contacts});  
  };

  handleAddRandom = () => {
    const addOne = this.state.fulllist[Math.floor(Math.random()*this.state.fulllist.length)]
    contacts: this.state.contacts.push(addOne)
    this.setState({})
  }

  handleSortName = () => {
    let contacts = this.state.contacts.sort( (a,b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 :0
  })
    this.setState({contacts})
  };


  handlePopular = () => {
    let contacts = this.state.contacts.sort((a,b) => {
     return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0
  })
    this.setState({contacts})
  }


  render () {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.handleAddRandom} type="button" className="btn btn-dark ">Add random Contact</button>
        <button onClick={this.handleSortName} type="button" className="btn btn-info m-2 ">Sort by name</button>
        <button onClick={this.handlePopular} type="button" className="btn btn-dark ">Sort by popularity</button>

        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map ((contact, index) => (
              <tr key={index}>
                <td> <img src={contact.pictureUrl} width="60px" alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.handleDelete (contact)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    );
  }
}

export default Contacts;
