import './displayedActors.css'
import contacts from './../contacts.json'
import { Component } from 'react';

class DynamicActors extends Component {

    constructor() {
        super()
        this.state = {
            displayedActors: [],
            contacts,
            sorted: "null"
        }
    }




    initRandom() {
        if (this.state.displayedActors.length == 0) {
            for (let i = 0; i < 5; i++) {
                this.state.displayedActors.push(this.state.contacts[i])
            }
        }
    }

    addRandom() {
        let randomItem = this.state.contacts[Math.round(Math.random() * contacts.length)]

        const filterElm = this.state.displayedActors.some(elm => elm.id === randomItem.id)



        if (!filterElm) {
            this.state.displayedActors.push(randomItem)

            this.setState({
                displayedActors: this.state.displayedActors
            })

        } else {
            this.addRandom()
        }
    }

    sortByName() {
        this.state.displayedActors.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({
            displayedActors: this.state.displayedActors,
            sorted: "byName"
        })
    }

    sortByPop() {
        this.state.displayedActors.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            displayedActors: this.state.displayedActors,
            sorted: "byPopularity"
        })
    }

    deleteActor(id) {
        this.setState({
            displayedActors: this.state.displayedActors.filter(elm => elm.id !== id)
        })
    }

    render() {
        this.initRandom()

        return (
            <section>
                <h3>IronContacts</h3>
                <button onClick={() => this.addRandom()}>Add random actor</button>
                <button onClick={() => this.sortByName()}>Sort by name</button>
                <button onClick={() => this.sortByPop()}>Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Picture</strong></th>
                            <th><strong>Name</strong></th>
                            <th><strong>Popularity</strong></th>
                            <th><strong>Action</strong></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.displayedActors.map(elm => {
                                return (
                                    <tr className="data-table" key={elm.id}>
                                        <td className="img-actor"><img src={elm.pictureUrl}></img></td>
                                        <td>{elm.name}</td>
                                        <td>{Math.round(elm.popularity * 100) / 100}</td>
                                        <td><button onClick={() => this.deleteActor(elm.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
        )
    }
}

export default DynamicActors