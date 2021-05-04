import contacts from "./contacts.json";
import { Component } from 'react'
import './List.css'

class List extends Component {
    constructor() {
        super()
        this.state = {
            contactInfo: contacts.filter((elm, index) => index < 5),
        }
    }

    addRandomContact() {
        const randomNumber = Math.floor(Math.random() * contacts.length) + 5
        this.state.contactInfo.push(contacts[randomNumber])
        this.setState({})
    }

    sortByName() {
        this.setState({
            contactInfo: this.state.contactInfo.sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    sortByPopularity() {
        this.setState({
            contactInfo: this.state.contactInfo.sort((a, b) => b.popularity - a.popularity)
        })
    }

    delete(contactId) {
        this.setState({
            contactInfo: this.state.contactInfo.filter(elm => elm.id !== contactId)
        })
    }

    render() {

        return (
            <section>
                <button onClick={() => this.addRandomContact()}>{'Añadir contacto random'}</button>
                <button onClick={() => this.sortByName()}>{'Sort by name'}</button>
                <button onClick={() => this.sortByPopularity()}>{'Sort by popularity'}</button>

                <div className="title">
                    <h2>Picture</h2>
                    <h2>Name</h2>
                    <h2>Popularity</h2>
                    <h2>Delete</h2>
                </div>

                {this.state.contactInfo.map(elm =>
                (
                    <article className="list" key={elm.id}>
                        <img src={elm.pictureUrl}></img>
                        <h2>{elm.name}</h2>
                        <p>{elm.popularity.toFixed(2)}</p>
                        <button onClick={() => this.delete(elm.id)}>{'Delete'}</button>
                    </article>
                ))
                }
            </section>
        )
    }


}

export default List

