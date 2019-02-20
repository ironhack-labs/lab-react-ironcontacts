import React from "react";

export default class ContactCard extends Component {
    render() {
        return (
            <div>
                <li>{this.props.pictureUrl}</li>
                <li>{this.props.name}</li>
                <li>{this.props.popularity}</li>
            </div>
        )
    }
}

export default ContactCard;