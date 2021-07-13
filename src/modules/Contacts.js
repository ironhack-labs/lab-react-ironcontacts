import { Component } from "react";
import contactsJson from '../contacts.json'
import Table from "./Table";
import Button from "./Button";

const baseContacts = [...contactsJson]
const contacts = baseContacts.splice(0, 5)




class Contacts extends Component {
        constructor() {
                super()
                this.state = {
                        contacts
                }
        }

        addRandomContact = () => {


                const [randomContact] = baseContacts.splice(Math.floor(Math.random() * baseContacts.length), 1)

                if (!randomContact) {
                        alert('NO QUEDAN CONTACTOS !!!')
                } else {
                        this.setState({
                                contacts: [...this.state.contacts, randomContact]
                        })
                }

        }

        sortByName = () => {
                this.setState({
                        contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
                })
        }

        sortByPopularity = () => {
                this.setState({
                        contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
                })
        }

        deleteRegister = (id) => {
                this.setState({
                        contacts: this.state.contacts.filter(contact => contact.id !== id)
                })
        }



        render() {
                return (
                        <>
                                <h1 style={{ textAlign: 'center' }}>IronContacts</h1>

                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>

                                        <Button name='Add random contact' fn={this.addRandomContact} />
                                        <Button name='Sort by name' fn={this.sortByName} />
                                        <Button name='Sort by popularity' fn={this.sortByPopularity} />

                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center' }} >


                                        <Table
                                                contacts={this.state.contacts}
                                                deleteRegister={this.deleteRegister} />

                                </div>
                        </>
                )
        }
}

export default Contacts