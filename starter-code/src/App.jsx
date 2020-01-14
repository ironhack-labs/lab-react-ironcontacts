import React, { Component } from 'react';
import './App.css';
import Row from "./components/Row"
import celebrities from "./contacts.json"



export default class App extends Component {
constructor (props){
    super(props)
    this.state = {
    visibleCelebrities: celebrities.slice(0,5)
}}

    render() {
        return ( 
        <div className = "App">
            <h1 className = "IronTitle">IronContacts</h1>
            <div>
            <table>
                <tr className="titles">
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
                    {this.state.visibleCelebrities.map((celebrity)=>
                <Row
                        pictureUrl={celebrity.pictureUrl}
                        name={celebrity.name}
                        popularity={celebrity.popularity.toFixed(2)}
                />
                )}
                
            </table>
                <div>
                
                </div>
            </div>
        </div>
        );
    }
}

//npm i
//npm install node-sass
//npm start