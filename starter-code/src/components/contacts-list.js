import React, { Component } from 'react'
import contacts from '../contacts.json'

class ContactsList extends Component {
    constructor () {
        super()
        this.state = {
            contactsInfo: [
                {picture: contacts[0].pictureUrl, name: contacts[0].name, popularity: contacts[0].popularity },
                {picture: contacts[1].pictureUrl, name: contacts[1].name, popularity: contacts[1].popularity },
                {picture: contacts[2].pictureUrl, name: contacts[2].name, popularity: contacts[2].popularity },
                {picture: contacts[3].pictureUrl, name: contacts[3].name, popularity: contacts[3].popularity },
                {picture: contacts[4].pictureUrl, name: contacts[4].name, popularity: contacts[4].popularity },                
            ]
        }
    }
    addRandomContact = () => {
        const randomNumber = Math.floor(Math.random() * 100 ) + 4
        const contactsInfoCopy = [...this.state.contactsInfo]
        contactsInfoCopy.push({picture: contacts[randomNumber].pictureUrl, name: contacts[randomNumber].name, popularity: contacts[randomNumber].popularity})
        this.setState({
            contactsInfo: contactsInfoCopy
        })
    
    }
    sortByName = () => {
        let contactsInfoCopy = [...this.state.contactsInfo]
        contactsInfoCopy.sort(function(a,b){
            if (a.name > b.name){
                return 1
            }
            if (a.name < b.name) {
                return -1
            }
            return 0
        })
        this.setState({
            contactsInfo: contactsInfoCopy
        })
    
    }
    sortByPopularity = () => {
        const contactsInfoCopy = [...this.state.contactsInfo]
        contactsInfoCopy.sort(function(a,b){
            if (a.popularity > b.popularity){
                return 1
            }
            if (a.popularity < b.popularity) {
                return -1
            }
            return 0
        })
        this.setState({
            contactsInfo: contactsInfoCopy
        })
    }

    deleteContact = idx => {
        const contactsInfoCopy = [...this.state.contactsInfo]
        contactsInfoCopy.splice(idx,1)
        this.setState({
            contactsInfo: contactsInfoCopy
        })
    }

    render() {
        const listContacts = [...this.state.contactsInfo]
        return (
            <div className = "container info">
                <div className = "row">
                <div className = "col-12">
                    <h1>Iron Contacts</h1>
                </div>
                <div className = "col-12">
                <button className="btn" onClick={this.addRandomContact} >Add random contact</button>
                <button className="btn" onClick={this.sortByName} >Sort by Name</button>
                <button className="btn" onClick={this.sortByPopularity} >Sort by Popularity</button>
                </div>
                <div className = "col-12 align-items-center justify-content-between">
                         <h2>Picture</h2>
                         <h2>Name</h2>
                         <h2>Popularity</h2>
                         <h2>Action</h2>
                </div>
                {
                listContacts.map((elm, idx) => 
                    
                     <div key = {idx} className = "col-12 align-items-center columns justify-content-between">
                         <img className ="photos" src = {elm.picture}></img>
                         <h2>{elm.name}</h2>
                         <h3>{elm.popularity}</h3>
                         <button className = "btn" onClick = {()=>this.deleteContact(idx)}>Delete</button>
                     </div>
                    
                    )
                }
                </div>
            </div>
        )
    }
}
export default ContactsList