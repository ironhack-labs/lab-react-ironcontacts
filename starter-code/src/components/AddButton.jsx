import React, { Component } from 'react';
import contacts from '../contacts.json';

export class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: contacts,
        }
    }

    handleRandom() {
        console.log("toto")
        // console.log(this.state.stars)
        // console.log(contacts.length)
        // console.log(this.stars.length)

        // Number between 0 and stars.length
        const randomStar = Math.ceil(Math.random() * contacts.length)

        // this.setState({ stars: randomStar })
        this.setState({ stars: contacts[randomStar] })
    }

    render() {

        return (
            <button onClick={this.handleRandom}>Add Random Contact</button>
        )
    }
}

export default AddButton


