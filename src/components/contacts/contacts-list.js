// import React from 'react';
import React, { Component } from 'react'
import ContactCard from './contacts-card'
import contacts from './contacts.json'
import Button from '.././buttons/button';
import './contacts.css';


class Contacts extends Component {

    constructor() {
        super();

        this.state = {
            contact: contacts.slice(0, 5) // copy to array
        }

    }

    //I tried with a funcion but I didn't get to use good. View line 26
    // randomContact = (arr) => {
    //     const randomCont = arr[Math.floor(Math.random() * arr.length)];
    //     return randomCont;
    // };



    randomAddContact = () => {
        // randomContact(contacts)
        const randomCont = contacts[Math.floor(Math.random() * contacts.length)];
        const contCopy = [...this.state.contact];
        contCopy.push(randomCont);
        this.setState({ contact: contCopy });
    }

    sortContactName = () => this.setState(this.state.contact.sort((a, b) => a.name.localeCompare(b.name)))

    sortContactPopularity = () => this.setState(this.state.contact.sort((a, b) => b.popularity - a.popularity))

    deleteContact = id => {
        const contCopy = [...this.state.contact]
        contCopy.splice(id, 1)
        this.setState({ contact: contCopy })
    }


    render() {

        console.log(this.state.contact)

        return (
            <>
                <section>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <Button onClick={this.randomAddContact} className={'btn theme-btn'} title='Add Contact Random' />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <Button onClick={this.sortContactName} className={'btn theme-btn info'} title='Sort Contact Name' />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <Button onClick={this.sortContactPopularity} className={'btn theme-btn info'} title='Sort Contact Popularity' />
                        </div>
                    </div>
                </section>
                <hr></hr>
                <section>
                    <h2>Contacts</h2>
                    <div className="row">
                        {this.state.contact.map(contact => <ContactCard removeContact={() => this.deleteContact(contact.id)} name={contact.name} pictureUrl={contact.pictureUrl} popularity={contact.popularity} key={contact.id} />)}
                    </div>
                </section>

            </>
        )
    }

}

export default Contacts
