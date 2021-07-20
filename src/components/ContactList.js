import { Component } from "react";
import ContactCard from "./ContactCard.js";
import listContacts from "../contacts.json"
import "./ContactList.css"
import AddContact from "./AddContacts.js";

class ContactList extends Component {
    state = {
        contacts: listContacts
    }
    
    listInitial = () => {
        const newContacts = [...this.state.contacts].splice(0,5)
        
        return newContacts.map(contacts => <ContactCard {...contacts} key = {contacts.id} deleteContact = {this.deleteContact}/>)
    }

    randomContact = (contact) => {
        const newContacts = [...this.state.contacts, contact]
          
        this.setState( {
            contacts: newContacts
        })
    }

    deleteContact = (id) => {
        const newContacts = [...this.state.contacts]
        const index = newContacts.findIndex(contact => contact.id === id)

        newContacts.splice(index, 1)

        this.setState({
            contacts: newContacts
        })
    }

    render(){
        return (
            <>
                <h1>IronContacts</h1>
                <AddContact AddContact = {this.randomContact} />
                <div className = "table">
                    <table>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                        {this.listInitial()}
                    </table>
                </div>
                    
                
            </>
        )
    }
}


export default ContactList