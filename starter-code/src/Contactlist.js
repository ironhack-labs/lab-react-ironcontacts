import React, { Component } from 'react';
import ContactCard from './ContactCard.js'
import contacts from './contacts.json';
import AddCelebrity from './AddCelebrity.js';

class Contactlist extends Component {

    state = {
        contacts: contacts.slice(0, 5)
    }

    randomClickHandler = (index) => {

        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        console.log("randomContact", randomContact)
        this.state.contacts.push(randomContact)

        this.setState({
            contacts: this.state.contacts
        })
    }

    sortNameClickHandler = (index) => {

        let sortByName = contacts[Math.floor(Math.random() * contacts.length)]
        console.log("randomContact", sortByName)
        this.state.contacts.push(sortByName)

        this.setState({
            contacts: this.state.contacts
        })
    }

    sortPopClickHandler = (index) => {

        let randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        console.log("randomContact", randomContact)
        this.state.contacts.push(randomContact)

        this.setState({
            contacts: this.state.contacts
        })
    }

    deleteHandler = (index) => {
        this.setState({
            contacts: this.state.contacts.filter((e, i) => i !== index)
        })
    }

    addCelebrity = (name, popularity) => {
        const newArr = [{ name: name, popularity: popularity }, ...this.state.contacts]
        this.setState({
            contacts: newArr
        })

    }

    render() {

        console.log(this.state.contacts)

        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.randomClickHandler}>Add random Actor</button>
                <AddCelebrity onNewCelebrity={this.addCelebrity} />
                <button onClick={this.sortNameClickHandler}>Sort by name</button>
                <button onClick={this.sortPopClickHandler}>Sort by Popularity</button>

                <ul>
                    <p> Picture Name Popularity</p>
                    {this.state.contacts.map((oneContact, index) => {

                        return <ContactCard key={index}

                            pictureUrl={oneContact.pictureUrl}
                            name={oneContact.name}
                            popularity={oneContact.popularity}
                            onDelete={() => this.deleteHandler(oneContact, index)} />
                    }
                    )}
                </ul>

            </div>
        );
    }
}

export default Contactlist;