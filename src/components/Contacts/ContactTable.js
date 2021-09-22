import React from "react";
import contacts from '../../contacts.json'
import Button from "../Button/Button";
import ContacItems from './../ContactItems/ContactItems'
import './ContactTable.css'

class DynamicTable extends React.Component {
    
    state ={
        contacts: contacts.slice(0, 5)
    }

    contactsArr = () => {
        const contarray = this.state.contacts.map(contact => contact)
        return (
            contarray
        )
    }

    addContact = () => {
        const contactCopy = [...this.state.contacts];
        let random = Math.floor(Math.random()* contacts.length)
        contactCopy.push(contacts[random])
        contacts.splice(random,1)

        this.setState({
            ...this.state,
            contacts: contactCopy
        })
    }

    sortByPopularity = () => {
        const contactCopy = [...this.state.contacts];
        
    
        this.setState({
          ...this.state,
          contacts: contactCopy.sort((contact1, contact2) => contact2.popularity - contact1.popularity)
        })
      }

    sortByName = () => {
        const contactCopy = [...this.state.contacts];
        
    
        this.setState({
          ...this.state,
          contacts: contactCopy.sort((contact1, contact2) => contact1.name.localeCompare (contact2.name))
        })
      }

    deleteContact = (id) => {
        console.log((id));
        this.setState({
          ...this.state,
          contacts: this.state.contacts.filter(contact => contact.id !== id)
        })
      }

    render = () => {

    return(
        <div>
            <Button func={this.addContact}>Add Random Contact</Button>
            <Button func={this.sortByPopularity}>Sort By Popularity</Button>
            <Button func={this.sortByName}>Sort Name</Button>
            
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                {
                this.contactsArr().map(el => <ContacItems picture={el.pictureUrl} name={el.name} popularity={el.popularity} deletecont={this.deleteContact} id={el.id} key={el.id} />)  
                }
                    
                </tbody>
            </table>
        </div>
    )}
}

export default DynamicTable