import React from 'react';
import TableRow from './tableRow';
import contacts from '../../src/contacts.json';


const limit = 5;

class TableList extends React.Component {
  state = {
    allContacts: contacts,
    contacts: contacts.slice(0, limit),
  };

  randomContact = () => {
   
    
    const restContact = this.state.allContacts.filter((e) => e !== this.state.contacts.map(ele => ele))
    const randomContact = restContact[Math.floor(Math.random() * (restContact.length))]
    
    this.setState({
      contacts: [randomContact, ...this.state.contacts],
    });
    
  };

  delete = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(e => e !== contact)
    });

  }

  sortByName = () => {
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    }
    this.setState({
      contacts: this.state.contacts.sort(compare)
      
    });
   

  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort(( a, b ) => b.popularity - a.popularity)
      
    });
   
    

  }

  render() {
    
    return (
      
      <div>
        <button onClick={this.randomContact.bind(this)}>Add Random Contact</button>
        <button onClick={this.sortByName.bind(this)}>Sort by name</button>
        <button onClick={this.sortByPopularity.bind(this)}>Sort by popularity</button>
       

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

          {this.state.contacts.map((contact, i) => (
              <TableRow
                key={i}
                contact={contact}
                delete = {this.delete}
              />
            ))}


            
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableList;
