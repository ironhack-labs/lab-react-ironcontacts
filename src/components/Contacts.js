import React, { Component } from 'react';


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts.slice(0, 5),


                addContact = () => {
                let restOfContact = [...this.state.contacts];
                let randomIndex = Math.floor(Math.random() * (restOfContact.length));
                let contact = restOfContact[randomIndex];
                let addList = [...this.state.first5, contact];
                this.setState({ first5: addList });
            }
        };
    }

    render() {
        return (
            <table>
                <thead>
                    <h1>IronContacts</h1>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contacts.map((actor) => {
                        return (
                            <tr>
                                <td>
                                    <img src={actor.pictureUrl} alt="" />
                                </td>
                                <td>{actor.name}</td>
                                <td>{actor.popularity}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}

export default Contacts