import React, { Component } from 'react';

import Card from './Card';
import './Contacts.css';

class Contacts extends Component {


    render() {
        return (
            <div className="contacts">
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.contacts.map((contact, index)=>{
                            return <Card 
                                key = {index}
                                pictureUrl = {contact.pictureUrl}
                                name = {contact.name}
                                popularity = {contact.popularity.toFixed(2)}
                                clickToDelete={() => this.props.deleteContact(index)}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Contacts;
