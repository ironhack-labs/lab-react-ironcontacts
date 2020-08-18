import React from 'react'
import contacts from '../contacts.json';
import ContactDetails from './ContactDetails';

class Contacts extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            contactList: contacts.slice(0,5)
        }
    }

    handleAdd = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
        this.setState({
            contactList: cloneContacts
        })
    }

    sortName = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })
        this.setState({
            contactList: cloneContacts,
        })
    }

    sortPop = () => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.sort((a,b) => {
            if (b.popularity < a.popularity){
                return -1
            }
            else if (b.popularity > a.popularity){
                return 1
            }
            return 0
        })
        this.setState({
            contactList: cloneContacts,
        })
        
    }

    handleDelete = (id) => {
        let cloneContacts = [...this.state.contactList]
        cloneContacts.splice(id, 1)
        this.setState({
            contactList: cloneContacts
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>Add random</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPop}>Sort by popularity</button>
                <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.contactList.map((contact, i) => {
                        return <ContactDetails 
                        contact={contact} 
                        key={i}
                        id={i}
                        onDelete={this.handleDelete}
                        />
                    })
                }
                </tbody>
            </table>
                
            </div>
        )
    }
}

export default Contacts