import React , {Component} from 'react'
import Artist from './Artist'


class ArtistList  extends Component{

    render(){

        const artists = this.props.artists.map((artist, i) =>{
                return <Artist deleteArtist={this.props.deleteArtist} key={i} contacts={artist} index={i}/>
        })
       
        return (
            <div>
                    <table>
                        <tbody>

                        
                        <tr>    
                             <th>Picture</th>
                             <th>Name</th>
                             <th>Popularity</th>
                             <th>Action</th>
                        </tr>   
                        
                            {artists}
                            </tbody>
                    </table>
            </div>
        )
    }
}

export default  ArtistList