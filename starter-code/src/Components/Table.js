import React, { Component } from 'react'
import CelebTable from './celbritytable';

export default class table extends Component {
    constructor(props) {
        super();
        this.state = {
          isNameToggled: true,
          isPopToggled: true,
          data: props.data,
          fulldata: props.fullData,
          addContact: () => {
            let randomCeleb = Math.floor(Math.random() * this.state.fulldata.length);
            const dataCopy = this.state.data;
            dataCopy.push(this.state.fulldata[randomCeleb]);
            this.setState( {data: dataCopy} );
        },
        sortName: () => {
            const toggled = !this.state.isNameToggled;
            const dataCopy = this.state.data;
            toggled
            ? dataCopy.sort(function(a,b){return a.name.localeCompare(b.name); })
            : dataCopy.sort(function(a,b){return b.name.localeCompare(a.name); });
            this.setState( {data: dataCopy, isNameToggled: toggled})

        },
        sortPopularity: () => {
            const toggled = !this.state.isPopToggled; 
            const dataCopy = this.state.data;
            toggled
            ? dataCopy.sort(function(a,b){return a.popularity - b.popularity; })
            : dataCopy.sort(function(a,b){return b.popularity - a.popularity; })
            this.setState( {data: dataCopy, isPopToggled: toggled})
        },
        deleteCeleb: (celebIndex) => {
            const dataCopy = this.state.data;
            dataCopy.splice(celebIndex, 1);
            this.setState( {movies: dataCopy} );
          }
        }
      }

    render() {
        return (
            <div className='tablee'>
                <div className = 'buttonsrow'>
                    <button onClick = {this.state.addContact}>Add Contact</button>
                    <button onClick = {this.state.sortName}>Sort By Name</button>
                    <button onClick = {this.state.sortPopularity}>Sort By Popularity</button>
                </div>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    { 
                this.state.data.map( (oneCeleb, index) => {
                return (
                <CelebTable 
                    key={index} 
                    clickToDelete={ ()=> this.state.deleteCeleb(index) }
                    {...oneCeleb}
                />
                ) 
            })
                }
                </table>
            </div>
        )
    }
}

