import React, { Component } from 'react'

import artistsArray from '../../../contacts'

import { Container, Table } from 'react-bootstrap'



class ArtistIndex extends Component {

  constructor() {
    super()
    this.state = { artists: artistsArray }
  }

  render() {

    return (

      <Container>

        <h1>List of Artists</h1>

        <Table >
          <tbody>
            {this.state.artists.map(artist =>
              <tr>
                <input type="checkbox"></input>
                <td> <img src={`${artist.pictureUrl}`} alt={artist.name} /> </td>
                <td> <p>{artist.name}</p> </td>

              </tr>
            )}
          </tbody>
        </Table>

      </Container>
    )
  }
}

export default ArtistIndex