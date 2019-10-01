import React, { Component } from 'react'
import CelebrityPanel from './CelebrityPanel.component'
import './CelebrityList.container.css';
const celebrities = require('./contacts.json')

class CelebrityList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            celebrities: celebrities.slice(0, 5)
        }
    };

    createCelebrityPanels = () => {
        return this.state.celebrities.map((celebrity, i) => <CelebrityPanel key={i} remove={this.removeCelebrityByID} celebrity={celebrity}></CelebrityPanel>)
    }

    sortByName = () => {
        this.setState({
            celebrities: [...this.state.celebrities].sort((a, b) => a.name.localeCompare(b.name))
        })
    }

    sortByPopularity = () => {
        this.setState({
            celebrities: [...this.state.celebrities].sort((a, b) => b.popularity - a.popularity)
        })
    }

    addRandomCelebrity = () => {
        let targetCeleb = celebrities[0]
        while (this.state.celebrities.includes(targetCeleb)) {
            targetCeleb = celebrities[Math.floor(Math.random() * celebrities.length)]
        }
        this.setState({
            celebrities: [...this.state.celebrities, targetCeleb]
        })
    }

    removeCelebrityByID = (id) => {
        let celebrities = [...this.state.celebrities]
        celebrities.splice(id,1)
        this.setState({
            celebrities
        })
    }

    render() {
        return (
            <div id="celeb-list">
                <button onClick={this.addRandomCelebrity}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by Name</button>
                <button onClick={this.sortByPopularity}>Sort by Popularity</button>
                <div className="flex flex-v jcsb">
                    <div id="row-titles" className="flex jcsb">
                        <h2>Picture</h2>
                        <h2>Name</h2>
                        <h2>Popularity</h2>
                        <h2>Action</h2>
                    </div>

                    {this.createCelebrityPanels()}
                </div>
            </div>
        )
    };
};

export default CelebrityList;