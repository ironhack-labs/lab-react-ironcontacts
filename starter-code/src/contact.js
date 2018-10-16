import React, { Component } from "react";
import './App.css';
import contacts from './contacts.json';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listArticle: contacts.sort( () => Math.random() -0.5),
            clickCount: 5
        }
    }
    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })   
    }
    addRandomContact = () => {

    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Add Random Button</button>
                {
                    contacts.slice(0, this.state.clickCount).map((film, key) => {
                        return <article key={key}>
                            <p>Picture</p>
                            <img src={film.pictureUrl}></img>
                            <p>Name : {film.name}</p>
                            <p> Popularity {Math.round(film.popularity * 100) / 100}</p>
                        </article>
                    })
                }

            </div>
        )
    }
}

export default Contact;