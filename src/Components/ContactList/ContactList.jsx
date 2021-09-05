import React from "react"
import "./ContactList.css"
import Contacts from "../../contacts.json"

let fiveContacts = Contacts.splice(0, 5)

export default class ContactList extends React.Component{
    state = {
        contacts: fiveContacts
    }

    addRandomContact = () => {
        let randomContact = Contacts[Math.floor(Math.random()*Contacts.length)]

        this.state.contacts.map((contact)=>{
            if(randomContact.id !== contact.id){
                //console.log("diferentes id", randomContact.id, contact.id)
                this.setState({
                    contacts: [randomContact, ...this.state.contacts]
                })
            }else{
                //console.log("mismo id", randomContact.id, contact.id)
                this.setState({
                    contacts: [...this.state.contacts]
                })
            }
        })
    }

    sortAlphabetically = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
        })
    }
    sortByPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => b.popularity-a.popularity)
        })
    }

    deleteContact = (contactId) => {
        this.setState({ contacts: this.state.contacts.filter(product => product.id !== contactId) })
      }

    render(){          
        return(
            <div className="ContactList">
                <h1>IronContacts</h1>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortAlphabetically}>Sort A-Z</button>
                <button onClick={this.sortByPopularity}>Highest popularity first</button>
                <table>
                    <thead>
                        <tr>
                            <th>Picture:</th>
                            <th>Name:</th>
                            <th>Popularity:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact) => {  
                            return(              
                            <tr key={contact.id} className="contact">
                                <td><img src={contact.pictureUrl} alt="Profile picture" className="celebPic"/></td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity}</td>
                                <td><button onClick={() => this.deleteContact(contact.id)}>Delete this contact</button></td>
                            </tr>
                            )        
                        })}
                    </tbody>          
                </table>
            </div>
        )
    }
}