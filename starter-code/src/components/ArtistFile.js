import React from 'react';
// import "./ArtistFile.css"

class ArtistFile extends React.Component {

    render() {
        return (
   
            <tr>
                <td><img src={this.props.pictureUrl} className="imageArtist" alt={this.props.name} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
            </tr>
      
        )
    }

}

export default ArtistFile;
