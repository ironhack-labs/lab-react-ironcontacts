import React from "react";
import ListActor from "./../../contacts.json";
import './ActorList.css'


class ActorList extends React.Component {

    state = {
        actor: ListActor.slice(0, 5)
    }

    displayActor = () => {
        const limitedList = this.state.actor

        return (
            limitedList.map(({ name, popularity, pictureUrl, id }, idx) => {
                return (
                    <section>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td><img className='imageO' src={pictureUrl} alt={name} width="50px" /></td>
                                    <td>{name}</td>
                                    <td>{popularity}</td>
                                    <td><button className='buttonO' onClick={() => this.deleteActor(id)}>Delete</button></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </section>
                )
            })
        )
    }

    addActor = () => {
        const actorCopy = [...this.state.actor];
        actorCopy.push(ListActor[Math.floor(Math.random() * ListActor.length)])
        this.setState({
            ...this.state,
            actor: actorCopy
        })
    }

    sortName = () => {
        const actorCopy = [...this.state.actor]
        this.setState({
            ...this.state,
            actor: actorCopy.sort((name1, name2) => name1.name.localeCompare(name2.name))
        })
    }

    sortPopularity = () => {
        const actorCopy = [...this.state.actor]
        this.setState({
            ...this.state,
            actor: actorCopy.sort((a, b) => b.popularity - a.popularity)
        })
    }

    deleteActor = (id) => {

        this.setState({
            ...this.state,
            actor: this.state.actor.filter(actors => actors.id !== id)
        })
    }

    render() {
        return (
            <div>
                <button className='buttonO' onClick={() => this.addActor()}>Add</button>
                <button className='buttonO' onClick={() => this.sortName()}>Sort by name</button>
                <button className='buttonO' onClick={() => this.sortPopularity()}>Sort by popularity</button>
                {this.displayActor()}
            </div>
        )
    }
}
export default ActorList;