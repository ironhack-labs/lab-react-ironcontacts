import React from "react";

export default class Actor extends React.Component {

  render() {
    return (
        <tr>
          <td><img src={this.props.pictureUrl} alt="" width="100"/></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
         <td> <button onClick={() => this.props.clickToDelete()}>Delete me</button></td>
        </tr>
);
}
}