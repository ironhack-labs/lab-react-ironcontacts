import React from 'react';


class Contact extends React.Component {

    render() {
        return (

            <tr>
                <td><img src={this.props.pictureUrl} alt="picture" height="100px"/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity.toFixed(2)}</td>
                <td><button className="deleteContact" onClick={()=> this.props.deleteContact()}>Remove contact</button></td>
            </tr>

        )
    }
}

export default Contact;