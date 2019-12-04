import React, { Component } from 'react'
import contacts from '../components/contacts'
import Celebs from './Celebs'


class List extends Component {
    constructor() {
        super()
        this.state = {
            contactCopy: [...contacts].splice(0, 5),
        }
    }

    addRandomHandler = () => {
        const fromFive = [...this.state.contactCopy]
        fromFive.push(contacts[Math.floor(Math.random() * contacts.length - 5) + 5])
        this.setState({ contactCopy: fromFive })
    }

    sortByName = () => {
        const sorted = [...this.state.contactCopy]
        sorted.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        this.setState({ contactCopy: sorted })
    }

    sortByPopularity = () => {
        const sorted = [...this.state.contactCopy]
        sorted.sort(function (a, b) {
            return b.popularity - a.popularity
        })
        this.setState({ contactCopy: sorted })
    }

    deleteCeleb = id => {
        const sorted = [...this.state.contactCopy]
        sorted.splice(id, 1)
        this.setState({ contactCopy: sorted })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <button onClick={this.addRandomHandler} className="btn btn-dark col-2">Add random Contact</button>
                        <button onClick={this.sortByName} className="btn btn-dark separa col-2">Sort by Name</button>
                        <button onClick={this.sortByPopularity} className="btn btn-dark col-2">Sort by populuarity</button>

                    </div>
                </div>
                {this.state.contactCopy.map((props, idx) => {
                    return (
                        <Celebs key={idx}{...props} deleteCeleb={() => this.deleteCeleb(idx)} />
                    )
                })}

            </>
        )
    }
}

export default List