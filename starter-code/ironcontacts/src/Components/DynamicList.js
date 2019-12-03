import React, { Component } from 'react'
import contactJson from '../contacts.json'
import ContactCard from './ContactCard'
import './contacts.css';




class List extends Component {
    constructor() {
        super()
        this.state = {
            statusName: true,
            statusProp: true,
            contacts: contactJson, 
            fiveContact: contactJson.slice(0,5),

        }
    }


    addOne = () => {

        const id = Math.floor(Math.random() * (contactJson.length - 5)) + 5
        const contactCopy = [...this.state.fiveContact]

        contactCopy.push(contactJson[id])
        this.state.contacts.splice(id, 1)


        this.setState( { fiveContact: contactCopy} )

        console.log(id)

    }

    sortByName = () => {

        const sortedContactCopy = [...this.state.fiveContact]
        
        sortedContactCopy.sort(
           this.state.statusName ? (a, b) => a.name.localeCompare(b.name) : (a, b) => b.name.localeCompare(a.name) 
           )

        this.setState( 
            {fiveContact:sortedContactCopy, statusName: !this.state.statusName } 
        )

    }


    sortByPopularity = () => {

        const sortedContactCopy = [...this.state.fiveContact]
        
        sortedContactCopy.sort(
            this.state.statusProp ? (a, b) => (a.popularity - b.popularity) : (a, b) => (b.popularity - a.popularity) 
        )

        this.setState( 
            { fiveContact:sortedContactCopy, statusProp: !this.state.statusProp} 
            )

    }

    deleteOne = id => {

        const sortedContactCopy = [...this.state.fiveContact]

        sortedContactCopy.splice(id, 1)

        this.setState({ fiveContact: sortedContactCopy })
    }

    render() {
		return (
        <>

        <button className="btn btn-small btn-dark" onClick={this.addOne} >Add Random Contact</button>
        <button className="btn btn-small btn-dark" onClick={this.sortByName}>Sort by Name</button>
        <button className="btn btn-small btn-dark" onClick={this.sortByPopularity}>Sort by Popularity</button>

        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
                    { this.state.fiveContact.map((elm,idx) => <ContactCard {...elm} key={idx} deleteContact={() => this.deleteOne(idx)}/>) }
            </tbody>
        </table>


        </>
        )

        }
} 

export default List