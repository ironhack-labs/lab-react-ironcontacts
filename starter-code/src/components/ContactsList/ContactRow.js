import React, {Component}from 'react';

class ContactRow extends Component {
  onDelete = () => {
    this.props.onDelete(this.props.id)
  }
   render() {
    return (
      <tr className="contacts">
        <td><img src={this.props.pictureUrl} className="picwidth" alt=""/></td>
        <td className="subtitle">{this.props.name}</td>
        <td className="subtitle">{this.props.popularity}</td>
        <td className="action">{this.props.action}
          <button onClick={this.onDelete}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default ContactRow;