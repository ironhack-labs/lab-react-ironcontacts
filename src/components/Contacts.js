import React, { Component } from 'react'
import ContactDetails from './ContactDetails';

export default class Contacts extends Component {
    state = {
        contacts: this.props.contacts,
        renderContacts: [...this.props.contacts].slice(0, 5)
    }

    addHandler = () => {
        if (this.state.contacts.length === this.state.renderContacts.length) return;

        let randomPick = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)]
        let contactsClone = [...this.state.renderContacts]
        console.log(randomPick)
        if (contactsClone.includes(randomPick)) {
            this.addHandler();
        }
        else {
            contactsClone.push(randomPick);
            this.setState({
                renderContacts: contactsClone
            });
        }
    }

    nameSort = () => {
        let contactsClone = [...this.state.renderContacts]
        contactsClone.sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
            else return 0;
        })

        this.setState({
            renderContacts: contactsClone
        });
    }

    popularitySort = () => {
        let contactsClone = [...this.state.renderContacts];

        contactsClone.sort((a, b) => {
            if (a.popularity > b.popularity) return -1;
            else if (a.popularity < b.popularity) return 1;
            else return 0;
        })

        this.setState({
            renderContacts: contactsClone
        });
    }

    deleteHandler = id => {
        let filtered = this.state.renderContacts.filter((elem) => {
            return elem.id !== id;
        })

        this.setState({
            renderContacts: filtered
        });
    } 

    render() {
        return (
            <div>
                <div className="btn-div">
                    <button className="btn-reg" onClick={this.addHandler}>Add Random Contact</button>
                    <button className="btn-reg" onClick={this.nameSort}>Sort by Name</button>
                    <button className="btn-reg" onClick={this.popularitySort}>Sort by Popularity</button>
                </div>
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.renderContacts.map((elem, i) => {
                            return <ContactDetails
                                contact={elem}
                                key={"contactData" + i}
                                deleteHandler={this.deleteHandler}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
