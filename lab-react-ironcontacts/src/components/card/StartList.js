import React, { Component } from 'react'

import contacts from '../../contacts.json'

import StarCard from './StarCard'

import './StarList.css'



class StarList extends Component {

    constructor() {
        super()
        this.state = {

            contactsList: contacts.slice(0, 5),


        }
    }




    addRandomContact = () => {

        const newContactList = this.state.contactsList
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)];

        if (randomContact.id != newContactList.map(elm => elm.id) ) {

            newContactList.push(randomContact)

        }

        this.setState({ contactsList: newContactList })

    }



    sortByName = () => {


        const orderedList = this.state.contactsList

        orderedList.sort(function (a, b) {

            if (a.name > b.name) {
                return 1;
            }

            if (a.name < b.name) {
                return -1;
            }

        })


        this.setState({ contactsList: orderedList })

    }


    sortByPopularity = () => {


        const orderedPopularityList = this.state.contactsList

        orderedPopularityList.sort(function (a, b) {

            if (a.popularity < b.popularity) {
                return 1;
            }

            if (a.popularity > b.popularity) {
                return -1;
            }

        })


        this.setState({ contactsList: orderedPopularityList })

    }


    deleteContact = contactID => {

        this.setState({ contactsList: this.state.contactsList.filter(elm => elm.id != contactID) })

    }



    render() {

        return (

            <>
                <div className="buttons-option">

                <button onClick={this.addRandomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
                    
                </div>

                <table className="table-contacts">

                    <thead className="table-head">

                        <tr>

                            <th>Fotografía</th>
                            <th>Nombre</th>
                            <th>Popularidad</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody className="table-body">

                        {this.state.contactsList.map(elm =>

                            <StarCard

                                key={elm.id}
                                name={elm.name}
                                pictureUrl={elm.pictureUrl}
                                popularity={elm.popularity.toFixed(2)}
                                deleteContact={() => this.deleteContact(elm.id)}
                            />)
                        }

                    </tbody>

                </table>
            </>

        )
    }
}

export default StarList