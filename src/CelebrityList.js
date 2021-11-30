import React, { Component } from "react";
import celebrityArray from './contacts.json'
import CelebrityCard from "./CelebrityCard";

const fiveCelebrity = celebrityArray.slice(0, 5)

class CelebrityList extends Component {
    constructor() {
        super()
        this.state = {
            celebrity: fiveCelebrity
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

    // addCelebrity(celebrityID) {
    //     render()
    //     {
    //         const newCelebrity = this.state.celebrity.filter(celebrity => celebrity.id !== celebrityID)
    //         return (

    //             <CelebrityCard key={eachCelebrity.id}
    //                 {...eachCelebrity} addCelebrity={() => this.addCelebrity(eachCelebrity.id)}
    //             />
    //         )

    //     }
    // }
}

export default CelebrityList