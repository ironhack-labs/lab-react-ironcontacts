import './displayedActors.css'
import contacts from './../contacts.json'
import { Component } from 'react';

class DynamicActors extends Component {

    constructor() {
        super()
        this.state = {
            displayedActors: [],
            contacts
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

        console.log(randomItem);

        if (!filterElm) {
            this.state.displayedActors.push(randomItem)

            this.setState({
                displayedActors: this.state.displayedActors

            })

        } else {
            this.addRandom()
        }

    }

    render() {
        this.initRandom()

        return (
            <section>
                <h3>IronContacts</h3>
                <button onClick={() => this.addRandom()}>Add random actor</button>
                <table>
                    <thead>
                        <tr>
                            <th><strong>Picture</strong></th>
                            <th><strong>Name</strong></th>
                            <th><strong>Popularity</strong></th>
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