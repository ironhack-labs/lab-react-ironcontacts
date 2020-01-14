import React, { Component } from 'react';

// could've used a functional component I guess
class Contact extends Component {
    constructor(props){
        super(props);
        this._delete=this._delete.bind(this);
    }
    _delete(){
        console.log("Contact #"+(this.props.index+1)+" deleting itself!");
        this.props.deleteMethod(this.props.index);
    }
    render() {
        return (
            <tr>
                <td><button onClick={this._delete}>Delete</button></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><img src={this.props.picture} width='50%' alt='picture'/></td>
            </tr>
        )
    }
}

export default Contact;
