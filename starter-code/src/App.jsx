import React, { Component } from 'react';
import './App.css';
import Row from "./components/Row"
import celebrities from "./contacts.json"



export default class App extends Component {
constructor (props){
    super(props)
    this.state = {
    visibleCelebrities: celebrities.slice(0,5),
}}
pickRandomElementFromArray = (anArray)=> {
    return anArray[Math.floor(Math.random()*anArray.length)];
}
pickRandomCelebrity = () => {
    this.setState({
        visibleCelebrities: [...this.state.visibleCelebrities, this.pickRandomElementFromArray(celebrities)]
})
}
sortByName = () => {
    this.setState({
        visibleCelebrities: this.state.visibleCelebrities.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        })
    })
}
sortByPopularity = () => {
    this.setState({
        visibleCelebrities: this.state.visibleCelebrities.sort(function(a, b) {
            return b.popularity - a.popularity;
        })
    })
}

    render() {
        return ( 
        <div className = "App">
            <h1 className = "IronTitle">IronContacts</h1>
            <button className="addButton" onClick={this.pickRandomCelebrity}>Add Random Contact</button>
            <button className="nameButton" onClick={this.sortByName}>Sort by name</button>
            <button className="popularityButton" onClick={this.sortByPopularity}>Sort by popularity</button>
            <table>
                <tr className="titles">
                    <th className="pictureTitle">Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                    {this.state.visibleCelebrities.map((celebrity)=>
                <Row
                    key={celebrity.pictureUrl}
                    pictureUrl={celebrity.pictureUrl}
                    name={celebrity.name}
                    popularity={celebrity.popularity.toFixed(2)}
                />
                )}
            </table>
        </div>
        );
    }
}

//npm i
//npm install node-sass
//npm start