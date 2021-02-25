import React, { Component } from 'react'
import contacts from '../contacts.json';
import Contact from './Contact'


export default class ContactList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedContacts: contacts.slice(0, 5),
            availableContacts: contacts.slice(5),
        }
    }
    updateContactList(contacts) {
        return contacts.map(contact => {
            return (
                <Contact key={contact.id} {...contact} clickToDelete={() => this.deleteContact(contact.id)} />);
        });
    }

    addRandomContact() {
        const availableCopy = [...this.state.availableContacts];
        const displayedCopy = this.state.displayedContacts;
        if (availableCopy.length === 0) {
            this.setState({
                isMessage: true
            });
            return;
        }
        const contactRandomIndex = Math.floor(Math.random() * availableCopy.length)
        const contactRandom = availableCopy[contactRandomIndex];
        availableCopy.splice(contactRandomIndex, 1);
        displayedCopy.push(contactRandom);
        this.setState({
            availableContacts: availableCopy,
            displayedContacts: displayedCopy
        });
    }

    sortList(type) {
        const displayedCopy = this.state.displayedContacts;
        if (type === "name") displayedCopy.sort((a, b) => a.name.localeCompare(b.name));
        if (type === "popularity") displayedCopy.sort((a, b) => b.popularity - a.popularity);
        this.setState({
            displayedContacts: displayedCopy
        });
    }

    deleteContact(id) {
        const availableCopy = [...this.state.availableContacts];
        const displayedCopy = this.state.displayedContacts;
        const index = displayedCopy.findIndex(contact => contact.id === id);
        const deletedContact = displayedCopy.splice(index, 1);
        availableCopy.push(deletedContact[0]);
        this.setState({
            availableContacts: availableCopy,
            displayedContacts: displayedCopy
        });
    }

    render() {
        return (
                <div>
                    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                        <h3 className="text-4xl leading-6 font-medium text-gray-900 dark:text-white mb-2">
                            Contact List
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Details and informations about contacts.
                        </p>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            <button type="button" onClick={() => this.addRandomContact()} className="py-2 px-4 m-1 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white max-w-xs transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Add Random Contact
                        </button>
                            <button type="button" onClick={() => this.sortList("name")} className="py-2 px-4 m-1 bg-yellow-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white max-w-xs transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sort By Name
                        </button>
                            <button type="button" onClick={() => this.sortList("popularity")} className="py-2 px-4 m-1 bg-green-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white max-w-xs transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Sort By Popularity
                        </button>
                        </p>
                    </div>
                    <ul className="flex flex-col">
                        {this.updateContactList(this.state.displayedContacts)}
                    </ul>
                </div>

        )
    }
}
