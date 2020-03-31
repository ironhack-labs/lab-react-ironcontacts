import React, { Component } from "react";
import RandomArtist from "./RandomArtist";
import contacts from '../../contacts.json';

class AddRandomArtist extends Component {
  constructor() {
    super();
    this.state = {
     contacts
    };
  }

  addArtist = () => {
      const artistCopy = [...this.state.contacts];
      let posicionArtist = Math.floor(Math.random() * artistCopy.length);
      this.setState({
          contacts: artistCopy[posicionArtist]
      })
  }

  render() {
    return (
    <div>
    {
           this.state.contacts.map((oneArtist, index) => {
               //return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
               return <RandomArtist key={index} {...oneArtist} clickToAdd={() => this.addArtist(index)} />
           })
        }
    </div>
    );
  }

}
export default AddRandomArtist;