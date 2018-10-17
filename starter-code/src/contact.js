import React, { Component } from "react";
import './App.css';
import contacts from './contacts.json';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contact: contacts.sort(() => Math.random() - 0.5),
            clickCount: 5
        }
    }
    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    sortByName = () => {
        this.setState({
            contact: contacts.sort((a, b) => a.name > b.name)//Ne pas mettre de slice à cet endroit, sinon on bloque l'array à une certaine taille
        })
    }

    sortByPopularity = () => {
        this.setState({
            contact: contacts.sort((a, b) => a.popularity > b.popularity)
        })
    }

    deleteSelectedElement = (movieIndex) => {
        const moviesCopy = this.state.contact
        moviesCopy.splice(movieIndex, 1)
        this.setState({
            clickCount: this.state.clickCount - 1,
            contact: moviesCopy,
        })
    }

    clickToDelete = (key) => {
        console.log(key)
        this.deleteSelectedElement
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Add Random Button</button>
                <button onClick={this.sortByName}>Sort By Name</button>
                <button onClick={this.sortByPopularity}>Sort By Popularity</button>
                {
                    this.state.contact.slice(0, this.state.clickCount).map( (film, key) => {
                        return <article key={key} >
                            <p>Picture</p>
                            <img src={film.pictureUrl} className="picture"></img>
                            <p>Name : {film.name}</p>
                            <p> Popularity {Math.round(film.popularity * 100) / 100}</p>
                            <button key={key} onClick={ () => this.deleteSelectedElement(key)}>DELETE</button>
                        </article>
                    })
                }

            </div>
        )
    }
}

export default Contact;