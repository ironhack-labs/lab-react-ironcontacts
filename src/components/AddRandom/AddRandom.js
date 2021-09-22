
import React, { Component } from 'react'



export default class AddRandom extends Component {

        constructor (props){
        super(props)
    
    }


    render() {
        return (
            <div>
                <button onClick={() =>this.props.clickRandom()}>Add Random</button>
                <button onClick={() =>this.props.clickSortName()}>Sort by name</button>
                <button onClick={() =>this.props.clickSortPopularity()}>Sort by popularity</button>
            </div>
        )
    }
}
