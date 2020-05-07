import React, { Component } from "react";
import data from "../contacts.json";
import "../stylesheets/Celebrities.css";

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Celebrities extends Component {
    state = {
        contactsDisplayed: data.slice(0, 5),
    };


    addRandom = () => {
        let randomStar = data[getRandom(data.length)];
        this.setState({
            contactsDisplayed: [...this.state.contactsDisplayed, randomStar],
        });
    };

    sortByName = () => {
        console.log("sort by name");
        this.setState({
            contactsDisplayed: [...this.state.contactsDisplayed].sort((a, b) => {
                return a.name.localeCompare(b.name);
            }),
        });
    };

    sortByPopularity = () => {
        console.log("sort by pop");
        this.setState({
            contactsDisplayed: [...this.state.contactsDisplayed].sort((a, b) => {
                return a.popularity - b.popularity;
            }),
        });
    };

    deleteCelebrity = (index) => {
        const copy = [...this.state.contactsDisplayed];
        copy.splice(index, 1);
        this.setState({ contactsDisplayed: copy });
    };


    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.addRandom}>Add random Contact</button>
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
                        {this.state.contactsDisplayed.map((oneCelebrity, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={oneCelebrity.pictureUrl} alt="" />
                                </td>
                                <td>{oneCelebrity.name}</td>
                                <td>{oneCelebrity.popularity}</td>
                                <td>
                                    <button onClick={() => this.deleteCelebrity(index)}>
                                        Delete
                                    </button>
                                    {}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

}