/* import React, { Component } from 'react'
import contactsJSON from './../contacts.json';
// import './../App.css';

class Contacts extends Component {

    state = {
        contacts: contactsJSON.slice(0, 5)
    }


    render() {
        return (
            <div>
                <h1>hello there</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact) =>
                            <tr>
                                <td> <img class="picture" src={contact.pictureUrl} alt="contact-picture"/></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                                
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contacts;
*/