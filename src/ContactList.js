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





    render() {

        return (
            <>
            <button onClick={() => this.addRandom()} >Add random </button>
            <table>
            
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
                    <Table key={eachContact.id} name={eachContact.name} popularity={eachContact.popularity.toFixed(2)} pictureUrl= {eachContact.pictureUrl} />
                    ))
                    
                }
                </tbody>

                

            </table>
            </>
        )      
            
    }
}


export default ContactList