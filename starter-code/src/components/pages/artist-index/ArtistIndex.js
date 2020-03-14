import React, { Component } from 'react'
import artistsArray from '../../../contacts'
import { Container, Table, Button } from 'react-bootstrap'

class ArtistIndex extends Component {

  constructor() {
    super()
    this.state = { artists: artistsArray };

  }

  handleClick = () => {
    //console.log('Hola esto es this.props is:', this.props);

    let arrayArtists = [];

    this.state.artists.map(artist => {
      //console.log("Imprime todos los artistas", artist)
      arrayArtists.push(artist);

    })
    //Select only from the 6 artist onward:
    arrayArtists.slice(5, 199);
    //Select one artits randomly
    let randomArtist = arrayArtists[Math.floor(Math.random() * arrayArtists.length)];

    console.log("This is a random artist", randomArtist);

    return randomArtist;

  }





  render() {

    return (

      <Container>
        {<Button onClick={this.handleClick} variant="secondary" size="sm" active>
          Add Random Artist
  </Button>}

        <Table >
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Porpularity</th>
            </tr>
            {this.state.artists.map(artist =>
              <tr>
                {/* <input type="checkbox"></input> */}
                <td> <img width="70" height="100" src={artist.pictureUrl} alt={artist.name} /> </td>
                <td> <p>{artist.name}</p> </td>
                <td> <p>{artist.popularity}</p> </td>
                <td> <p>{artist.id}</p> </td>




                {/* Delete  */}
                {/* <td> {<Button onClick={(e) => this.deleteRow(artist.id, e)} variant="secondary" size="sm" active>
                  Delete
  </Button>}</td> */}

              </tr>
            ).splice(0, 5)}
          </tbody>
        </Table>

      </Container>
    )
  }
}

export default ArtistIndex