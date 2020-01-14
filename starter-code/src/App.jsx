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
pickRandomCelebrity = ()=> {
this.setState({
    visibleCelebrities: [...this.state.visibleCelebrities,  this.pickRandomElementFromArray(celebrities)]
})
}

    render() {
        return ( 
        <div className = "App">
            <h1 className = "IronTitle">IronContacts</h1>
            <button onClick={this.pickRandomCelebrity}className="buttonAdd">Add Random Contact</button>
            <table>
                <tr className="titles">
                    <th>Picture</th>
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