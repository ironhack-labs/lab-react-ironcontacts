import Acteurs from '../contacts.json';

import React, { Component } from 'react';

export class Contacts extends Component {
  state = {
    acteurs: Acteurs.slice(0, 5),
  };
    
    randomActeur = () => {
        const newActeur = [...this.state.acteurs]
        newActeur.push(Acteurs[Math.floor(Math.random() * (Acteurs.length -6+1))+6]);
        this.setState ({acteurs:newActeur})
  };
    
    handleDelete = (index) => {
        // Cool kids method
        this.setState({
            acteurs: this.state.acteurs.filter((acteur, id) => id !== index),
        });
    }

    nameSort = () => {
        this.state.acteurs.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({acteurs: this.state.acteurs})
    }

    popularitySort = () => {
        this.state.acteurs.sort((a, b) => b.popularity - a.popularity)
        this.setState({acteurs: this.state.acteurs})

    }




  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.acteurs.map((acteur,index) => (
              <tr key={acteur.id}>
                <td>
                  <img src={acteur.pictureUrl} alt={acteur.name} />
                </td>
                <td>
                  <h2>{acteur.name}</h2>
                </td>
                <td>
                  <h2>{acteur.popularity.toFixed(2)}</h2>
                </td>
                <td>
                <button onClick={() => this.handleDelete(index)}>Delete Contact</button>
                </td>
              </tr>
            ))}
          </thead>
        </table>

        
            <button onClick={this.randomActeur}>Random Acteurs</button>
            <button onClick={this.nameSort}>Order By Name</button>
            <button onClick={this.popularitySort}>Order By Popularity</button>
      </div>
    );
  }
}

export default Contacts;
