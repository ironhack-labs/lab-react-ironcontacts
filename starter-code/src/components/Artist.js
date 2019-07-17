import React from 'react'

class Artist extends React.Component{
    render(){
        const artist = this.props.contacts

    return(

        <tr>
            <td><img src={artist.pictureUrl} height='50' alt='.'/></td>
            <td>{artist.name} </td>
            <td>{artist.popularity} </td>
            <td><button onClick = {() => this.props.deleteArtist(this.props.index)}>Delete</button></td>
        </tr>
 )    
    }
}


export default Artist