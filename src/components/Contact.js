import React from 'react';

class Contact extends React.Component {

render () {
    return (
       <tr>
<td> <img src={this.props.pictureUrl} alt={this.props.name} height="80px"></img></td>
<td>{this.props.name}</td>
<td>{this.props.popularity}</td>
<td><button onClick={() => this.props.deleteContact(this.props.contactId)}>Delete</button>
</td>
       </tr>
    )
}
}

export default Contact;
