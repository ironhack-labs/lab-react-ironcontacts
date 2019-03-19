import React, { Component } from 'react'

import contacts from '../contacts.json'
import Row from './Row'

export default class MovieTable extends Component {
    constructor(){
        super()
        this.state = {
          actors: contacts.slice(0,5),
          sortedbyName: false,
          sortedbyPopularity: false
        }

    }


    // Handlers
    addActorHandler = () => {
        const randomActor = contacts[Math.floor(Math.random()*30)+5] 
        const actorlist = [...this.state.actors]
        actorlist.push(randomActor)
        this.setState({
            actors: actorlist  
        })
    }

    toggleNames = () => {
        this.setState({
            sortedbyName: !this.state.sortedbyName  
        })
        console.log("entra")
    }

    togglePopularity = () => {
        this.setState({
            sortedbyPopularity: !this.state.sortedbyPopularity  
        })
    }

    deleteActorHandler = actorIndex => {
        const actorsCopy = [...this.state.actors]  
        actorsCopy.splice(actorIndex, 1)
        this.setState({
            actors: actorsCopy  
        })
    }



    render() {
        let printlist = [...this.state.actors]

        if(this.state.sortedbyName){
            printlist.sort((a,b)=>a.name.localeCompare(b.name))
        }

        if(this.state.sortedbyPopularity){
            printlist.sort((a,b)=>(a.popularity<=b.popularity) ? 1:-1)
        }



        return (
            <div>
                <button onClick={this.addActorHandler}>Add random Actor</button>
                <button onClick={this.toggleNames}>Sort by Name!</button>
                <button onClick={this.togglePopularity}>Sort by Popularity!</button>
                <table>
                    <tbody>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th> 
                    <th>Popularity</th>
                    </tr>
                    {
                    printlist.map((actor,id) => {
                        return <Row key={id} {...actor} clickToDelete={() => this.deleteActorHandler(id)}/>
                    })
                    }
                    </tbody>
                </table>
            </div>
        )
  }
}
