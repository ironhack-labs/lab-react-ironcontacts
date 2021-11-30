import React, { Component } from "react";
import contacts from "./contacts.json"
import Table from "./Table";
import "./ContactList.css"


class ContactList extends Component {
    constructor() {
        super() 

        this.state = {
            contacts: contacts.slice(0, 5)
        }
    }


    addRandom() {

        const arr = [...this.state.contacts]

        arr.push(contacts[Math.floor(Math.random() * contacts.length)])

        this.setState({
            contacts: arr
        }) 
        
    }



    sortByName() {

        const arr = [...this.state.contacts]
        
        arr.sort(function(a, b){
            if (a.name < b.name) {return -1}
            if (a.name > b.name) {return 1}
            return 0
        })

        this.setState({
            contacts: arr
        })

    }



    sortByPopularity() {
        const arr = [...this.state.contacts]

        arr.sort(function (a, b) {
            if (a.popularity < b.popularity) { return 1 }
            if (a.popularity > b.popularity) { return -1 }
            return 0
        })

        this.setState({
            contacts: arr
        })
    }


    removeContact(contactId) {
        const newContacts = this.state.contacts.filter(contact => contact.id !== contactId)

        this.setState({
            contacts: newContacts
        })


    }



    render() {



        return (
            <>
            <br />
            <button onClick={() => this.sortByPopularity()} >Sort by popularity </button>
            <br />
            <button onClick={() => this.sortByName()} >Sort by name </button>
            <br />  
            <button onClick={() => this.addRandom()} >Add random </button>
                <table className="App-header">
            
                <thead>
                    <tr>
                        <th></th>
                        <th>IronContacts</th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity  </th>
                    </tr>

                </thead>
                <tbody>
                {
                    this.state.contacts.map((eachContact) => (
                    <Table key={eachContact.id} removeContact={() => this.removeContact(eachContact.id)}  name={eachContact.name} popularity={eachContact.popularity.toFixed(2)} pictureUrl= {eachContact.pictureUrl} />
                    ))
                    
                }
                </tbody>

                

            </table>
            </>
        )      
            
    }
}


export default ContactList