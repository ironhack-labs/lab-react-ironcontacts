import React from "react";
import "./Contacto.css";

class Contacto extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.contactInfo.name,
            pictureUrl: this.props.contactInfo.pictureUrl,
            popularity: this.props.contactInfo.popularity
        }


    }

    render() {

        return (
            <tr>    
                <td><img src={this.state.pictureUrl} alt="picture" style={{ width: 80 }} /></td>
                <td>{this.state.name}</td>
                <td>{this.state.popularity}</td>
            </tr>

        )
    }
}

export default Contacto;


