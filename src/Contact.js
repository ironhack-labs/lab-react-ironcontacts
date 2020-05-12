import React, { Component } from 'react'

// "name": "Idris Elba",
// "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
// "popularity": 11.622713,
// "id": "11731993-0604-4bee-80d5-67ad845d0a38"

class Contact extends Component {
    render() {
        return (
            <tr>
            {console.log('this.props', this.props)}
                <td>
                    <h1> {this.props.name} </h1>
                </td>
                <td>
                    <img src={this.props.picture} alt="Image not found"/>
                </td>
                <td>
                    <h3> {this.props.popularity} </h3>
                </td>
                <td>
                    <button onClick={() => this.props.deleteThis(this.props.key)} className="delete-btn">Delete</button>
                </td>
            </tr>

        )
    }
}

export default Contact
