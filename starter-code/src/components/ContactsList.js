import React, {Component} from 'react';
import ContactCard from './ContactCard';
import shortid from 'shortid';

export default class ContactsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contactsArr,
    }
  }

  deleteContact = (index) => {
    console.log('deleteee');
    this.props.deleteContact(index);
  }

  render() {
    return (
      <div className="container">
        <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { this.state.contacts.map((contactObj,index) => {
                return <ContactCard 
                  key={shortid.generate()} 
                  contact={contactObj} 
                  clickToDelete={ () => this.deleteContact(index) }
                /> 
            })
          }
        </tbody> 
        </table>
      </div> 
    )
  }

}