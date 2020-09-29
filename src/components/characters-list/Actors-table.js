import React, { Component } from 'react';
import ActorRow from './Actor-row'

import allActors from '../../contacts.json'

class CharacterTable extends Component {
    constructor() {
        super()
        this.state = {
            actorList: allActors.filter((elm, idx) => idx < 5)
        }
    }

    addRandomActor = () => {

        // If all actors are already added
        if (this.state.actorList.length === allActors.length) { return }

        // Array with available actors
        const actorsToChoose = allActors.filter(elm => !this.state.actorList.includes(elm))

        // Chosen actor index
        const newActorIndex = Math.floor(Math.random() * actorsToChoose.length)

        const newActorsArray = this.state.actorList.map(elm => elm)

        newActorsArray.push(actorsToChoose[newActorIndex])

        this.setState({
            actorList: newActorsArray
        })

    }

    sortByName = () => {

        this.setState({
            actorList: this.state.actorList.sort((a, b) => a.name < b.name ? -1 : 1)
        })
    }

    sortByPopularity = () => {

        this.setState({
            actorList: this.state.actorList.sort((a, b) => a.popularity < b.popularity ? 1 : -1)
        })
    }

    deleteActor = (actorId) => {

        this.setState({
            actorList: this.state.actorList.filter(elm => elm.id !== actorId)
        })
    }

    render() {



        return (
            <>
                <div className='header-buttons'>

                    <button onClick={this.addRandomActor}>{'Add Random Contact'}</button>
                    <button onClick={this.sortByName}>{'Sort by name'}</button>
                    <button onClick={this.sortByPopularity}>{'Sort by popularity'}</button>

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
                    <tbody>
                        {this.state.actorList.map(elm => <ActorRow key={elm.id} {...elm} deleteActor={() => { this.deleteActor(elm.id) }} />)}
                    </tbody>
                </table>
            </>
        )
    }
}

export default CharacterTable;