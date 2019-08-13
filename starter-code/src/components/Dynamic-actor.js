import React, { Component } from 'react'
import contacts from './contacts.json'

class ActorList extends Component {

    constructor() {
        super()
        this.state = {
            actor: [
                { src: "The Godfather", name: "Francis Coppola", popularity: true },
   
            ],
            showOscarAwarded: true
        }
    }


    deleteOneMovie = idx => {

        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)

        this.setState({
            movies: moviesCopy
        })
    }

    toggleMovies = () => this.setState({ showOscarAwarded: !this.state.showOscarAwarded })


    render() {

        const filteredMovies = this.state.movies.filter(elm => elm.hasOscars === this.state.showOscarAwarded)

        return (
            <div className="row">
                {
                    filteredMovies.map((elm, idx) => {
                        return <ImprovedCard key={idx} {...elm} deleteMovie={() => this.deleteOneMovie(idx)} />
                    })
                }

                <button className="btn btn-dark filterMovies" onClick={this.toggleMovies}>
                    {this.state.showOscarAwarded ?
                        ' Mostrar sólo películas sin Oscar' :
                        'Mostrar sólo películas con Oscar'
                    }
                </button>
            </div>
        )
    }
}


export default ActorList










// Versión sin filtro

/*

import React, { Component } from 'react'
import ImprovedCard from './Improved-card'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola" },
                { title: "Star Wars", director: "Rian Johnson" },
                { title: "Campamento Flippy", director: "Rian Johnson" },
                { title: "Rompe Ralph", director: "Rian Johnson" },
                { title: "The Shawshank Redemption", director: "Frank Darabont" }
            ]
        }
    }


    deleteOneMovie = idx => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(idx, 1)

        this.setState({
            movies: moviesCopy
        })
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.movies.map((elm, idx) => {
                        return <ImprovedCard key={idx} {...elm} deleteMovie={() => this.deleteOneMovie(idx)} />
                    })
                }
            </div>
        )
    }


}


export default MoviesList

*/