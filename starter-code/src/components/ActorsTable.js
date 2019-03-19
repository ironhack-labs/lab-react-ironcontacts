import React, {Component} from "react"
import Actor from "./Actor.js"
import contacts from '../contacts.json'

class ActorsTable extends Component {

    constructor () {
        super ()

        this.state = {
            actors: contacts.filter((actor, idx) => idx <= 4)
        }

    }


    addRandom = () => {

        const getRandomActor = () => Math.floor(Math.random() * (contacts.length - 5) + 5)
        const actorsCopy = [...this.state.actors]
        actorsCopy.push(contacts[getRandomActor()])
        this.setState({
            actors: actorsCopy
        })

    }

    sortByName = () => {
        let actorsCopy = [...this.state.actors]
        actorsCopy = actorsCopy.sort( (a,b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })     
        this.setState({
            actors: actorsCopy
        })
    }

    sortByPopularity = () => {
        let actorsCopy = [...this.state.actors]
        actorsCopy = actorsCopy.sort( (a,b) => {
            if (a.popularity < b.popularity) {
                return 1;
            }
            if (a.popularity > b.popularity) {
                return -1;
            }
            return 0;
        })     
        this.setState({
            actors: actorsCopy
        })
    }

    deleteActorHandler = actorIndex => {
        const actorsCopy = [...this.state.actors]
        actorsCopy.splice(actorIndex, 1)
        this.setState({
            actors: actorsCopy  
        })
    }

    render () {

        return (
            <section className="actors-table">
                <div className="buttons">
                    <button onClick={this.addRandom}>Add Random</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
                        {
                            this.state.actors.map((actor,idx) => {
                                    return <Actor key={idx} 
                                    {...actor}
                                    clickToDelete={() => this.deleteActorHandler(idx)} 
                                    />
                            })
                        }
                    </tbody>
                </table>
            </section>
        )
    }
}


export default ActorsTable;
