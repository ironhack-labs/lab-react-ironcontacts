import React, { Component } from "react";
import contacts from "../contacts.json";
import ShowContact from "./ShowContact";


export default class DynamicContacts extends Component{
    constructor() {
        super ();
        this.state = {
            contacts: contacts.slice(0,5)
        };
    }

    addRandomContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

        this.setState({
            contacts: [...this.state.contacts, randomContact]
        });
    }

    sortByName = () => {
        function compare(a, b){
            const contactA = a.name.toUpperCase();
            const contactB = b.name.toUpperCase();

            let compareContacts = 0;
            if (contactA > contactB) {
                compareContacts = 1;
            } else if (contactA < contactB) {
                compareContacts = -1;
            }
            return compareContacts;
        }

        this.setState({
            contacts: [...this.state.contacts.sort(compare)]
        })
    }

    sortByPopularity = () => {
        function compare(a, b){
            const contactA = a.popularity;
            const contactB = b.popularity;

            let comparePopularity = 0;
            if (contactA > contactB) {
                comparePopularity = 1;
            } else if (contactA < contactB) {
                comparePopularity = -1;
            }
            return comparePopularity;
        }

        this.setState({
            contacts: [...this.state.contacts.sort(compare)]
        })        
    }


    deleteContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        });
    };


    render () {
        return (
            <div>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort By Name</button>
                <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                <div className="contact-table">
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
                            {this.state.contacts.map(oneContact => {
                                return <ShowContact key={oneContact.id} {...oneContact} clickToDelete={() => this.deleteContact(oneContact.id)} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}