import React from 'react';
import { Component } from 'react'
import Contacts from '../components/contacts/Contacts'
import contactsdata from "../contacts.json"

class FamousList extends Component {

    constructor() {
        super()
        this.state = {
            contactslist: contactsdata,
            fivecontacts: contactsdata.slice(0, 5)
        }
    }

    randomFamous() {
        const random = Math.floor(Math.random() * contactsdata.length)
        const contactsCopy = [...this.state.fivecontacts]

        contactsCopy.push(contactsdata[random])

        this.setState({
            fivecontacts: contactsCopy
        })
    }

    sortBYName(){
        const sortcontacts = [...this.state.fivecontacts]
       sortcontacts.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0) 
        // sortcontacts.sort((a, b) => {
        //     if (a.name < b.name) { return -1 }
        //     else if (a.name > b.name) { return 1 }
        //     else { return 0 }
        // })

        this.setState({
            fivecontacts: sortcontacts
        })
    }

    sortByPopularity(){
        const sortcontacts = [...this.state.fivecontacts]
        sortcontacts.sort((a, b) => b.popularity - a.popularity ) // me he liado mucho aqui, hasta que me ha salido...

        this.setState({
            fivecontacts: sortcontacts
        })

    }
    deleteFamous(famousId){
        this.setState({
            fivecontacts: this.state.fivecontacs.filter(elm => elm._id !== famousId)
        })

    }


    render() {

        //const totalcontacts = this.state.fivecontacts Teo no consigo borrarlo......
        return (
            <div>
                <h1>Iron Contacts</h1>
                <button onClick={() => this.randomFamous()}>Añade un famoso</button>
                <button onClick={() => this.sortBYName()}>Ordénalos alfabéticamente</button>
                <button onClick={() => this.sortByPopularity()}>Ordénalos por pupularidad</button>
                {/* {totalcontacts.map(elm => <Contacts {...elm} removeFamous={() => this.deleteFamous(elm._id)} key={elm._id} />)} */}

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    {this.state.fivecontacts.map(elm => <Contacts {...elm} />)}
                </table>
            </div>
        )
    }

}

export default FamousList
