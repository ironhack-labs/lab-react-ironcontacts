import React, { Component } from "react";
import contacts from "../contacts.json";


class RandomButton extends Component{
    constructor(){
        super();
    }
   

    render(){
        return(
            <button>Add a random contact</button>
        )
    }
}

export default RandomButton;