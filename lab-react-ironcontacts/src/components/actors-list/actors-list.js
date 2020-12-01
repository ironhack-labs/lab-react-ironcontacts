import React, { Component } from 'react'
import contacts from '../../contacts.json'
import ActorCard from '../actor-card/actor-card'
import './actors-list.css'

class ActorsList extends Component {
    constructor() {
        super()

        this.state = {
            actors: [...contacts].splice(0, 5),
            firstActors: []
        }
    }

    addRandomActor = () => {

        const randomIndex = Math.floor(Math.random() * contacts.length)
        const newActor = contacts[randomIndex]

        if (!this.state.actors.includes(newActor)) {
            this.state.actors.push(newActor)
        } else {
            this.addRandomActor()
        }


        this.setState({
            actors: this.state.actors
        })

    }
    sortByName = () => {

        const sortedArray = this.state.actors.sort((a, b) => {
            console.log(a.name)
            if (a.name < b.name) {
                return -1
            }
            else if (a.name > b.name) {
                return 1
            } else {

                return 0
            }
        })
        this.setState({
            actors: sortedArray
        })
    }
    sortByPopularity = () => {

        const sortedArray = this.state.actors.sort((a, b) => {
            return b.popularity - a.popularity
        })
        this.setState({
            actors: sortedArray
        })
    }
    deleteActor = actorId => {
        const resultArray = this.state.actors.filter(elm => elm.id !== actorId)

        this.setState({
            actors: resultArray
        })
    }


    render() {

        return (

            <>
                <div className="buttons">

                    <button className="btn btn-dark actionBtn" onClick={this.addRandomActor}>Add Random Actor</button>
                    <button className="btn btn-dark actionBtn" onClick={this.sortByName}>Sort by name</button>
                    <button className="btn btn-dark actionBtn" onClick={this.sortByPopularity}>Sort by popularity</button>
                </div>

                <table className='table table-dark actorsTable'>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {this.state.actors.map(elm => <ActorCard key={elm.id} deleteActor={() => this.deleteActor(elm.id)} name={elm.name} picture={elm.pictureUrl} popularity={elm.popularity} />)}

                </table>
            </>

        )
    }
}

export default ActorsList