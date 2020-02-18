import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json';

export default class DisplayContact extends Component {
    state = {
        name: [...contacts].splice(0,5)
        // celebrity: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }

    selectRandom = () => {
        const copy = [...this.state.name];
        // this.state.name.push(Math.floor(Math.random() * contacts.length))
        let random = Math.floor(Math.random() * contacts.length)
        copy.push(contacts[random]);
        this.setState({name:copy});      
    }

    sortByName = () => {
        const copy = [...this.state.name];
        copy.sort((a,b) => {
            if (a.name<b.name) {
                return -1
            } else if (a.name>b.name) {
                return 1
            } else {
                return 0
            }
        })  
        this.setState({name: copy}) 
    }

    sortByPopularity = () => {
        const copy = [...this.state.name];
        copy.sort((a,b) => b.popularity-a.popularity)
        this.setState({name: copy})
    };

    deleteActor = i => {
        const copy = [...this.state.name];
        copy.splice(i, 1);
        this.setState({name: copy})
    }


    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.selectRandom}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {this.state.celebrity.slice(0,5).map((c, index) => ( */}
                    {this.state.name.map((c, index) => (
                        <tr>
                            <td key={index}> <img src={c.pictureUrl}/> </td>
                            <td>{c.name}</td>
                            <td>{Math.round(c.popularity *100) /100}</td>   
                            <button onClick={() => this.deleteActor(index)}>X</button>                             
                        </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        )
    }
}
