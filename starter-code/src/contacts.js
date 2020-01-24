import React, { Component } from 'react';
import contacts from './contacts.json'

export default class Contacts extends Component {

    constructor () {
        super();

        this.state = {
           contacts: [{
                name: "Idris Elba",
                pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
                popularity: 11.622713,
                id: "11731993-0604-4bee-80d5-67ad845d0a38"
              },
              {
                name: "Jessica Chastain",
                pictureUrl: "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
                popularity: 8.324357,
                id: "17980511-75ca-48b0-bea8-462fec2ee43d"
              },
              {
                name: "Johnny Depp",
                pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
                popularity: 15.656534,
                id: "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
              },
              {
                name: "Emilia Clarke",
                pictureUrl: "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
                popularity: 16.211837,
                id: "e14aa81d-b812-412d-bc4d-4a0d2c9c66f4"
              },
              {
                name: "Leonardo DiCaprio",
                pictureUrl: "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
                popularity: 11.245333,
                id: "b4d2c7b8-fdd5-426a-85bd-011c3f50a6c6"
              }]
        }
    this.state = {contacts: contacts.slice(0,5)}
    };

    clickHandler = () => {
        const ranId = Math.floor(Math.random() * contacts.length);
        const ranContact = contacts[ranId];
        this.setState((state, props) => {contacts: state.contacts.push(ranContact); return state});
    }

    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Add Random Contact</button>
            <div className="contacttable">
                <table >
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts.map(onePerson => {
                            return (
                            <tr>
                                <td><img src={onePerson.pictureUrl} alt="" /> </td>
                                <td>{onePerson.name}</td>
                                <td>{onePerson.popularity.toFixed(2)}</td>
                            </tr>)
                                
                        })}
                    </tbody>
                </table>
            </div>
            </div>

        )
    }
}