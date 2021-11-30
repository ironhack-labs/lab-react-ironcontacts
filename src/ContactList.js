import React, { Component } from "react";
import contacts from "./contacts.json"
import Table from "./Table";
import "./ContactList.css"

class ContactList extends Component {
    constructor() {
        super() 

        this.state = {
            contacs: contacts.slice(0, 5)
        }
    }

    render() {

        return (
            
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
                    this.state.contacs.map((eachContact) => (
                    <Table key={eachContact.id} name={eachContact.name} popularity={eachContact.popularity.toFixed(2)} pictureUrl= {eachContact.pictureUrl} />
                    ))
                }
                </tbody>
            </table>
            
        )      
            
    }
}


export default ContactList