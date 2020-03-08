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
    render () {
        console.log(this.state.contacts);

        return (
            <div className="contact-table">
                <table>
                    <thead>
                        <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map(oneContact => {
                            return <ShowContact key={oneContact.id} {...oneContact} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}