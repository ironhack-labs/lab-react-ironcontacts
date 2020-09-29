import React, { Component } from 'react'
import contacts from './contacts.json'
import CelebrityCard from './CelebrityCard'


class CelebrityList extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.filter((list, i) => i < 5)
        }
    }

    addRandomCard = () => {
        if (this.state.contacts.length === contacts.length) return

        // Filtra las cartas que no estan incluidas en contacts
        const chooseCards = contacts.filter(el => !this.state.contacts.includes(el))

        const newCard = Math.floor(Math.random() * chooseCards.length)

        const newCardArr = this.state.contacts.map(el => el)

        newCardArr.push(chooseCards[newCard])

        this.setState({
            contacts: newCardArr
        })
    }

    sortByName = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => a.name < b.name ? -1 : 1)
        })
    }

    sortByPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => a.popularity > b.popularity ? -1 : 1)
        })
    }

    deleteActor = (cardId) => {
        this.setState({
            contacts: this.state.contacts.filter(el => el.id !== cardId)
        })
    }


    render() {

        return (
            <React.Fragment>
                <div>
                    <button onClick={this.addRandomCard}> (Add random contact) </button>
                    <button onClick={this.sortByName}> (Sort contacts by first letter) </button>
                    <button onClick={this.sortByPopularity}> (Sort contacts by popularity) </button>

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {this.state.contacts.map(el => <CelebrityCard key={el.id} name={el.name} pictureUrl={el.pictureUrl} popularity={el.popularity} deleteCard={() => { this.deleteActor(el.id) }} />)}
                </tbody>
            </React.Fragment>
        )
    }
}

export default CelebrityList