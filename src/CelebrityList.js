import React, { Component } from "react";
import celebrityArray from './contacts.json'
import CelebrityCard from "./CelebrityCard";

class CelebrityList extends Component {
    constructor() {
        super()
        this.state = {
            celebrity: celebrityArray
        }
    }

    render() {
        return this.state.celebrity.map((eachCelebrity) => (
            <CelebrityCard
                key={eachCelebrity.id}
                image={eachCelebrity.pictureUrl}
                name={eachCelebrity.name}
                popularity={eachCelebrity.popularity}
            />

        ))
    }
}

export default CelebrityList