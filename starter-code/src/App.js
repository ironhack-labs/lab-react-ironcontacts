import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Actor from './components/Actor/Actor';


class App extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [...contacts].splice(0, 5)

        }
    }



    addRandomContact() {

        const otherContacts = [...contacts].filter((contact) => !this.state.contacts.includes(contact));
        this.state.contacts.push(otherContacts[Math.floor(Math.random() * otherContacts.length)])
        this.setState({
            ...this.state.contacts
        })

    }

    sortByName() {

        this.setState({
            ...this.state.contacts.sort((a, b) => {
                return a.name.localeCompare(b.name);
            })
        })
    }

    sortByPopularity() {

        this.setState({
            ...this.state.contacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)

        })

    }

    deleteContact = (idx) => {
    
        this.setState({
            ...this.state.contacts.splice(idx, 1),  
         

        })
    }

    render() {
        return (
            <div className="App" >
                <h1>IronContacts</h1>
                <button onClick={() => this.addRandomContact()}>Add random Contact</button>
                <button onClick={() => this.sortByName()}>Sort by name</button>
                <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
                <table className="tabla" >
                    <thead>

                        <tr>
                            <th> Picture </th>
                            <th> Name </th>
                            <th> Popularity </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map((actor, idx) =>

                                <Actor url={actor.pictureUrl}
                                    name={actor.name}
                                    sergio={actor.popularity}
                                    key={idx}
                                    delete={this.deleteContact}
                                />

                            )
                        }
                    </tbody>

                </table>

            </div>
        );
    }
}

export default App;