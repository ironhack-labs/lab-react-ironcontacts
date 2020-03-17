import React, { Component } from 'react'
import artistsArray from '../../../contacts'
import { Container, Table, Button } from 'react-bootstrap'

class ArtistIndex extends Component {

  constructor() {
    super()
    this.state = { artists: artistsArray };
    this.initalState = artistsArray.splice(0, 5)
    this.arrayWithout5 = { removing: artistsArray.slice(5, 199) }
    this.finalState = { final: this.initalState }

  }

  handleClick = () => {
    let arrayToGetRandom = this.arrayWithout5.removing;
    let randomArtist = arrayToGetRandom[Math.floor(Math.random() * arrayToGetRandom.length)];
    let index = arrayToGetRandom.indexOf(randomArtist)
    arrayToGetRandom.splice(index, 1)

    this.arrayWithout5.removing = arrayToGetRandom //Array with random artist removed
    //Añade randomArtist a Array inicial
    this.initalState.push(randomArtist)  //El estado inical se ve modifacdo por lo que 
    //console.log("This is add", add)
    this.setState({ final: this.setState })
    //console.log("3. this is last finalstate", this.setState)
  }

  sortByNameA = () => {
    this.finalState.final.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({ final: this.setState })
  }

  sortByPopularity = () => {
    this.finalState.final.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1)
    this.setState({ final: this.setState })
  }

  render() {

    const artists = this.finalState;
    console.log("4. This is the Array of artists actualizado", artists)
    return (

      <Container>
        {<Button onClick={this.handleClick} variant="secondary" size="sm" active>
          Add Random Artist
         </Button>}
        {<Button onClick={this.sortByNameA} variant="secondary" size="sm" active>
          Sort by ABC
         </Button>}
        {<Button onClick={this.sortByPopularity} variant="secondary" size="sm" active>
          Sort by popularity
         </Button>}

        <Table >
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {artists.final.map(artist =>

              <tr>
                <td> <img width="70" height="100" src={artist.pictureUrl} alt={artist.name} /> </td>
                <td> <p>{artist.name}</p> </td>
                <td> <p>{artist.popularity}</p> </td>
                <td> <p>{artist.id}</p> </td>
              </tr>
            )}

          </tbody>
        </Table>

      </Container >
    )
  }
}

export default ArtistIndex