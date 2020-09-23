import React from "react";
import contacts from './contacts.json';
import './Contacts.css'

const celebs = contacts.slice(0,5);
console.log('list of celebreties: ', celebs)

class ContactList extends React.Component{
    state = {
        contactList: celebs
    };

    addRandomContact = () => {
        const newList = this.state.contactList;
        const newContact = contacts[Math.floor(Math.random() * contacts.length)]
        if (!newList.includes(newContact)) {
            newList.push(newContact)
        }
        this.setState((prevState) => ({
         contactList: newList,
        }));
      };
    

render() {
    return (
        <div>
        <h1 className="title">IronContacts</h1>
        <button className="random-button" onClick={this.addRandomContact}>
             Add Random Contact
           </button>
        <div className="table">
        <table>
            <tr className="table-header">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
        { celebs.map(((celeb, index) => {
            return (
                <tr className="content">
                    <th><img className="celeb-img" src={celeb.pictureUrl} alt="celeb-img"/> </th>
                    <th>{celeb.name}</th>
                    <th>{celeb.popularity.toFixed(2)}</th>
                </tr>
            )
        }))
        }

        </table>
        </div>
        </div>
    )
}


}
export default ContactList;