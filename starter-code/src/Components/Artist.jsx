import React, { Component } from 'react'

export class Artist extends Component {
    render(props) {
        return (
            <tr>
                <td className="ArtistCell"><img className="imgArtist" src={this.props.pictureUrl} alt=""/></td>
                <td className="ArtistCell">{this.props.name}</td>
                <td className="ArtistCell">{this.props.popularity}</td>
                <td className="ArtistCell"><button onClick = {this.props.deleteElem}>delete</button></td>
            </tr>
        )
    }
}

export default Artist
