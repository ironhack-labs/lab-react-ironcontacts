import React from 'react';
import contacts from './contacts.json';


class Contact extends React.Component {
    state = {
        contactsLimit: contacts.slice(0, 5)
    }

    addRandomContactHandler = () => {
       const contactsCopy = [...this.state.contactsLimit];
       const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
       if(!contactsCopy.includes(randomContact)){
           contactsCopy.push(randomContact);
       }
       
       this.setState( {contactsLimit: contactsCopy} )
    }

    render(){
        return (
            <div>
            <h1>Ironhack Contacts</h1>
            <div className="buttons">
                <button onClick={this.addRandomContactHandler}>AddRandom</button>
            </div>
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