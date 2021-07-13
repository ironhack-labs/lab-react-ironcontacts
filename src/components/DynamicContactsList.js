import { Component } from "react"
import contacts from './contacts.json'


class DynamicContactsList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 5),

        }
    }

    addRandom = (...elm) => {
        let randomNumber = Math.random() * (contacts.length - 0) + 0
        let randomNumber2 = Math.round(randomNumber)
        let x = this.state.contacts.push(...elm, randomNumber2)
        console.log(randomNumber2)
    }

    sortByName() {
        let sortedByName = contacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1
            } else {
                return 0
            }
        })
    }

    sortByPopularity() {
        let sortByPopularity = contacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1
            } else {
                return 0
            }
        })
    }


    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>Picture </td>
                        <td>Name </td>
                        <td>Popularity</td>
                    </tr>
                    <tr>
                        {this.state.contacts.map(elm =>
                            <td key={elm.id}>
                                <img src={elm.pictureUrl} alt="Imagen" />
                                <p> {elm.name} </p>
                                <p> {elm.popularity}</p>
                            </td>
                        )}
                    </tr>
                </table>

                <button onClick={this.addRandom} >
                    Add Random Contact
                </button>
                <button onClick={this.sortByName} >
                    Sort by name
                </button>
                <button onClick={this.sortByPopularity} >
                    Sort by Popularity
                </button>


            </div>




        )
    }

}




export default DynamicContactsList