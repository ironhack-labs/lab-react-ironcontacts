import React from "react";

class Contact extends React.Component {
    render(){
        return(
            <tr>
                <th>
                    <img src={this.props.pictureUrl} alt={this.props.name} />
                </th>
                <th>{this.props.name}</th>
                <th>{this.props.popularity.toFixed(2)}</th>
            </tr>
        )
    }
}

export default Contact