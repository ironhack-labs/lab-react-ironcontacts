import React, { Component } from 'react';
import contacts from './contacts.json';
import Contact from './Contact'

class CList extends Component {
    state = { fiveContacts: contacts.slice(0, 5)}

    addRandomContact = () => {
        const copiedContacts = [...this.state.fiveContacts];
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
        if(!copiedContacts.includes(randomContact)){
        copiedContacts.push(randomContact);
   }
   this.setState( {fiveContacts: copiedContacts} ) 
}

    sortName= ()=> {
    const copiedContacts = [...this.state.fiveContacts];
    copiedContacts.sort((a,b) => a.name.localeCompare(b.name)
    )
    this.setState({fiveContacts: copiedContacts})
    }

    sortPopularity= ()=> {
        const copiedContacts = [...this.state.fiveContacts];
        copiedContacts.sort((a,b) => b.popularity-a.popularity)
        this.setState({fiveContacts: copiedContacts})
        }

    deleteContact= id => {
            const copiedContacts = this.state.fiveContacts;
            const contactIndex = copiedContacts.findIndex(item => item.id === id);
            copiedContacts.splice(contactIndex, 1);
            this.setState({
                fiveContacts: copiedContacts
            })
          }


    render() {
    return (
        <div>
            <button onClick={this.addRandomContact}> Add random contact</button>
            <button onClick={this.sortName}> Sort by name </button>
            <button onClick={this.sortPopularity}> Sort by popularity</button>

            <table>
                <tr>
                            <th>Picture</th>
                            <th> Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                </tr>
                <tr>
                {this.state.fiveContacts.map(item => {
                    return <Contact key={item.id} {...item} clickToDelete={() => this.deleteContact(item.id)} />

                })}
                </tr>
                </table>

        </div>
    )}
}

export default CList