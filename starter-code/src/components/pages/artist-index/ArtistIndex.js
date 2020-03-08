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
                <td> <img width="70" height="100" src={`${artist.pictureUrl}`} alt={artist.name} /> </td>
                <td> <p>{artist.name}</p> </td>
                <td> <p>{artist.popularity}</p> </td>

              </tr>
            ).splice(0, 5)}
          </tbody>
        </Table>

      </Container>
    )
  }
}

export default ArtistIndex