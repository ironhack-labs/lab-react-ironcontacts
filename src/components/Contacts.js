import React from "react";
import contacts from './contacts.json';
import './Contacts.css'

const originalcontacts = contacts.slice(0,5);

class ContactList extends React.Component{
    state = {
        contactList: originalcontacts
    };

    addRandomContact = () => {
        const newList = this.state.contactList;
        const newContact = contacts[Math.floor(Math.random() * contacts.length)]
        if (!newList.includes(newContact)) {
            newList.push(newContact)
        }
        this.setState((prevState) => ({
         contactList: newList,
        }));
    };

    sortByName = () => {
        const copyContacts = [...this.state.originalContacts];
     
        copyContacts.sort((a, b) => (a.name < b.name) ? -1 : 1); 
        this.setState({originalContacts: copyContacts})
    }
    
    
    sortByPopularity = () => {
        const copyContacts = [...this.state.originalContacts];
        
        copyContacts.sort((a, b) => b.popularity - a.popularity);
        this.setState({originalContacts: copyContacts})
    }

    deleteContact = id => {
        const copyContacts = [...this.state.originalContacts];
        const filteredContacts = copyContacts.filter(contact => contact.id !== id)
        this.setState({originalContacts: filteredContacts})
    }
    

    render() {
        return (
            <div>
            <h1 className="title">IronContacts</h1>
            <button className="random-button" onClick={this.addRandomContact}>Add Random Contact</button>
            <button className="sort-button" onClick={this.sortByName}>Sort by name</button>
            <button className="sort-button" onClick={this.sortByPopularity}>Sort by popularity</button>
            
            <div className="table">
            <table key="table">
                <tbody key="tbody">
                <tr className="table-header" key="table-header">
                    <th key="Pic">Picture</th>
                    <th key="Titlename">Name</th>
                    <th key="Titlepop">Popularity</th>
                </tr>
                {contacts.map(((contacts, id) => {
                    return (
                        <tr className="content" key={id}>
                            <th key="img"><img className="celeb-img" src={contacts.pictureUrl} alt="celeb-img"/> </th>
                            <th key="name">{contacts.name}</th>
                            <th key="pop">{contacts.popularity}</th>
                            <th><button className="delete-button" onClick={this.deleteContact}>Delete contact</button></th>
                        </tr>
                    );
                }))
            }
                </tbody>
            </table>
            </div>
            </div>
        )
    }

}

export default ContactList;