import { Component } from "react";
import contacts from "../contacts.json";
import AddContact from "./AddContacts";
import './Contacts.css';


class Contacts extends Component {

    state = {
        contactJson: contacts.slice(0, 5)
    }

    handleAddContact = (contact) => {
        const newContacts = [...this.state.contactJson,contact];
        this.setState({
            contactJson:newContacts,
        });
    };

    handleSortByPopularity = () => {
        const newContacts = [...this.state.contactJson];
        newContacts.sort (function (a,b) {
            if(a.popularity < b.popularity) {
                return 1
            }
            if(a.popularity > b.popularity){
                return -1
            }
            if (a.popularity === b.popularity){
                return 0
            }
        })
        this.setState({
            contactJson: newContacts,
        })
    }
    
    handleSortByName = () => {
        const newContacts = [...this.state.contactJson];
        newContacts.sort (function (a,b) {
            if(a.name > b.name) {
                return 1
            }
            if(a.name < b.name){
                return -1
            }
            if (a.name === b.name){
                return 0
            }
        })
        this.setState({
            contactJson: newContacts,
        })
    }

    handleDeleteContact = (id) => {
        const newContacts = [...this.state.contactJson];
        const index = newContacts.findIndex((contact) => contact.id === id);
        console.log(index)
        newContacts.splice(index,1);
        this.setState({
            contactJson:newContacts,
        })
    }

    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <div className = "Buttons">
                <AddContact addContact={this.handleAddContact}/>
                <button onClick = {() => {this.handleSortByPopularity()}}>Sort by Popularity</button>
                <button onClick = {() => {this.handleSortByName()}}>Sort by name</button>
                </div>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>

                    {this.state.contactJson.map((contact) => {
                        return (
                            <tr key = {contact.id}>
                                <td>
                                    <img src={contact.pictureUrl}/>
                                </td>
                                <td>
                                    <p>{contact.name}</p>
                                </td>
                                <td>
                                    <p>{contact.popularity.toFixed(2)}</p>
                                </td>
                                <td>
                                  <button className = 'delete-button' onClick = {()=> {this.handleDeleteContact()}}>Delete</button>  
                                </td>
                            </tr>
                        )
                    }
                    )
                    }
                </table>
            </div>
        )
    }
}

    export default Contacts
