import React, { Component } from 'react'
import './ActorsList.css'

import contacts from '../../contacts.json';

class ActorsList extends Component {

    constructor() {
        super()
        this.state = {
            actors: contacts.slice(0, 5)
        }
    }

    
    addActor = () => {
        let newActor = contacts[Math.floor(Math.random() * contacts.length)]
        const actorsCopy = [...this.state.actors]
        actorsCopy.push(newActor)
        this.setState({actors: actorsCopy})
    }

    sortName = () => {
        let actorsCopy = [...this.state.actors]
        actorsCopy.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ actors: actorsCopy })
    }

    sortPopularity = () => {
        let actorsCopy = [...this.state.actors]
        actorsCopy.sort((a, b) => b.popularity - a.popularity)
        this.setState({ actors: actorsCopy })
    }

    deleteActor = id => {
        let actorsCopy = [...this.state.actors]
        actorsCopy.splice(id, 1)
        this.setState({ actors: actorsCopy })
    }


    render() {
     
        return (
            <main>
                <button onClick={this.addActor}>Add Random Contact</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by popularity</button>

                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>

                    {this.state.actors.map((elm, idx) =>
                        <tr key={idx}>
                            <td><img src={elm.pictureUrl} alt="actor img"/></td>
                            <td>{elm.name}</td>
                            <td>{elm.popularity.toFixed(2)}</td>
                            <td><button onClick = {() => this.deleteActor(idx)}>Delete</button></td>
                        </tr>
                    )}
                </table>

            </main>

        )
    }

}

export default ActorsList