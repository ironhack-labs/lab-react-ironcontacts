import "./RandomContact.css"
import React from "react"

class RandomContact extends React.Component {

    render(){
        return(
            <button onClick={() => this.props.updateContacts()}>Add Random Contact</button>
        )
    }

}



export default RandomContact