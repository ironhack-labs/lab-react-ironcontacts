import React from 'react';
import contacts from './contacts.json';


class Contact extends React.Component {
    state = {
        contactsLimit: contacts.slice(0, 5)
    }

    render(){
        return (
            <div>
            <h1>Ironhack Contacts</h1>
            <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            {this.state.contactsLimit.map(item => (
                    <tr>
                    <td> <img src={item.pictureUrl} alt="profile" height="100px"/></td> 
                    <td>{item.name}</td> 
                    <td>{item.popularity}</td>
                </tr>
            ))}
            </table>
        </div>

        )
    }
}

export default Contact;