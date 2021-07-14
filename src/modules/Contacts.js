import { Component } from "react";
import contactsJson from '../contacts.json'
import Table from "./Table";
import Button from "./Button";

const fullContacts = [...contactsJson]

let baseContacts = [...fullContacts]
let contacts = baseContacts.splice(0, 5)




class Contacts extends Component {
        constructor() {
                super()
                this.state = {
                        contacts,
                        emptyList: false
                }
        }


        reStart = () => {
                baseContacts = [...fullContacts]
                contacts = baseContacts.splice(0, 5)

                this.setState({
                        contacts: contacts,
                        emptyList: false
                })
        }


        addRandomContact = () => {

                const [randomContact] = baseContacts.splice(Math.floor(Math.random() * baseContacts.length), 1)

                if (!randomContact) {

                        alert('No more contacts to add, you can reset if needed')

                        this.setState({
                                emptyList: true
                        })

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

                                        <Button name={this.state.emptyList ? 'Reset Contacts' : 'Add random contact'} fn={!this.state.emptyList ? this.addRandomContact : this.reStart} />


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