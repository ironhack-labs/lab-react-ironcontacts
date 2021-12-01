import React, { Component } from 'react'
import './App.css';
import contacts from './contacts.json';
import './FirstFiveContacts.css'


class FirstFiveContacts extends Component {
    constructor() {
        super()

        this.state = {
            firstFiveContacts: contacts.slice(0, 5)
        }



        function randomActor() {
            Math.floor(Math.random() * contacts.length)
        }
        
         (FirstFiveContacts.push(randomActor))
    };



    render() {

        return (
            <div>
                <h1>IronContacts</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.firstFiveContacts.map(actor => {

                            return (
                                <tr>
                                    <td> <img src={actor.pictureUrl} alt="" /></td>
                                    <td>{actor.name}</td>
                                    <td>{actor.popularity}</td>
                                </tr>
                            )
                        }
                        )
                        }
                    </tbody>

                </table>
            </div>)
    }


};
export default FirstFiveContacts