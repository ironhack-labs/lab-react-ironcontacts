import contactsJSON from '../contacts.json';
import React, { Component } from 'react';
let toDisplay = contactsJSON.slice(0,5);


class Contacts extends Component {
    state = {
        contacts: contactsJSON,
        toDisplay : toDisplay
    }
    handleAdd = () => {
        const {contacts, toDisplay} = this.state;

        let randomIndex = Math.floor(Math.random() * contacts.length)
        let randomElement = contacts[randomIndex];

        this.setState({
            toDisplay: [randomElement, ...toDisplay]
        })
    }

    sortByName = () => {
        const { toDisplay} = this.state;

        let clonedContacts = JSON.parse(JSON.stringify( toDisplay ))
        clonedContacts.sort((a,b) => {
            if (a.name>b.name) {
                return 1
            }
            else if (a.name<b.name) {
                return -1
            }
            else {
                return 0
            }
        })
        
        // update state
        this.setState({
            toDisplay: clonedContacts
        })

    };

    sortByPopularity = () => {
        const {toDisplay} = this.state;

        let clonedContacts = JSON.parse(JSON.stringify( toDisplay ))
        clonedContacts.sort((a,b) => {
            if (a.popularity>b.popularity) {
                return 1
            }
            else if (a.popularity<b.popularity) {
                return -1
            }
            else {
                return 0
            }
        })
        
        // update state
        this.setState({
            toDisplay: clonedContacts
        })

    }
    
    handleDelete = (index) => {
        const {toDisplay} = this.state;

        let filteredContacts = toDisplay.filter((contact, i) => {
            return i !== index
        })

        this.setState({
            toDisplay: filteredContacts
        })
    }

    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.handleAdd} >Add random contact</button>
                <button onClick={this.sortByName} >Sort by name</button>
                <button onClick={this.sortByPopularity} >Sort by popularity</button>

                {<div class="table-wrapper"> 
                    <table width="60%" class="table">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        
                        {
                            this.state.toDisplay.map((singleContact, index) => {
                               
                                return (
                                   
                                        <tr key={index}>
                                            <th> <img width="60px" src={singleContact.pictureUrl} /> </th>
                                            <th> {singleContact.name} </th>
                                            <th> {singleContact.popularity} </th>
                                            <th> <button onClick= { () => {this.handleDelete(index)}} >Delete</button> </th>
                                        </tr>
                                   
                                )
                                
                            
                            })
                        }
                        
                    </table>      
                </div>             
                }
            </div>
        )
    }

}


export default Contacts;