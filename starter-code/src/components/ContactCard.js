import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>
          <img src={this.props.pictureUrl} />
        </td>
        <td>{this.props.popularity}</td>
      </tr>
    );
  }
}
export default ContactCard;
// {Data.map(e=>{
// return <...data={e}/>
// }