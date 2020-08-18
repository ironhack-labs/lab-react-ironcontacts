import React from 'react'
import ContactDetail from './ContactDetail'

class Contacts extends React.Component {
    constructor(props){
        super(props)
        let contacts = []
        for (let i=0; i<5; i++) {
            contacts.push(this.props.list[i])
        }

        this.state = {
            contacts: contacts
        }
    }


    handleAddRandom = () => {
        let randomNumber = Math.floor(Math.random() * this.props.list.length);
        console.log(randomNumber)
        let randomContact = this.props.list[randomNumber]

        this.setState({
            contacts: [...this.state.contacts, randomContact],
        })
    }

    handleSortName = () => {
        let cloneContacts = [...this.state.contacts]
        cloneContacts.sort((a, b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })
        this.setState({
            contacts: cloneContacts
        })
    }

    handleSortPop = () => {
        let cloneContacts = [...this.state.contacts]
        cloneContacts.sort((a, b) => {
            if (a.popularity > b.popularity){
                return -1
            }
            else if (a.popularity < b.popularity){
                return 1
            }
            return 0
        })
        this.setState({
            contacts: cloneContacts
        })
    }

    handleDelete = (id) => {
        let cloneContacts = [...this.state.contacts]
        cloneContacts.splice(id, 1)
        this.setState({
            contacts: cloneContacts
        })
    }


    render() {
        return <div>
        
            {
                this.state.contacts.map((contact, i) => {
                    return <ContactDetail key={i} contact={contact} id={i} onDelete={this.handleDelete}/>
                })
            }
            <button onClick={this.handleAddRandom}>Add Random Contact</button>
            <button onClick={this.handleSortName}>Sort By Name</button>
            <button onClick={this.handleSortPop}>Sort By Popularity</button>
        </div>
    }
}

export default Contacts