import { Component } from 'react'
import contacts from './contacts.json'
import './Contacts.css'
import Profile from './Profile'

class MainContacts extends Component {

    constructor() {
        super()
        this.state = {
            mainContacts: contacts,
            showedContacts: contacts.slice(0, 5)
            
        }
    }

    addRandom() {

            const contactsLeft = this.state.mainContacts.filter( (elm, idx) =>  idx>4 ? elm : null)
            const random = Math.floor(Math.random() * contactsLeft.length-1)
            const copy = [...this.state.showedContacts]
            copy.push(contactsLeft[random])
            
            this.setState({
            showedContacts: copy
        })    
    }

    sortByName() {
            const copy = [...this.state.showedContacts]
            copy.sort(function (a, b) {
                if (a.name < b.name) { return -1 }
                if (a.name > b.name) { return 1 }
                return 0
            })
            console.log(copy)
            this.setState({
            showedContacts: copy
        })
    }

    sortByRate() {
            const copy = [...this.state.showedContacts]
            copy.sort(function (a, b) {
                if (a.popularity < b.popularity) { return 1 }
                if (a.popularity > b.popularity) { return -1 }
                return 0
            })
            console.log(copy)
            this.setState({
            showedContacts: copy
        })
    }

    deleteContact(contactId) {
        this.setState({
            showedContacts: this.state.showedContacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {

        return(
        <section>
            <h1>IronContacts</h1>
            <button onClick={() => this.addRandom()}>Add Random Contact</button>
            <button onClick={() => this.sortByName()}>Sort By Name</button>
            <button onClick={() => this.sortByRate()}>Sort By Popularity</button>
            <p className='header'>Picture    | Name    |    Popularity</p>
            {this.state.showedContacts.map(elm => <Profile key={elm.id} deleteContact={() => this.deleteContact(elm.id)} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} id={elm.id}/>)}

        </section>
        )
    }
}

export default MainContacts