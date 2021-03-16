import React from "react";
import contacts from "./../contacts.json"

var fiveContacts = contacts.slice(0, 5);
var otherContacts = contacts.slice(6, (contacts.length - 1));


class Contacts extends React.Component {
    
    state = {
        contacts: fiveContacts
    }

    deleteContact = (index) => {
        const copyContacts = [... this.state.contacts];
        copyContacts.splice(index, 1)
        this.setState({contacts: copyContacts})
    }

    addContact = () => {
        const copyContacts = [... this.state.contacts];
        let randomContact = otherContacts[Math.floor(Math.random()*(otherContacts.length))];
        copyContacts.unshift(randomContact);
        this.setState({contacts: copyContacts})
    }

    sortName = () => {
        const copyContacts = [... this.state.contacts];
        console.log('YO')
        copyContacts.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: copyContacts});
    }

    sortPop = () => {
        const copyContacts = [... this.state.contacts];
        const sortedContacts = copyContacts.sort((a,b) => b.popularity - a.popularity)
        this.setState({contacts: sortedContacts});
    }

    render() {
        return (
            <div className="contacts">
                <h1>IronContacts</h1>
                <button style={{height: '100px', margin: '3px'}} onClick={this.addContact}>Add new contact</button>
                <button style={{height: '100px', margin: '3px'}} onClick={this.sortName}>Sort by name</button>
                <button style={{height: '100px', margin: '3px'}} onClick={this.sortPop}>Sort by popularity</button>
                <div style={{display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                    <p style={{margin: "3px"}}>Picture</p>
                    <p style={{margin: "3px"}}>Name</p>
                    <p style={{margin: "3px"}}>Popularity</p>
                    <p style={{margin: "3px"}}>Delete</p>
                </div>
                {this.state.contacts.map((contact, index) => ( 
                    <div key={index} style={{display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
                        <p><img src={contact.pictureUrl} alt="picture" height="200 px"/></p>
                        <p style={{margin: "3px"}}>{contact.name}</p>
                        <p style={{margin: "3px"}}>{contact.popularity.toString().split('').slice(0, 5)}</p>
                        <button style={{height: '100px', margin: '3px'}} onClick={() => this.deleteContact(index)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Contacts;