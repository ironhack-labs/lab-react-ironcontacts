import React from "react"
import contactsDB from "../contacts.json"
import ContactItem from "../contactItem/ContactItem"
class ContactList extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        contacts: contactsDB.slice(0,5)

        };

    this.addRandomContact = () => {
            const randomIndex = Math.floor(Math.random() * contactsDB.length);
            const contactsCopy = [...this.state.contacts];
            let newContact = contactsDB[randomIndex];
            contactsCopy.push(newContact);
            this.setState({contacts:contactsCopy});
        }

    this.sortByName = () => {
        const contactsCopy = [...this.state.contacts];

        this.setState({contacts : contactsCopy.sort((contact1, contact2) => {
             return contact1.name.localeCompare(contact2.name);
        })
    })
    }

    this.sortByPopularity = () => {
        const contactsCopy = [...this.state.contacts];

        this.setState({contacts : contactsCopy.sort((contact1, contact2) => {
           return  contact2.popularity - contact1.popularity;
        })
    })
    }
    this.removeContact = (id) => {
        
        this.setState({contacts: this.state.contacts.filter(contact => contact.id != id)})
    }
    }


    

    render(){
        return(
            <div>
            <button onClick = {() => this.addRandomContact()}>Add Random</button>
            <button onClick = {() => this.sortByName()}>Sort By Name</button>
            <button onClick = {() => this.sortByPopularity()}>Sort By Popularity</button>
            <table>
            <thead>
            <tr>
                <th>name
                </th> 
                <th>picture
                </th>
                <th>popularity
                </th>        
            </tr>
            </thead>
            <tbody>
            {this.state.contacts.map(contact => {
                return( 
                    <ContactItem {...contact} removeContact= { () => this.removeContact(contact.id)} key={contact.id}></ContactItem>
                )
            })}
            </tbody>

            </table>
            
            </div>
        )
    }

}

export default ContactList