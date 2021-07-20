import { Component } from "react"

class ContactCard extends Component {
    render(){
        return (
            <tr>
                <td> <img src={this.props.pictureUrl} alt='contact-pic'/> </td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity.toFixed(2)}</td>
            </tr>
        )
    }
}

export default ContactCard;