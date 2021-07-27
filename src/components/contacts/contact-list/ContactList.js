import React from 'react';
import contacts from '../../../data/contacts.json'
import ContactItem from '../contact-item/ContactItem';

class ContactList extends React.Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({ contacts: contacts.slice(0, 5) })
    }

    handleAddContact() {
        const random = contacts.filter(contact => contact.id !== this.state.contacts.id)[Math.floor(Math.random() * contacts.length)];
        this.state.contacts.push(random)          
        this.setState((prevState) => ({            
            contacts: prevState.contacts
        }))
     } 

    handleSortByName() {
        this.state.contacts.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (b.name > a.name) {
                return -1;
            }
            return 0;
        })         
        this.setState((prevState) => ({            
            contacts: prevState.contacts
        }))
     } 
    
    handleSortByPopularity() {
        this.state.contacts.sort(function (a, b) {
            if (a.popularity > b.popularity) {
                return -1;
            }
            if (b.popularity > a.popularity) {
                return 1;
            }
            return 0;
        })         
        this.setState((prevState) => ({            
            contacts: prevState.contacts
        }))
     } 

    handleDeleteContact(id) {
        this.setState((prevState) => ({
          contacts: prevState.contacts.filter(contact => contact.id !== id)
        }))
      }

    render(){
        const {contacts} = this.state
        return(
            <div className="container">
                <div className="btn-group my-5" role="group" aria-label="Basic example">
                    <button className="btn btn-primary" onClick={() => this.handleAddContact()}>Add Random Contact</button>
                    <button type="button" class="btn btn-primary" onClick={() => this.handleSortByName()}>Sort by name</button>
                    <button type="button" class="btn btn-primary" onClick={() => this.handleSortByPopularity()}>Sort by popularity</button>
                </div>
                
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => <ContactItem {...contact} key={contact.id} onClickDelete={(id) => this.handleDeleteContact(id)}/>)}
                </tbody>
                </table>                
            </div>

        )
    }
}

export default ContactList