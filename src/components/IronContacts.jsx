import React, { Component } from 'react'

class IronContacts extends Component {
    render(){
        return (
            <tr>
                <th><img src={this.props.pictureUrl} alt={this.props.name}/></th>
                <th>{this.props.name}</th>
                <th>{this.props.popularity}</th>
                <th><button onClick={() => {this.props.remove(this.props.index);}}>Delete</button></th>
            </tr>
        )
    }
}

export default IronContacts;
