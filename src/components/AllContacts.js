import React, {Component} from 'react'
import contacts from '../contacts.json'
import Contacts from './Contacts'

var contactsList = [...contacts]
var list = [...contacts].splice(0,5)

class AllContacts extends Component {
    
    constructor() {
        super()
        this.state = {
            contacts: list
        }
    }

    addRandomContact = () => {
        const newList = [...this.state.contacts]
        const indexArray = Math.floor(Math.random()*contactsList.length)
        newList.push(contactsList.splice(indexArray,1)[0])
        this.setState({contacts: newList})
    }

    nameSort = () => {
        const newList = [...this.state.contacts]
        newList.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: newList})
    }

    popularity = () => {
        const newList = [...this.state.contacts]
        newList.sort((a,b) => b.popularity-a.popularity)
        this.setState({contacts: newList})
    }

    deleteHandler = id => {
        const newList = [...this.state.contacts]
        const contactsIndex = newList.findIndex(item => item.id === id)
        newList.splice(contactsIndex, 1) 
        this.setState({contacts: newList})
    }

    render() {
        const listContacts =  this.state.contacts.map(item => (
            <Contacts/>
        ))
        return ( 
            <div className='container'>
                <h1>IronContacts</h1>
                <div className='buttons'>
                    <button onClick= {this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.nameSort}>Sort by Name</button>
                    <button onClick={this.popularity}>Sort by Popularity</button>
                </div>
                <div >
                    <table >
                       {listContacts} 
                    </table>
                </div>    
            </div>    
            )
    }
}

export default AllContacts