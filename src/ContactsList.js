import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './Contact'

class ContactsList extends Component {
    state = { fiveContacts: contacts.slice(0, 5)}

    addRandomContactHandler = () => {
        const contactsCopy = [...this.state.fiveContacts];
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        if(!contactsCopy.includes(randomContact)){
       contactsCopy.push(randomContact);
   }
   this.setState( {fiveContacts: contactsCopy} ) 
}

    sortByName= ()=> {
    const contactsCopy = [...this.state.fiveContacts];
    contactsCopy.sort((a,b) => a.name.localeCompare(b.name)
    )
    this.setState({fiveContacts: contactsCopy})
    }

    sortByPopularity= ()=> {
        const contactsCopy = [...this.state.fiveContacts];
        contactsCopy.sort((a,b) => b.popularity-a.popularity)
        this.setState({fiveContacts: contactsCopy})
        }

    deleteContactHandler = id => {
            const contactsCopy = this.state.fiveContacts;
            const contactIndex = contactsCopy.findIndex(item => item.id === id);
            contactsCopy.splice(contactIndex, 1);
            this.setState({
                fiveContacts: contactsCopy
            })
          }


    render() {
    return (
        <div>
            <button onClick={this.addRandomContactHandler}> Add random contact</button>
            <button onClick={this.sortByName}> Sort by name </button>
            <button onClick={this.sortByPopularity}> Sort by popularity</button>
            <table>
                <tr>
                <th>Picture</th>
                <th> Name</th>
                <th>Popularity</th>      
                </tr>
                <tr>
                {this.state.fiveContacts.map(item => {
                    return <Contact key={item.id} {...item} clickToDelete={() => this.deleteContactHandler(item.id)} />

                })}
                </tr>
                </table>
        </div>
    )}
}

export default ContactsList