import React, { Component } from 'react'
import contacts from '../contacts.json'
import List from './List'

class ActorsList extends Component {
    constructor() {
        super()
        this.state = {
            contactsInfo: [
                { name: contacts[0].name, pictureUrl: contacts[0].pictureUrl, popularity: contacts[0].popularity },
                { name: contacts[1].name, pictureUrl: contacts[1].pictureUrl, popularity: contacts[1].popularity },
                { name: contacts[2].name, pictureUrl: contacts[2].pictureUrl, popularity: contacts[2].popularity },
                { name: contacts[3].name, pictureUrl: contacts[3].pictureUrl, popularity: contacts[3].popularity },
                { name: contacts[4].name, pictureUrl: contacts[4].pictureUrl, popularity: contacts[4].popularity }
            ]
        }

    }

    deleteAnActor = idx => {

        const actorsCopy = [...this.state.contactsInfo]
        actorsCopy.splice(idx, 1)
        this.setState({
            contactsInfo: actorsCopy
        })
    }

    randomActor = () => {

        const actorsCopy = [...this.state.contactsInfo]
        let randomActor = Math.floor(Math.random() * (contacts.length))

        actorsCopy.push(contacts[randomActor])
        this.setState({
            contactsInfo: actorsCopy
        })
    }

    sortActorName = () => {

        function dynamicSort(property) {
            var sortOrder = 1;

            if (property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }

            return function (a, b) {
                if (sortOrder === -1) {
                    return b[property].localeCompare(a[property]);
                } else {
                    return a[property].localeCompare(b[property]);
                }
            }
        }

        const actorsCopy = [...this.state.contactsInfo]

        actorsCopy.sort(dynamicSort("name"))

        this.setState({
            contactsInfo: actorsCopy
        })
    }

    sortActorPopularity = () => {


        const actorsCopy = [...this.state.contactsInfo]

        actorsCopy.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            contactsInfo: actorsCopy
        })
    }

    render() {
        const actorsCopy = [...this.state.contactsInfo]
        return (
            <React.Fragment>

                <h1>IronContacts</h1>
                <div className="container marg">
                    <div className="row">
                        <div className="col-md-4"><button onClick={this.randomActor}>Add Random</button></div>
                        <div className="col-md-4"><button onClick={this.sortActorName}>Sort Name</button></div>
                        <div className="col-md-4"><button onClick={this.sortActorPopularity}>Sort Popularity</button></div>
                    </div>
                </div>
                <div>

                    {
                        actorsCopy.map((elm, idx) => {
                            return <List key={idx} {...elm} actorName={elm.name} actorPic={elm.pictureUrl} actorPopularity={elm.popularity} deleteActor={() => this.deleteAnActor(idx)} />
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ActorsList