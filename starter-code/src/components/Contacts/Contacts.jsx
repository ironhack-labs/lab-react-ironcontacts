import React, { Component } from 'react';
import contacts from "../../contacts.json";
import "./Contacts.css"

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedPeople: contacts.slice(0, 5) };
        this.allPeople = contacts;
        this.handleAddOneRandomly = this.handleAddOneRandomly.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAddOneRandomly() {
        let newPeople = this.allPeople[getRandomIntInclusive(0, this.allPeople.length)] 
        this.setState({ selectedPeople: [...this.state.selectedPeople, newPeople] })
    }

    handleSort(type) {
        if (type === "name") {
            this.setState({
                selectedPeople: this.state.selectedPeople.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            })
            
        }else if(type === "popularity"){
        this.setState({
            selectedPeople: this.state.selectedPeople.sort((a, b) => {
            return b.popularity - a.popularity
        })})
        }
    }

    handleDelete(index) {
        let newPeople = [...this.state.selectedPeople];
        newPeople.splice(index, 1);
        this.setState({ selectedPeople: newPeople})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAddOneRandomly} className="magicButton">Add one random contact</button>
                <button onClick={()=>this.handleSort("name")} className="magicButton">Sort by name</button>
                <button onClick={()=>this.handleSort("popularity")} className="magicButton">Sort by popularity</button>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="4">IronContacts</th>
                        </tr>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.selectedPeople.map((person, index) => (
                        <tr key={index}>
                                <td><img className="imgpeople" src={person.pictureUrl} alt={person.name}/></td>
                            <td>{person.name}</td>
                                <td>{person.popularity.toFixed(1)}</td>
                                <td><button onClick={()=>this.handleDelete(index)} className="magicButton">Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>  
            </div>   
        )
    }
}

export default Contacts
