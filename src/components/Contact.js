import React from "react";

class Contact extends React.Component {
    render(){
        return (
          <tr>
            <th>
              <img src={this.props.pictureUrl} alt={this.props.name} />
            </th>
            <th>{this.props.name}</th>
            <th>{this.props.popularity.toFixed(2)}</th>
            <th>
              <button onClick={this.props.clickToDelete}>Delete</button>
            </th>
          </tr>
        );
    }
}

export default Contact