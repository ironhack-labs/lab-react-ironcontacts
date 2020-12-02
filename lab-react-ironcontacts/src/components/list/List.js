import React, { Component } from 'react'
import contacts from './../../contacts.json'

import './List.css'
import Title from '../title/Title'
import Row from '../row/Row'


class List extends Component {

    constructor(){
        super()
            this.state = {
                actor: contacts.slice(0,5)
            } 
    }


    randomActor = () => {

        const actorCopy = [...this.state.actor]

        const randomCeleb = contacts[(Math.floor(Math.random() * contacts.length))]
                
        console.log(randomCeleb)

        actorCopy.push(randomCeleb)
  
        this.setState({ actor: actorCopy })

        console.log(actorCopy)
    }


    sortName = () => {
        const actorCopy = [...this.state.actor]
        
        actorCopy.sort((a,b) => a.name.localeCompare(b.name))

        this.setState({ actor: actorCopy })

        console.log(actorCopy)
    }


    sortPopularity = () => {
        const actorCopy = [...this.state.actor]
        
        actorCopy.sort((a,b) => b.popularity - a.popularity)
        
        this.setState({ actor: actorCopy })

        console.log(actorCopy)
    }

    
    removeActor = actorId => {

        this.setState({ actor: this.state.actor.filter(elm => elm.id !== actorId) })
        
    }


    render() {
  
        return (
            <section className="frame">
                <Title></Title>
                  
            <table className="table-group">
                <thead>
                    <tr className="button-row">
                        <th><button onClick= {this.randomActor} className="head-button" name="Add random contact" type="submit">Add random contact</button></th>
                        <th><button onClick= {this.sortName} className="head-button" name="Sort by name" type="submit">Sort by name</button></th>
                        <th><button onClick= {this.sortPopularity} className="head-button" name="Sort by popularity" type="submit">Sort by popularity</button></th>
                    </tr>

                    <tr className="list-head">
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
              
                <tbody>{this.state.actor.map(elm => <Row key={elm.id} deleteActor={()=> this.removeActor(elm.id)} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>)}</tbody>
           
            </table>
            </section>
                     
        )
    }
}


export default List