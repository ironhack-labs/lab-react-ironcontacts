import React from "react";
import contacts from "../contacts.json"
import Contact from "./contacts/contacts.js"

class Button extends React.Component {
    constructor() {
        super()
        var otherCelebrities = contacts.splice(0,5)
        addCelebrities = () => {
            celebritiesList.push(otherCelebrities[Math.random() * otherCelebrities.length])
        }
    }
    render() {
        return (
            <button onClick="addCelebrities">Add Random Contact</button>
        )
    }
}
export default Button;