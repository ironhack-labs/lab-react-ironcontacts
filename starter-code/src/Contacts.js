import React, { Component } from 'react'
import contacts from './contacts.json';

export default class Contacts extends Component{
    state = {
        actorsArr: [...contacts].splice(0, 5)
    }

    buttonRandom = () => {
        const random = Math.floor(Math.random() * contacts.length)
        const newActor = contacts[random]

        this.setState({
            actorsArr: [...this.state.actorsArr, newActor]
        })
    }

    buttonName = () => {
        const actorsCopy = [...this.state.actorsArr]
        actorsCopy.sort((a,b) => a.name.localeCompare(b.name)) 
            //Lo teniamos asi pero victor nos ayudo a ponerlo en una sola linea con el localCompare
            // if(a.name > b.name) return 1
            // if(a.name < b.name) return -1
        this.setState({
            actorsArr: actorsCopy
        })
    }

    buttonPopularity = () => {
        const popularityCopy = [...this.state.actorsArr]
        popularityCopy.sort((a,b) => b.popularity - a.popularity)
        this.setState({
            actorsArr: popularityCopy
        })
    }

    buttonDelete = e => {
        const del = [...this.state.actorsArr]
        del.splice(e, 1)

        this.setState({
            actorsArr: del
        })
    }

    render(){
        return(
            <div>
            <button onClick={this.buttonRandom}>Add Random Contact</button>
            <button onClick={this.buttonName}>Sort by Name</button>
            <button onClick={this.buttonPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th><h1>Picture</h1></th>
                            <th><h1>Name</h1></th>
                            <th><h1>Popularity</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.actorsArr.map((celebrity, i) => {
                            return(
                            <tr>
                                <td><img src={celebrity.pictureUrl}></img></td>
                                <td>{celebrity.name}</td>
                                <td>{Math.round(celebrity.popularity*100)/100}</td>
                                <button onClick={()=> this.buttonDelete(i)}>Delete</button>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }  
}