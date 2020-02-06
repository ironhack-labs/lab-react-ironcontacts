import React, {Component} from 'react'
import ContactItem from './ContactItem'
import contacts from './contacts.json'
import './Contacts.css'
import Random from '../buttons/Random'
import Order from '../buttons/Order'
import OrderPopularity from '../buttons/OrderPopularity'

class ContactList extends Component {
    state = {
        contacts: contacts.slice(0, 5) // Pinta de contacts.jason, los 5 primeros
    }

onClickAddRandom() {

    const randomItem = contacts[Math.floor(Math.random()*(contacts.length -1))]; // Devuelve un contacto random
    if(this.state.contacts.includes(randomItem)) {
        this.onClickAddRandom()
    }
    this.state.contacts.push(randomItem) // Pushea el contact random al array de los 5
    
    this.setState({
        contacts: this.state.contacts // Actualizas el array insertando randomItem (el nuevo elemento aleatorio)  
    })

}

onClickOrderByName() {

    this.setState({
        contacts: this.state.contacts.sort((a, b) =>  a.name.localeCompare(b.name)) // En click pushea el contact random
    })

}

onClickOrderByPopularity() {

    this.setState({
        contacts: this.state.contacts.sort((a, b) =>  b.popularity - a.popularity) // En click pushea el contact random
    })

}



onClickDeleteContact(contact) {
    this.setState({
        contacts: this.state.contacts.filter(c => c.id !== contact.id) // Filtra y saca del array un 
    })
}



render(){
    const contactsList = this.state.contacts.map((contact, index) => (
       <ContactItem
       key={index}
       {...contact}
       onClickDeleteContact = {() => this.onClickDeleteContact(contact)}
       /> 
    ))

    return (
    <div className="">
        <div>
            <Random addRandom={() => this.onClickAddRandom() } />
            <Order addOrder={() => this.onClickOrderByName() } />
            <OrderPopularity addOrderPopularity = {() => this.onClickOrderByPopularity() } />
        </div>  
        {contactsList.length > 0 ? contactsList : 'Loading...'}
        
    </div>   
    )
}


}

export default ContactList