import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import contacts from './contacts/contacts.json'
import ContactDetails from '../ContactDetails/ContactDetails'

class CelebContacts extends Component {

        constructor() {
            super()
            this.state = {
                ironContacts: contacts.slice(0,5)
            }
        }

        removeContact = contactId => {

            this.setState({

                ironContacts: this.state.ironContacts.filter(elm =>elm.id !== contactId)
                    
            })
                
        }

        randomContact = () => {

            const randomizerContacts = contacts[Math.floor(Math.random() * contacts.length)]
    
            this.setState({
                ironContacts: [...this.state.ironContacts, randomizerContacts]
    
            })
        }    
        
        sortByName = () => this.setState(this.state.ironContacts.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) -1 )) 
        sortByPopularity = () => this.setState(this.state.ironContacts.sort((a, b) => (a.popularity < b.popularity) ? 1 : (a.popularity === b.popularity) -1 )) 

    
        
        render(){

            return(
                
                    <> 
                        <div className="btns-head">
                        <button className="btn btn-info round" onClick={this.randomContact}> Add Random Contact</button><button className="btn btn-info round" onClick={this.sortByName}> Sort By Name</button> <button className="btn btn-info round" onClick={this.sortByPopularity}> Sort By Popularity</button>
                        </div>
                        <table className='striped bordered hover my-table-style'>
                            <thead>
                                <tr className="table-info">
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Popularity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.ironContacts.map(elm => <ContactDetails key={elm.id} {...elm} remove={() => this.removeContact(elm.id)}  /> )}
                            </tbody>
                        </table>
                    </>
            )

        }


}

export default CelebContacts
