import React, { Component } from 'react';
import './AllContacts.css'

class AllContacts extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            contacts: this.props.contactsArr.splice(0, 5)
        }
    }

    render() {
        return (
            <div>
            {/* {console.log(this.state.contacts)} */}
                    <table>
                        <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr> 
                        </thead>
                        <tbody>
                        { this.state.contacts.map(contact => {
                            return (
                                <tr>
                                    <td><img src={contact.pictureUrl} alt="" width="80" height="100" /></td>
                                    <td>{contact.name}</td>
                                    <td>{contact.popularity}</td>
                                </tr>
                            )       
                        })}
                        </tbody>
                    </table>
            </div>
        )
    }
}



export default AllContacts;