import React, { Component } from 'react'
import { contacts }  from "../contacts.json"

class ContactList extends Component {
    constructor() {
        super()

        this.state = {
            contacts: contacts
        }
    }

    render() {

        return (
          <div>
            <h2>{this.props.title}</h2>
            {this.state.drinks.map((eachDrink, idx) => <p key={idx}>La bebida nº {idx} es: {eachDrink}</p>)}
          </div>
        )
      }
}