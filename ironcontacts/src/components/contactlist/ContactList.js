import React, { Component } from 'react'
import ContactItem from '../contactitem/ContactItem'
import contacts from './contacts.json'

class ContactList extends Component {

     constructor() {
        super()
        this.state = {
            contacts: [...contacts],
            visibleContacts: this.initVisible()

        }

    }

    initVisible() {
        return [...contacts].filter((elm,index) => index < 5)
    }

    addRandomContact = () => {
        const visibleC = this.state.visibleContacts
        const randomContact = this.state.contacts[Math.floor(Math.random()*this.state.contacts.length)]
        let canPush = true
        visibleC.forEach(elm => {
           canPush = (elm.id === randomContact.id) ? false : canPush
        })
        canPush ? visibleC.push(randomContact) : console.log("duplicate contact. Please try again")
        this.setState({visibleContacts: visibleC}) 
        
    }

    sortByName = () => {
        let visibleC = this.state.visibleContacts
        visibleC.sort((a,b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
             return 0;
          })
        this.setState({visibleContacts: visibleC})
    }

    sortByPopularity = () => {
        let visibleC = this.state.visibleContacts
        visibleC.sort((a,b) => b.popularity - a.popularity)
        this.setState({visibleContacts: visibleC})
    }

    removeMoviefromState = contactId => {
        let visibleC = this.state.visibleContacts
        visibleC = visibleC.filter(elm => elm.id !== contactId)
        this.setState({visibleContacts: visibleC})
    }
    

    render() {
        
        return (
            <>
            <div className="btn-group d-flex justify-content-center">
            <button onClick={this.addRandomContact} className="btn btn-light">Add Random Contact</button>
            <button onClick={this.sortByName} className="btn btn-light">Sort By Name</button>
            <button onClick={this.sortByPopularity} className="btn btn-light">Sort By Populartiy</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                 {this.state.visibleContacts.map(elm => <ContactItem key={elm.id} {...elm} removeContact={() => this.removeMoviefromState(elm.id)}  />)}
                </tbody>
            </table>
            </>
        )
    }
}

export default ContactList