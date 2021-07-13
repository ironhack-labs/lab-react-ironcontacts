import React, {Component} from 'react'
import contacts from '../contacts.json'
import './first-five.css'

class Five extends Component {
    state = {
        contacts: contacts
    }

    addRandomContact = () =>{
        const {contacts} = this.state
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

        this.setState({
            contacts: [randomContact, ...contacts]
        })
    }

    sortByName = () =>{
        console.log("check")
        const {contacts} = this.state 
        let copyContacts = JSON.parse(JSON.stringify(contacts))
        copyContacts.sort((a,b) => {
            if (a.name > b.name ) {
                return 1
            }
            else if (a.name < b.name ) {
                return -1
            }
            else {
                return 0
            }
        })
        this.setState({
            contacts: copyContacts
        })
    }

    deleteContact = (i) => {
        console.log("check")
        const {contacts} = this.state 
        let copyContacts = JSON.parse(JSON.stringify(contacts))
        copyContacts.filter((contact, index) => {
            return index !== i
        })
        this.setState({
            contacts: copyContacts
        })
    }

    render() {
        return (
            <>
                <button onClick={this.addRandomContact}>Add random contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <div className="container1">
                    <h2>image</h2>
                    <h2>name</h2>
                    <h2>rating</h2>
                </div>
                {this.state.contacts.map((contact, i) => {
                    if(i < 5){
                        return  <div className="container"> 
                            <img src={contact.pictureUrl} alt='celebrity in question' width='50px'></img> 
                            <p key={contact.id}>{contact.name}</p>
                            <p>{contact.popularity}</p>
                            <button onClick={() => {this.deleteContact(i)}}>Delete</button>
                        </div> 
                    }
                    return null
                })}
            </>
        )
}
}

export default Five
